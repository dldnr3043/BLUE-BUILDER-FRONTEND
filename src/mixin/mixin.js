export const mixin = {
    data() {
        return {
            sessionTimeout: 1000 * 60 * 60 // 1 hour
        }
    },
    methods: {
        mixin_logout: async function() {
            let url = '/api/logout'
            let data = {
                email: this.$store.getters.userInfo.email
            };
            let header = {};

            let res = await this.$post(url, data, header);

            if(!res.data.ERROR_FLAG) {
                this.$store.dispatch('initToken')
                window.localStorage.removeItem('accessToken')
                window.localStorage.removeItem('accessTokenExpirationTime')
                window.localStorage.removeItem('refreshToken')
                this.$router.push('/login');
            }
            else {
                alert(res.data.ERROR_MSG)
            }
        },
        sessionTimeoutCheck: function() {
            setTimeout(()=>{
                alert('세션시간이 다 되어 로그아웃 되었습니다.')
                this.mixin_logout()
            }, this.sessionTimeout)
        },
    }
}