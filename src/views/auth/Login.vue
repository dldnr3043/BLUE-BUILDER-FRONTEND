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
                <button type="button" class="bl-btn-fill" @click="">Login</button>
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
        login: function() {
            
        },

        moveSignUp: function() {
            this.$router.push('/signup');
        },
    }
}
</script>