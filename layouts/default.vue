<template>
  <div class="home">
    <TopNav />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import TopNav from '@/components/Layout/TopNav'
import Footer from '@/components/Layout/Footer'
export default {
  components: {
    TopNav,
    Footer
  }
}
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.home {
  min-height: 100vh;
  background: #111 url(/home.svg) fixed;
}
</style>
