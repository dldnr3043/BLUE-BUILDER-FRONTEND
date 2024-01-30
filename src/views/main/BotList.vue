<template>
    <div>

        mainaidfnsflsdfkjsdnfklsjfn main
        <button type="button" class="bl-btn-fill" @click="logout">Logout</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        logout: async function() {
            let logoutFlag = confirm('로그아웃을 하시겠습니까?')
            console.log(this.$store)
            if(logoutFlag) {
                let url = '/api/logout'
                let data = {
                    email: this.$store.getters.getUserInfo.email
                };
                let header = {};

                let res = await this.$post(url, data, header);

                if(!res.data.ERROR_FLAG) {
                    this.$store.dispatch('initToken')
                    window.sessionStorage.clear()
                    location.href = '/login'
                }
                else {
                    alert(res.data.ERROR_MSG)
                }
            }
        },
    },

    async mounted() {
        let url = '/api/test';
        let data = {
            test: 'test'
        };
        let header = {};

        let res = await this.$post(url, data, header);

        if(!res.data.ERROR_FLAG) {
            alert('인증이 완료되었습니다.')
        }
        else {
            alert(res.data.ERROR_MSG)
        }
    },
}
</script>