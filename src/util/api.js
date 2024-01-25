import axios from "axios";

const api = axios.create({ timeout: 3000 })

export function post(url, data, header) {
    return new Promise(resolve=>{
        api.post(url, data, { headers : header })
        .then(res=>{
            resolve(res)
        })
        .catch(err=>{
            alert(err)
        })
    })
}




// request(요청)시 아래의 로직이 인터셉트 된다.
api.interceptors.request.use(
    async (request) => {
      return request;
    },
    async (error) => {
      return Promise.reject(error);
    }
  );
  
  // response(응답)시 아래의 로직이 인터셉트 된다.
  api.interceptors.response.use(
    async (response) => {
      return response;
    },
    async (error) => {
      // api 에러 발생한 경우 httpcode를 store에 셋팅
      store.commit("commonStore/MU_COMMON_APP_ERROR", error);
      return Promise.reject(error);
    }
  )