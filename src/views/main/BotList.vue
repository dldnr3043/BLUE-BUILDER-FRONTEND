<template>
    <div>

        mainaidfnsflsdfkjsdnfklsjfn main
        <button type="button" class="bl-btn-fill" @click="logout">Logout</button>
    </div>
</template>

<script>
import { mixin } from '@/mixin/mixin'

export default {
    mixins: [
        mixin
    ],
    data() {
        return {
            
        }
    },
    methods: {
        logout: function() {
            let logoutFlag = confirm('로그아웃을 하시겠습니까?')
            if(logoutFlag) {
                this.mixin_logout()
            }
        },
    },

    async mounted() {

    },
}
</script>