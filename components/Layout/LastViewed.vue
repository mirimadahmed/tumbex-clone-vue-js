<template>
  <div class="row m-0 p-3">
    <div class="col-md-12 heading">
      Last tumblr viewed
    </div>
    <a :href="`/${last.username}`" v-for="last in lastViewed" :key="last.username" class="col my-2 text-center">
      <div class="col-md-12">
        <img :src="`https://api.tumblr.com/v2/blog/${last.username}.tumblr.com/avatar/128`" class="rounded-circle" alt="Circle image">
      </div>
      <div class="col-md-12 title">
        {{ last.username }}
      </div>
    </a>
    <div v-if="notOnViewAll" class="col-md-12 text-center">
      <b-button href="/last-seen" variant="outline-primary">
        View All
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lastViewed: {
      type: Array,
      required: true
    }
  },
  computed: {
    notOnViewAll () {
      return this.$route.name !== 'last-seen'
    }
  }
}
</script>

<style scoped>
.heading {
  border-bottom: 1px white solid;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  position: relative;
  font-size: 3.5rem;
  line-height: 1.2;
  text-align: center;
  color: white;
}
.title {
  color: #6ab0fb;
  font-weight: 700;
  line-height: 3;
  font-size: 1rem;
}
</style>
