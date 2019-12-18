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
    lastSeen: [],
    showLogin: false
  },
  getters: {
    showLogin: state => state.showLogin,
    user: state => state.loggedInUser,
    isLoggedIn: state => state.loggedInUser !== null,
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
      context.commit('login', payload)
    },
    logout (context) {
      context.commit('logout')
    },
    setBlog (context, payload) {
      context.commit('setBlog', payload.blogs)
      context.commit('setPosts', payload.posts)
    },
    setOpenPosts (context, payload) {
      context.commit('setOpenPosts', payload)
    },
    setPage (context, payload) {
      context.commit('setPage', payload)
    },
    removePostFromFav (context, payload) {
      const index = context.state.favouritePosts.findIndex(item => item.favorite_id === payload)
      context.commit('removePostFromFav', index)
    },
    removeBlogFromFav (context, payload) {
      const index = context.state.favouriteBlogs.findIndex(item => item.favorite_id === payload)
      context.commit('removeBlogFromFav', index)
    },
    showLogin (context, payload) {
      context.commit('showLogin', payload)
    }
  },
  mutations: {
    login (state, payload) {
      state.loggedInUser = payload
      localStorage.setItem('tumbex-user', JSON.stringify(payload))
      localStorage.setItem('isremember', 'true')
      // eslint-disable-next-line no-undef
      Session.set('tumbex-user', payload)
    },
    logout (state) {
      state.loggedInUser = null
      // eslint-disable-next-line no-undef
      Session.clear()
      localStorage.removeItem('tumbex-user')
      localStorage.removeItem('isremember')
    },
    setPage (state, payload) {
      state.currentUser = payload
    },
    setBlog (state, payload) {
      state.favouriteBlogs = payload
    },
    setPosts (state, payload) {
      state.favouritePosts = payload
    },
    setOpenPosts (state, payload) {
      state.posts = payload
    },
    removePostFromFav (state, payload) {
      state.favouritePosts.splice(payload, 1)
    },
    removeBlogFromFav (state, payload) {
      state.favouriteBlogs.splice(payload, 1)
    },
    showLogin (state, payload) {
      state.showLogin = payload
    }
  }
})
