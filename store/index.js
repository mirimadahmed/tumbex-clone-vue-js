import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default () => new Vuex.Store({
  state: {
    loggedInUser: null,
    currentUser: null,
    posts: [],
    favouriteBlogs: [],
    favouritePosts: [],
    lastSeen: []
  },
  getters: {
    user: state => state.loggedInUser,
    blog: state => state.currentUser,
    posts: state => state.posts,
    favBlogs: state => state.favouriteBlogs,
    favPosts: state => state.favouritePosts,
    lastSeen: state => state.lastSeen,
    tags: (state) => {
      const tags = []
      state.posts.map(post => post.tags.forEach((element) => {
        if (!tags.includes(element)) { tags.push(element) }
      }))
      return tags
    }
  },
  actions: {
    login (context, payload) {
      localStorage.setItem('spacesly-user', JSON.stringify(payload))
      context.commit('login', payload)
    },
    logout (context) {
      localStorage.removeItem('spacesly-user')
      localStorage.removeItem('isremember')
      context.commit('logout')
    },
    setBlog (context, payload) {
      context.commit('setBlog', payload.blog)
      context.commit('setPosts', payload.posts)
    }
  },
  mutations: {
    login (state, payload) {
      state.user = payload
      localStorage.setItem('tumbler-token', payload.token)
      // Session.set('spacesly-user', payload)
    },
    logout (state) {
      state.user = null
      // Session.clear()
      localStorage.removeItem('tumbler-token')
    },
    setBlog (state, payload) {
      state.currentUser = payload
    },
    setPosts (state, payload) {
      state.posts = payload
    }
  }
})
