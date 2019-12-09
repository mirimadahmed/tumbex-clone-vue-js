<template>
  <div>
    <div v-if="type === 'login'" class="d-flex flex-column justify-content-center full-height">
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
                    v-model="loginUser.email"
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
                    v-model="loginUser.password"
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
    <div v-else class="d-flex flex-column justify-content-center full-height">
      <div class="p-lg-5 p-sm-3">
        <div class="container">
          <h1>Register</h1><div class="flash" />
          <b-alert :show="error.length > 0" variant="danger">
            {{ error }}
          </b-alert>
          <h5>Register with your email :</h5><div>
            <div>
              <input type="hidden" name="_csrf_token" value="a2lNU1JTckFoUUtlaFZrZDdMcnQrdz09"><label for="register-name" data-error="Username can't be empty.">Username</label><div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-user" /></span>
                </div><input
                  id="register-name"
                  v-model="user.username"
                  type="text"
                  name="register-name"
                  class="form-control"
                  required=""
                >
              </div><label for="register-email" data-error="Please enter a valid email address.">Email</label><div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-at" /></span>
                </div><input
                  id="register-email"
                  v-model="user.email"
                  type="email"
                  name="register-email"
                  class="form-control"
                  required=""
                >
              </div><label for="register-password" data-error="Password can't be empty.">Password</label><div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-lock" /></span>
                </div><input
                  id="register-password"
                  v-model="user.password"
                  type="password"
                  name="register-password"
                  class="form-control"
                  required=""
                >
              </div><label for="register-confirm" data-error="Password can't be empty.">Confirm Password</label><div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-lock" /></span>
                </div><input
                  id="register-confirm"
                  v-model="user.confirmPassword"
                  type="password"
                  name="register-confirm"
                  class="form-control"
                  required=""
                >
              </div><button @click.prevent="signup" type="submit" class="btn btn-success float-right">
                Register <i class="fas fa-sign-in-alt" />
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
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      user: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      loginUser: {
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
      const { data } = await api.login(this.loginUser)
      this.isLoading = false
      if (data.error) {
        this.error = data.message
      } else {
        this.$store.dispatch('login', data)
        this.$emit('logged-in')
      }
    },
    async signup () {
      this.error = ''
      if (this.user.password !== this.user.confirmPassword) {
        this.error = 'Passwords not same'
      }
      this.isLoading = true
      const { data } = await api.signup(this.user)
      this.isLoading = false
      if (data.error === 1) {
        this.error = data.message
      } else {
        this.$store.dispatch('login', data)
        this.$emit('logged-in')
      }
    }
  }
}
</script>

<style scoped>

</style>
