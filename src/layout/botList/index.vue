<template>
    <div>
        <TopHeader />
        <div class="main-container">
            <Content />
        </div>
        <Footer />
    </div>
</template>

<script>
import TopHeader from '@/layout/common/TopHeader.vue'
import Footer from '@/layout/common/Footer.vue'
import Content from '@/layout/common/Content.vue'

export default {
  components: {
    TopHeader,
    Footer,
    Content
  }
}
</script>