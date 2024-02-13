<template>
    <div class="user-menu">
        <div class="info-my">
            <ul class="list-service">
                <li>{{ $store.getters.userInfo.name }}</li>
                <li class="last-child">{{ $store.getters.userInfo.email }}</li>
            </ul>
            <ul class="list-service">
                <li><button type="button" @click="logout">로그아웃</button></li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mixin } from '@/mixin/mixin'

export default {
    mixins: [
        mixin
    ],
    methods: {
        logout: function() {
            let logoutFlag = confirm('로그아웃을 하시겠습니까?')
            if(logoutFlag) {
                this.mixin_logout()
            }
        },
    },
}
</script>