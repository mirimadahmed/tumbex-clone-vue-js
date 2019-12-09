<template>
  <Auth @logged-in="goHome" type="login" />
</template>

<script>
import Auth from '@/components/Auth'
export default {
  components: {
    Auth
  },
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
