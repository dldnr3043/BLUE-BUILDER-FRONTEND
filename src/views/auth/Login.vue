<template>
    <div class="bl-login-page">
        <!-- left area -->
        <div class="bl-login-left">
            <div class="bl-login-left-text">Welcome to<br>BlueBuilder</div>
        </div>

        <!-- right area -->
        <div class="bl-login-right">
            <div class="bl-login-area">
                <span class="bl-login-text">Login</span>
                <div class="margin-top-50">Email</div>
                <input class="bl-input" type="text" v-model="userEmail" placeholder="Enter your Email">

                <div class="margin-top-50">Password</div>
                <input class="bl-input" type="password" v-model="userPassword" placeholder="Enter your Password">
                <button type="button" class="bl-btn-fill" @click="login">Login</button>
                <button type="button" class="bl-btn-light" @click="moveSignUp">SignUp</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userEmail: '',
            userPassword: '',
        }
    },
    methods: {
        login: async function() {
            let url = '/api/login'
            let data = {
                email: this.userEmail,
                password: this.userPassword
            };
            let header = {};

            let res = await this.$post(url, data, header)

            if(!res.data.ERROR_FLAG) {
                alert('인증이 완료되었습니다.')
                this.setToken(res.data.DATA)
                this.$router.push('/main/botList')
            }
            else {
                alert(res.data.ERROR_MSG)
            }
        },

        setToken: function(tokenInfo) {
            this.$store.dispatch('setToken', tokenInfo)
            window.sessionStorage.setItem('accessToken', tokenInfo.accessToken)
            window.sessionStorage.setItem('accessTokenExpirationTime', tokenInfo.accessTokenExpirationTime)
            window.sessionStorage.setItem('refreshToken', tokenInfo.refreshToken)
        },

        moveSignUp: function() {
            this.$router.push('/signup');
        },
    },

    mounted() {
        // 세션이 남아있다면 main page로 이동
        if(window.sessionStorage.getItem('accessToken')) this.$router.push('/main/botList')
    },
}
</script>