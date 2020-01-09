<template>
  <div class="main">
    <BlogHeader :showtags="false" />
    <no-ssr>
      <div v-masonry transition-duration="1s" item-selector=".item" class="masonry-container" fit-width="true">
        <div v-masonry-tile :key="index" v-for="(item, index) in blocks" class="item">
          <Post :post="item" :single="true" />
        </div>
      </div>
      <div class="post-info">
        <div class="post-info-wrapper">
          <div class="post-actions">
            <a class="post-favorite favorite btn-link btn post-action" href="javascript:" title="Add to favorite"><i class="fa-fw fa-heart far" /></a>
            <a class="facebook post-action post-share-on btn-link btn" href="javascript:" onclick="window.open('https://www.facebook.com/dialog/share?app_id=777323555620254&amp;display=popup&amp;href=https%3A%2F%2Fwww.tumbex.com%2Fmirimadahmed.tumblr%2Fposts&amp;redirect_uri=https%3A%2F%2Fwww.tumbex.com%2Fmirimadahmed.tumblr%2Fposts', null, 'width=550, height=420'); return false;" title="Share on facebook"><i class="fa-facebook fa-fw fab" /><span class="name"> Facebook</span></a>
            <a class="twitter post-action post-share-on btn-link btn" href="javascript:" onclick="window.open('https://twitter.com/share?url=https%3A%2F%2Fwww.tumbex.com%2Fmirimadahmed.tumblr%2Fposts&amp;text=mirimadahmed+-+mirimadahmed+-+Tumbex', null, 'width=550, height=420'); return false;" title="Tweet"><i class="fa-twitter fa-fw fab" /><span class="name"> Twitter</span></a>
            <a class="google post-action post-share-on btn-link btn" href="javascript:" onclick="window.open('https://plus.google.com/share?url=https%3A%2F%2Fwww.tumbex.com%2Fmirimadahmed.tumblr%2Fposts', null, 'width=550, height=420'); return false;" title="Share on Google +"><i class="fa-google-plus-g fa-fw fab" /><span class="name"> Google +</span></a>
            <a class="reddit post-action post-share-on btn-link btn" href="javascript:" onclick="window.open('https://reddit.com/submit?url=https%3A%2F%2Fwww.tumbex.com%2Fmirimadahmed.tumblr%2Fposts&amp;title=mirimadahmed+-+mirimadahmed+-+Tumbex', null, 'width=550, height=420'); return false;" title="Share on reddit"><i class="fa-reddit-alien fa-fw fab" /><span class="name"> Reddit</span></a>
            <a class="vk post-action post-share-on btn-link btn" href="javascript:" onclick="window.open('https://vk.com/share.php?url=https%3A%2F%2Fwww.tumbex.com%2Fmirimadahmed.tumblr%2Fposts', null, 'width=550, height=420'); return false;" title="Share on VK"><i class="fa-vk fa-fw fab" /><span class="name"> VK</span></a>
          </div>
          <hr class="m-0">
          <div v-for="(t, i) in trail" :key="i" class="post-reblog-root m-auto">
            <span>Source: </span>
            <a :href="`/${t.blog.name}`" :title="`Source: ${t.blog.name}`" class="post-reblog-link" target="_blank">
              <img :src="`https://api.tumblr.com/v2/blog/${t.blog.name}.tumblr.com/avatar/64`" class="blog-avatar">
              From {{ t.blog.name }}
            </a>
          </div>
          <hr class="m-0">
        </div>
      </div>
      <div class="navigation jumbotron">
        <section class="notes">
          <div v-for="(note, i) in notes" :key="i" class="note">
            <a :href="`/${note.blog_name}`" class="t-link" target="_blank"><img :src="`https://api.tumblr.com/v2/blog/${note.blog_name}.tumblr.com/avatar/48`" class="blog-avatar avatar-circle" height="52" width="52"><span>&nbsp;{{ note.blog_name }}</span></a><span>&nbsp;{{ note.type }}&nbsp;this</span>
          </div>
        </section>
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
      id: this.$route.params.post,
      isLoading: false,
      blocks: [],
      notes: [],
      trail: [],
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
    })
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      this.isLoading = true
      const { data } = await api.getPost(this.id)
      this.$store.dispatch('setPage', data.blog)
      if (this.isLoggedIn) {
        const { data } = await api.myFavs(this.user.user_id)
        this.$store.dispatch('setBlog', data)
      }
      this.blocks.push(data)
      this.notes = data.notes
      this.trail = data.trail
      this.isLoading = false
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
.notes {
    overflow: hidden;
}
.note {
    margin-bottom: 1rem;
    overflow: hidden;
    word-break: break-all;
}
.note {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
}
.note {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
@media (min-width: 768px){
  .note {
      flex: 0 0 50%;
      max-width: 50%;
  }
  .post-reblog-root {
      flex: 0 0 50%;
      max-width: 50%;
  }
}
a {
    color: #6ab0fb;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
.avatar-circle {
    background-size: contain;
}
.avatar-circle {
    border-radius: 5em;
    border: 2px solid #546d79;
}
.post-info {
    background: transparent;
    border: none;
    color: #f4f1ef;
    margin: 0;
}
.post-info {
    margin: 0;
    padding: 0;
    background: #2b353b;
    border: 1px solid #2f2f2f;
}
.post-info-wrapper {
    padding: 0;
    background-color: #20292e;
}
.post-reblog-root img {
    display: inline-block;
    height: 64px;
    width: 64px;
    border-radius: 50%;
    vertical-align: middle;
}
.post-info img {
    background-color: #2b353b;
}
.post-actions {
    padding: 1rem 0;
    background: #3f525b;
    border-top: #4e9cba solid 1px;
    border-bottom: #4e9cba solid 1px;
    text-align: center;
}
.post-action {
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0;

    text-decoration: none;
    color: #f4f1ef;
}
.facebook {
    color: #3b5998 !important;
}
.name {
    height: 1px !important;
    width: 1px !important;
}
.name {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
.twitter {
    color: #1da1f2 !important;
}
.google {
    color: #ea4335 !important;
}
.reddit {
    color: #ff4500 !important;
}
.vk {
    color: #4a76a8 !important;
}
.post-reblog-root span {
    display: block;
    font-size: 1.2rem;
    font-weight: 700;
}
.post-reblog-root {
    color: #f4f1ef;

    padding-bottom: 1rem;
    border-bottom: none;
}
.post-reblog-root {
    padding: 5px 0;
    word-break: break-word;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}
</style>
