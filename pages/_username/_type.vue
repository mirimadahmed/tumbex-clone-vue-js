<template>
  <div>
    {{ username }} | {{ type }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: this.$route.params.username,
      type: this.$route.params.type
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
