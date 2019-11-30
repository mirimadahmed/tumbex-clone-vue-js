<template>
  <section class="index row">
    <div class="col">
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <h1 class="title">
            tumbex
          </h1>
          <hr>
          <div class="d-none d-sm-block">
            <p class="lead">
              You like <b>tumblr</b> ? <b>tumbex</b> is your access to all blogs, with a streamlined design and optimized navigation
            </p>
            <hr>
          </div>
        </div>
        <div class="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-sm-10 offset-sm-1">
          <!-- <form id="form-search" method="get">
            <p>Search tumblog, posts :</p><div class="input-group input-group-lg mb-3">
              <input
                id="form-search-input"
                type="text"
                name="q"
                class="form-control"
                placeholder="Search tumblog, posts"
                required=""
              >
              <div class="input-group-append">
                <input type="submit" value="Search" class="btn btn-primary">
              </div>
            </div>
          </form> -->
          <p>Explore a tumblog :</p>
          <div class="input-group input-group-lg mb-3">
            <input
              v-model="tumblr"
              type="text"
              class="form-control"
              placeholder="tumblr-name"
            >
            <div class="input-group-append">
              <span class="input-group-text">.tumblr.com</span>
            </div>
          </div>
          <div v-if="exist === false" class="alert alert-danger text-center verify-error">
            <h5 class="mb-0">
              <strong>Oh snap!</strong> tumblr "<strong>{{ tumblr }}<span class="verify-tumblr" /></strong>" not found.
            </h5>
          </div>
          <div v-if="exist === true" class="alert alert-success text-center verify-success">
            <h5 class="mb-0">
              <strong>Yeah!</strong> tumblr "<strong>{{ tumblr }}<span class="verify-tumblr" /></strong>" found. <i class="fa fa-spin fa-sync-alt" />
            </h5>
          </div>
          <div class="row">
            <div class="col offset-md-4 col-md-4">
              <button @click="checkTumblr" class="btn btn-block btn-primary">
                Go <i v-if="isLoading" class="fa fa-spin fa-sync-alt verifying" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      tumblr: '',
      isLoading: false,
      exist: 'not-checked'
    }
  },
  methods: {
    async checkTumblr () {
      this.isLoading = true
      let response
      try {
        response = await api.exists(this.tumblr)
        this.isLoading = false
        if (response.blog) {
          this.exist = true
          this.goToTumblr()
        }
      } catch (error) {
        this.isLoading = false
        this.exist = false
      }
    },
    goToTumblr () {
      setTimeout(() => this.$router.push(`/${this.tumblr}`), 3000)
    }
  }
}
</script>

<style scoped>
p {
  color: white;
}
section {
  background-color: rgba(0, 0, 0, 0.45);
  min-height: 85vh;
  padding: 6% 0px;
  text-align: center !important;
  align-items: center !important;
}
hr {
  border-top-width: initial;
    border-right-width: initial;
    border-left-width: initial;
    border-top-color: initial;
    border-right-color: initial;
    border-left-color: initial;
    border-style: none none solid;
    border-image: initial;
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
}
.title {
  font-size: 3.5rem;
  color: white;
  font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0.5rem;
}
.lead {
  font-size: 1.25rem;
    font-weight: 300;
    color: white;
}
</style>
