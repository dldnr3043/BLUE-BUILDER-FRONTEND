<template>
    <div>

        mainaidfnsflsdfkjsdnfklsjfn main
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
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