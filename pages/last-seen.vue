<template>
  <div class="page">
    <LastViewed :lastViewed="lastViewed" />
  </div>
</template>

<script>
import api from '@/api'
import LastViewed from '@/components/Layout/LastViewed'

export default {
  components: {
    LastViewed
  },
  data () {
    return {
      lastViewed: []
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const { data } = await api.getSeen(100)
      this.lastViewed = data
    }
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
}
</style>
