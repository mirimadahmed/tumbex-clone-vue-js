<template>
  <div class="main">
    <BlogHeader />

    <no-ssr>
      <div class="navigation jumbotron mt-5 p-5">
        <paginate
          :page-count="pages"
          v-model="page"
          :page-range="3"
          :margin-pages="2"
          :click-handler="clickCallback"
          :prev-text="'«'"
          :next-text="'»'"
          :container-class="'pagination justify-content-center mb-0'"
          :page-class="'page-item'"
          :page-link-class="'page-link'"
          :prev-class="'page-item'"
          :next-class="'page-item'"
          :next-link-class="'page-link'"
          :prev-link-class="'page-link'"
        />
      </div>

      <div v-masonry transition-duration="1s" item-selector=".item" class="masonry-container" fit-width="true">
        <div v-masonry-tile :key="index" v-for="(item, index) in blocks" class="item">
          <Post :post="item" />
        </div>
      </div>
      <div class="navigation jumbotron mt-5 p-5">
        <paginate
          :page-count="pages"
          v-model="page"
          :page-range="3"
          :margin-pages="2"
          :click-handler="clickCallback"
          :prev-text="'«'"
          :next-text="'»'"
          :container-class="'pagination justify-content-center mb-0'"
          :page-class="'page-item'"
          :page-link-class="'page-link'"
          :prev-class="'page-item'"
          :next-class="'page-item'"
          :next-link-class="'page-link'"
          :prev-link-class="'page-link'"
        />
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
      type: this.$route.params.type,
      isLoading: false,
      blocks: [],
      page: 1,
      total: 0,
      offset: 0,
      tag: ''
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
      tags: 'tags',
      user: 'user'
    }),
    pages () {
      return Math.ceil(this.total / 20)
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
      if (this.$route.query && this.$route.query.tag) {
        this.tag = this.$route.query.tag
      }
      const response = await api.getPostsWithType(this.username, this.type, this.page, this.offset, this.tag)
      this.$store.dispatch('setPage', response.blog)
      this.$store.dispatch('setOpenPosts', response.posts)
      if (response._links.next) {
        this.offset = response._links.next.query_params.offset
      }
      api.setSeen(this.username)
      if (this.isLoggedIn) {
        const { data } = await api.myFavs(this.user.user_id)
        this.$store.dispatch('setBlog', data)
      }
      this.blocks = response.posts
      this.isLoading = false
    },
    clickCallback (pageNum) {
      this.fetch()
    }
  }
}
</script>

<style scoped>
.main {
  background-color: #35444c !important;
}
.jumbotron {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background-color: #20292e;
}
</style>
