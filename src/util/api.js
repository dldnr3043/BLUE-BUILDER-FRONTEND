import axios from "axios";

const api = axios.create({ timeout: 3000 })

export function post(url, data, header) {
    return new Promise(resolve=>{
        let now = new Date().getTime()

        // 1. access token이 만료되었을 경우 refresh token을 통해 access token 재발급 후 api 진행
        if(window.sessionStorage.getItem('accessToken') && now > window.sessionStorage.getItem('accessTokenExpirationTime')) {
            let reissueUrl = '/api/auth/token/reissue';
            let reissueData = {
                accessToken: window.sessionStorage.getItem("accessToken"),
                refreshToken: window.sessionStorage.getItem("refreshToken")
            };
  
            // token 재발급
            api.post(reissueUrl, reissueData, { headers : {}})
            .then(res=>{
                // 성공한 경우 새로운 토큰 정보 세팅 후 기존 api 진행
                if(!res.data.ERROR_FLAG) {
                    window.sessionStorage.setItem('accessToken', res.data.DATA.accessToken)
                    window.sessionStorage.setItem('accessTokenExpirationTime', res.data.DATA.accessTokenExpirationTime)
                    window.sessionStorage.setItem('refreshToken', res.data.DATA.refreshToken)
  
                    // 원래 하려던 api 진행
                    api.post(url, data, { headers : header })
                    .then(res=>{
                        resolve(res)
                    })
                    .catch(err=>{
                        alert(err)
                    })
                }
                // 실패한 경우 세션정보 초기화 후 로그인 페이지로 이동
                else {
                    this.$store.dispatch('initToken')
                    window.sessionStorage.clear()
                    location.href = '/login'
                    resolve(res)
                }
            })
            .catch(err=>{
                alert(err)
            })
        }
        else {
          api.post(url, data, { headers : header })
          .then(res=>{
              resolve(res)
          })
          .catch(err=>{
              alert(err)
          })
        }
    })
}




// request(요청)시 아래의 로직이 인터셉트 된다.
api.interceptors.request.use(
    async (request) => {
      // login, signup, reissue는 access token 인증하지 않음
      if(!request.url.includes('login') && !request.url.includes('signup') && !request.url.includes('reissue')) {
        request.headers['Authorization'] = 'Bearer ' + window.sessionStorage.getItem("accessToken")
      }
      
      return request
    },
    async (error) => {
      return Promise.reject(error)
    }
  );
  
  // response(응답)시 아래의 로직이 인터셉트 된다.
  api.interceptors.response.use(
    async (response) => {
      return response
    },
    async (error) => {
      if(error.response.status == 401 || error.response.status == 403) {
        window.sessionStorage.clear()
        location.href = '/login'
      }
      else {
        alert('시스템 내부에 장애가 발생했습니다.')
      }
      return Promise.reject(error)
    }
  )