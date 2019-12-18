<template>
  <div>
    <div class="container mb-5">
      <h3 class="mb-3">
        Your favorites posts
      </h3>
      <div class="jumbotron">
        <form>
          <div class="form-group">
            <label for="filter-posts-by-tumblr">Filter post by tumblr : </label>
            <select id="filter-posts-by-tumblr" v-model="search" class="form-control">
              <option value="" selected="">
                -- no filter --
              </option>
              <option v-for="(item, key) in names" :key="key" :value="item">
                {{ item }}
              </option>
            </select>
          </div>
        </form>
      </div>
    </div>
    <div class="">
      <no-ssr>
        <div v-masonry transition-duration="1s" item-selector=".item" class="masonry-container" fit-width="true">
          <div v-masonry-tile :key="index" v-for="(item, index) in posts" class="item">
            <Post :post="item" @removed="fetch" />
          </div>
        </div>
      </no-ssr>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '@/api'
import Post from '@/components/Layout/Post'
export default {
  components: {
    Post
  },
  data () {
    return {
      blocks: [],
      response: {},
      search: ''
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    }),
    posts () {
      if (this.search.length > 0) {
        return this.response[this.search]
      }
      return this.blocks
    },
    names () {
      return Object.keys(this.response)
    }
  },
  mounted () {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
    this.fetch()
  },
  methods: {
    async fetch () {
      const { data } = await api.getFavPosts(this.user.user_id)
      this.response = data
      this.blocks = []
      Object.keys(data).forEach(item => data[item].forEach(post => this.blocks.push(post)))
    }
  }

}
</script>

<style scoped>
.jumbotron {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background-color: #20292e;
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
