<template>
  <div>{{ username }}</div>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      username: this.$route.params.username,
      isLoading: false
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      this.isLoading = true
      const response = await api.getPosts(this.username)
      this.isLoading = false
      console.log(response)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
