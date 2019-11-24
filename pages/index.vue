<template>
  <div>
    <Search />
    <LastViewed />
    <About />
    <Report />
  </div>
</template>

<script>
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
  }
}
</script>

<style>
</style>
