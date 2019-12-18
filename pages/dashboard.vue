<template>
  <div class="main">
    <FavBlogs />
    <FavPosts />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '@/api'
import FavBlogs from '@/components/Layout/FavBlogs'
import FavPosts from '@/components/Layout/FavPosts'
export default {
  components: {
    FavBlogs,
    FavPosts
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'user', 'favPosts'])
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const { data } = await api.myFavs(this.user.user_id)
      this.$store.dispatch('setBlog', data)
    }
  }
}
</script>

<style scoped>
.main {
  background-color: #35444c !important;
}
</style>
