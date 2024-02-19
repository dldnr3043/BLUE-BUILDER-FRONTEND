<template>
    <div class="bl-login-page">
        <!-- left area -->
        <div class="bl-login-left">
            <div class="bl-login-left-text">Welcome to<br>BlueBuilder</div>
        </div>

        <!-- right area -->
        <div class="bl-login-right">
            <div class="bl-login-area">
                <span class="bl-login-text">SignUp</span>
                <div class="margin-top-50">Email</div>
                <input class="bl-input" type="text" v-model="userEmail" placeholder="Enter your Email">

                <div class="margin-top-50">Password</div>
                <input class="bl-input" type="password" v-model="userPassword" placeholder="Enter your Password">

                <div class="margin-top-50">Name</div>
                <input class="bl-input" type="text" v-model="userName" placeholder="Enter your Name">

                <button type="button" class="bl-btn-fill" @click="moveLogin">Back</button>
                <button type="button" class="bl-btn-light" @click="signup">SignUp</button>
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
            userName: '',
        }
    },
    methods: {
        moveLogin: function() {
            this.$router.push('/login');
        },

        signup: async function() {
            let url = '/api/signup';
            let data = {
                email: this.userEmail,
                password: this.userPassword,
                name: this.userName
            };
            let header = {};

            let res = await this.$post(url, data, header);

            if(!res.data.ERROR_FLAG) {
                alert('회원가입이 완료되었습니다.')
                this.$router.push('/login')
            }
        },
    }
}
</script>