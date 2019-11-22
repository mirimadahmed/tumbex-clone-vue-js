<template>
  <div>
    <LastViewed />
    <About />
    <Report />
  </div>
</template>

<script>
import LastViewed from '@/components/Layout/LastViewed'
import Report from '@/components/Layout/Report'
import About from '@/components/Layout/About'
export default {
  components: {
    LastViewed,
    Report,
    About
  }
}
</script>

<style>
</style>
