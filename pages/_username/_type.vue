<template>
  <div>
    {{ username }} | {{ type }}
  </div>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      username: this.$route.params.username,
      type: this.$route.params.type,
      isLoading: false
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      this.isLoading = true
      const response = await api.getPostsWithType(this.username, this.type)
      this.isLoading = false
      console.log(response)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
