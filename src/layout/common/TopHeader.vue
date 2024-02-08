<template>
    <header class="top-header">
        <!-- Logo and Account Info -->
        <div class="logo-and-account">
            <div class="logo">
                <!-- <img src="@/assets/blue-builder-logo.png" alt="Blue Builder Logo" style="height: 40px;"> -->
                <a class="header-a" href="/main/botList">
                    <span class="header-text">BUILE-BUILDER</span>
                </a>
            </div>
            <div class="account-info">
                <!-- Your account information display goes here -->
                <button type="button" class="header-userinfo" @click="clickUserMenuModal">{{ userInfo.email }}</button> <!-- Replace with dynamic account information -->
            </div>
            <UserMenu />
        </div>
    </header>
</template>

<script>
    import UserMenu from '@/components/layout/UserMenu'
    import { mixin } from '@/mixin/mixin'

    export default {
        mixins: [
            mixin
        ],
        components: {
            UserMenu
        },
        data() {
            return {
                userInfo: {},
                userMenuFlag: true,
            }
        },
        methods: {
            // 우측 위 사용자 정보 클릭 시 사용자 상세정보 모달 show/hide
            clickUserMenuModal: function() {
                this.userMenuFlag = !this.userMenuFlag
            },
            
            // 사용자정보 조회
            selectUserInfo: async function() {
                let url = '/api/user/select'
                let data = {
                    email: this.userEmail,
                    password: this.userPassword
                };
                let header = {};

                let res = await this.$post(url, data, header)

                if(!res.data.ERROR_FLAG) {
                    alert('인증이 완료되었습니다.')
                    this.setToken(res.data.DATA)
                    this.setUserInfo()
                    this.$router.push('/main/botList')
                }
                else {
                    alert(res.data.ERROR_MSG)
                }
            },
        },
        mounted() {
            // this.selectUserInfo()
            this.sessionTimeoutCheck()
        },
    }
</script>