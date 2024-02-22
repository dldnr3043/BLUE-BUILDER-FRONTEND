<template>
    <div class="index-layout">
        <TopHeader />
        <div class="main-container">
            <div class="content">
              <Content v-if="showContent" />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import TopHeader from '@/layout/common/TopHeader.vue'
import Footer from '@/layout/common/Footer.vue'
import Content from '@/layout/common/Content.vue'
import { mixin } from '@/mixin/mixin'

export default {
  components: {
    TopHeader,
    Footer,
    Content,
  },
  mixins: [
      mixin
  ],
  data() {
    return {
      showContent: false,
    }
  },
  computed: {
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
  },
  created() {
      this.setUserInfo()
      // this.sessionTimeoutCheck()
  },
}
</script>

<style>
.index-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.main-container {
  display: flex;
  flex-grow: 1;
}
.content {
  flex-grow: 1;
  padding: 20px;
  background-color: #eee;
}
</style>