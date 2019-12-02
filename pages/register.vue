<template>
  <div class="d-flex flex-column justify-content-center full-height">
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
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      user: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      isLoading: false,
      error: ''
    }
  },
  methods: {
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
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>

</style>
