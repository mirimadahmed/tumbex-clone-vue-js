<template>
  <div>
    <Search />
    <LastViewed :lastViewed="lastViewed" v-if="lastViewed.length > 0" />
    <About />
    <Report />
  </div>
</template>

<script>
import api from '@/api'
import Search from '@/components/Layout/Search'
import LastViewed from '@/components/Layout/LastViewed'
import Report from '@/components/Layout/Report'
import About from '@/components/Layout/About'

export default {
  components: {
    Search,
    LastViewed,
    Report,
    About
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
      const { data } = await api.getSeen(20)
      this.lastViewed = data
    }
  }
}
</script>

<style>
</style>
