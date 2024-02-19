<template>
    <header class="top-header">
        <!-- Logo and Account Info -->
        <div class="logo-and-account">
            <div class="logo">
                <!-- <img src="@/assets/blue-builder-logo.png" alt="Blue Builder Logo" style="height: 40px;"> -->
                <a class="header-a" href="/main/bot/botList">
                    <span class="header-text">BUILE-BUILDER</span>
                </a>
            </div>
            <div class="account-info">
                <!-- Your account information display goes here -->
                <button type="button" class="header-userinfo" @click="clickUserMenuModal">{{ $store.getters.userInfo.email }}</button> <!-- Replace with dynamic account information -->
            </div>
            <UserMenu v-show="userMenuFlag" />
        </div>
    </header>
</template>

<script>
    import UserMenu from '@/components/layout/UserMenu'

    export default {
        mixins: [
        ],
        components: {
            UserMenu
        },
        data() {
            return {
                userMenuFlag: false,
            }
        },
        methods: {
            // 우측 위 사용자 정보 클릭 시 사용자 상세정보 모달 show/hide
            clickUserMenuModal: function() {
                this.userMenuFlag = !this.userMenuFlag
            },
        },
        mounted() {
        },
        created() {

        },
    }
</script>