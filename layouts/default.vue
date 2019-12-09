<template>
  <div class="home">
    <TopNav />
    <nuxt />
    <Footer />
    <b-modal
      v-model="showLogin"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      @close="$store.dispatch('showLogin', false)"
      @hide="$store.dispatch('showLogin', false)"
      size="lg"
      class="-p-5"
    >
      <Auth :type="type" @logged-in="$store.dispatch('showLogin', false)" />
      <div slot="modal-footer">
        <div class="w-100">
          <b-button
            v-if="type === 'login'"
            @click="type='register'"
            variant="primary"
            size="sm"
            class="float-right"
          >
            Register
          </b-button>
          <b-button
            v-else
            @click="type='login'"
            variant="primary"
            size="sm"
            class="float-right"
          >
            Login
          </b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import TopNav from '@/components/Layout/TopNav'
import Footer from '@/components/Layout/Footer'
import Auth from '@/components/Auth'
export default {
  components: {
    TopNav,
    Footer,
    Auth
  },
  data () {
    return {
      type: 'login',
      headerBgVariant: 'light',
      headerTextVariant: 'dark',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark'
    }
  },
  computed: {
    ...mapGetters({
      showLogin: 'showLogin'
    })
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

body {
  margin: 0;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #f4f1ef;
  text-align: left;
  background-color: #35444c;
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
.soundcloud_audio_player {
  width: 100%;
}
</style>
