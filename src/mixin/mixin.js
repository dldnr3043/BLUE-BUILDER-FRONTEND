export const mixin = {
    data() {
        return {

        }
    },
    methods: {
        mixin_logout: async function() {
            let logoutFlag = confirm('로그아웃을 하시겠습니까?')
            if(logoutFlag) {
                let url = '/api/logout'
                let data = {
                    email: this.$store.getters.getUserInfo.email
                };
                let header = {};

                let res = await this.$post(url, data, header);

                if(!res.data.ERROR_FLAG) {
                    this.$store.dispatch('initToken')
                    window.localStorage.removeItem('accessToken')
                    window.localStorage.removeItem('accessTokenExpirationTime')
                    window.localStorage.removeItem('refreshToken')
                    location.href = '/login'
                }
                else {
                    alert(res.data.ERROR_MSG)
                }
            }
        },
    }
}