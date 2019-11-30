<template>
  <div class="row m-0 p-3">
    <div class="col-md-12 heading">
      Last tumblr viewed
    </div>
    <div v-for="last in lastViewed" :key="last.username" class="col my-2 text-center">
      <div class="col-md-12">
        <img :src="`https://api.tumblr.com/v2/blog/${last.username}.tumblr.com/avatar/128`" class="rounded-circle" alt="Circle image">
      </div>
      <div class="col-md-12 title">
        {{ last.username }}
      </div>
    </div>
    <div class="col-md-12 text-center">
      <b-button variant="outline-primary">
        View All
      </b-button>
    </div>
  </div>
</template>

<script>
import api from '@/api'
export default {
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
