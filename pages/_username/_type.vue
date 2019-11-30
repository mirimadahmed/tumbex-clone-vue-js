<template>
  <div>
    <BlogHeader />
    <no-ssr>
      <div v-masonry transition-duration="3s" item-selector=".item" class="masonry-container" fit-width="true">
        <div v-masonry-tile :key="index" v-for="(item, index) in blocks" class="item">
          <Post :post="item" />
        </div>
      </div>
    </no-ssr>
  </div>
</template>

<script>
import api from '@/api'
import BlogHeader from '@/components/Layout/BlogHeader'
import Post from '@/components/Layout/Post'

export default {
  components: {
    BlogHeader,
    Post
  },
  data () {
    return {
      username: this.$route.params.username,
      type: this.$route.params.type,
      isLoading: false,
      blocks: []
    }
  },
  created () {
    this.fetch()
  },
  mounted () {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  },
  methods: {
    async fetch () {
      this.isLoading = true
      const response = await api.getPostsWithType(this.username, this.type)
      api.setSeen(this.username)
      this.blocks = response.posts
      this.$store.dispatch('setBlog', response)
      this.isLoading = false
      console.log(response)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
