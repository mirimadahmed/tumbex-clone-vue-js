<template>
  <div class="d-flex flex-column justify-content-center full-height">
    <div class="p-lg-5 p-sm-3">
      <div class="row">
        <div class="col col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h1>Login</h1><div class="flash" /><hr>
          <h5>Connect with your email :</h5><div>
            <div>
              <b-alert :show="error.length > 0" variant="danger">
                {{ error }}
              </b-alert>
              <input type="hidden" name="_csrf_token" value="a2lNU1JTckFoUUtlaFZrZDdMcnQrdz09"><input id="_redirect" type="hidden" name="_redirect" value="https://www.tumbex.com/login"><label for="login-email" data-error="Please enter a valid email address.">Email</label><div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-at" /></span>
                </div><input
                  id="login-email"
                  v-model="user.email"
                  type="email"
                  name="login-email"
                  class="form-control"
                  required=""
                  placeholder="Email"
                >
              </div><label for="login-password" data-error="Password can't be empty.">Password</label><div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-lock" /></span>
                </div><input
                  id="login-password"
                  v-model="user.password"
                  type="password"
                  name="login-password"
                  class="form-control"
                  required=""
                  placeholder="P4ssw0rd"
                >
              </div><button @click.prevent="login" type="submit" class="btn btn-success float-right">
                Login <i class="fas fa-sign-in-alt" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      isLoading: false,
      error: ''
    }
  },
  methods: {
    async login () {
      this.isLoading = true
      this.error = ''
      const { data } = await api.login(this.user)
      this.isLoading = false
      if (data.error) {
        this.error = data.message
      } else {
        this.$store.dispatch('login', data)
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>

</style>
