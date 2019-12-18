<template>
  <div class="jumbotron mb-5">
    <div class="container">
      <h3 class="mb-5">
        Your favorites Tumblr
      </h3>
      <form>
        <div class="form-group">
          <input v-model="blog" type="text" class="form-control" placeholder="Filter tumblrs...">
        </div>
      </form>
    </div>
    <div class="pb-3 row">
      <div v-for="fav in filteredBlogs" :key="fav.blog_id" class="col-md-2 my-2 text-right">
        <button @click="favBlog(fav.blog_id)" class="rounded-circle btn-outline-danger btn" title="Remove">
          ×
        </button>
        <a :href="`/${fav.blog_id}`">
          <div class="col-md-12 text-center">

            <img :src="`https://api.tumblr.com/v2/blog/${fav.blog_id}.tumblr.com/avatar/128`" :alt="fav.blog_id" class="rounded-circle">
          </div>
          <div class="col-md-12 title text-center">
            {{ fav.blog_id }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '@/api'
export default {
  data () {
    return {
      blog: ''
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'user', 'favBlogs']),
    filteredBlogs () {
      return this.blog.length > 0 ? this.favBlogs.filter(tag => tag.blog_id.includes(this.blog)) : this.favBlogs
    }
  },
  methods: {
    async favBlog (id) {
      const fav = this.favBlogs.filter(post => post.blog_id === id)[0]
      const { data } = await api.removeFav(fav.favorite_id)
      if (data.error === 0) {
        this.$store.dispatch('removeBlogFromFav', fav.favorite_id)
      }
    }
  }
}
</script>

<style scoped>
.jumbotron {
  background-color: #35444c;
}
.btn {
  margin: -10px 10px;
}

.form-control, .btn.btn-control {
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: .375rem .5rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #f4f1ef;
    background-color: rgba(42,55,61,0.6);
    background-clip: padding-box;
    border: 1px solid #4a5f6a;
    border-radius: 0;
    transition: border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
}
</style>
