<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item @click="showSideBar">
        <i class="fas fa-bars" />
      </b-nav-item>
      <b-nav-item href="/">
        Home
      </b-nav-item>
    </b-navbar-nav>
    <div v-if="sideBar" class="overlay-side-bar">
      <div class="my-side-bar p-2">
        <div class="row m-0 my-2">
          <div class="col-md-12">
            <i @click="hideSideBar" class="fas fa-times" />
          </div>
          <div v-if="!isLoggedIn" class="col-md-12 my-2">
            <button @click="Go('/login')" class="btn btn-block btn-primary">
              Login
            </button>
          </div>
          <div v-if="!isLoggedIn" class="col-md-12 my-2">
            <button @click="Go('/register')" class="btn btn-block btn-primary">
              Register
            </button>
          </div>
          <div v-if="isLoggedIn" class="col-md-12 my-2">
            <button @click="Go('/dashboard')" class="btn btn-block btn-primary">
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      sideBar: false
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  },
  methods: {
    showSideBar () {
      this.sideBar = true
    },
    hideSideBar () {
      this.sideBar = false
    },
    Go (here) {
      this.$router.push(here)
      this.hideSideBar()
    }
  }
}
</script>

<style scoped>
.overlay-side-bar {
  width: 100vw;
  height: 100vh;
  background: #212222b7;
  position: fixed;
  top: 0;
  z-index: 1031;
  left: 0;
}
.my-side-bar {
  width: 30vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #343a40;
  border: 0 solid #2f3439;
  z-index: 1031;
  transition: transform .3s ease;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
