<template>
  <div>
    <BlogHeader />
    <no-ssr>
      <div v-masonry transition-duration="1s" item-selector=".item" class="masonry-container" fit-width="true">
        <div v-masonry-tile :key="index" v-for="(item, index) in blocks" class="item">
          <Post :post="item" />
        </div>
      </div>
    </no-ssr>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '@/api'
import BlogHeader from '@/components/Layout/BlogHeader'
import Post from '@/components/Layout/Post'
export default {
  components: {
    BlogHeader,
    Post
  },
  head () {
    return {
      title: this.username,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.username },
        { hid: 'keywords', name: 'keywords', content: this.tags }
      ]
    }
  },
  data () {
    return {
      username: this.$route.params.username,
      isLoading: false,
      blocks: []
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
      tags: 'tags',
      user: 'user'
    })
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
      const response = await api.getPosts(this.username)
      await api.setPosts({ posts: response.posts })
      this.$store.dispatch('setPage', response.blog)
      this.$store.dispatch('setOpenPosts', response.posts)
      api.setSeen(this.username)
      if (this.isLoggedIn) {
        const { data } = await api.myFavs(this.user.user_id)
        this.$store.dispatch('setBlog', data)
      }
      this.blocks = response.posts
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
