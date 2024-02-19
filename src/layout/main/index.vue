<template>
    <div>
        <TopHeader />
        <LeftSidebar v-if="showLeftSidebar" />
        <div class="main-container">
            <Content v-if="showContent" />
        </div>
        <Footer />
    </div>
</template>

<script>
import TopHeader from '@/layout/common/TopHeader.vue'
import LeftSidebar from '@/layout/common/LeftSidebar.vue'
import Footer from '@/layout/common/Footer.vue'
import Content from '@/layout/common/Content.vue'
import { mixin } from '@/mixin/mixin'

export default {
  components: {
    TopHeader,
    LeftSidebar,
    Footer,
    Content,
  },
  mixins: [
      mixin
  ],
  data() {
    return {
      showContent: false,
      showLeftSidebar: false,
    }
  },
  methods: {
      // 사용자정보 조회
      setUserInfo: async function() {
          let url = '/api/user/select'
          let data = {
              accessToken: window.localStorage.getItem('accessToken')
          };
          let header = {};

          let res = await this.$post(url, data, header)

          if(!res.data.ERROR_FLAG) {
              this.$store.dispatch('setUserInfo', res.data.DATA)
              this.showContent = true // store 초기 데이터(user info) 저장 이후 content 컴포넌트 생성
          }
          else {
              alert(res.data.ERROR_MSG)
          }
      },
  },
  mounted() {
    // botList 화면인 경우 left sidebar 표시 X
    this.$router.currentRoute.fullPath.includes('botList') ? this.showLeftSidebar = false : true
  },
  created() {
      this.setUserInfo()
      // this.sessionTimeoutCheck()
  },
}
</script>