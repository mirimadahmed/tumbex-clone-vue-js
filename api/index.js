import axios from 'axios'
const tumblr = require('tumblr.js')

const axiosObj = axios.create({
  baseURL: 'https://bookable.pk/api'
  // headers: { 'Cache-Control': 'no-cache', 'Content-Type': 'multipart/form-data' }
})

const client = tumblr.createClient({
  credentials: {
    consumer_key: 'BweNmbGLGJvHyjtPpd0pqzMtcIlccZiNbMZoe846dO3aZHlrh5',
    consumer_secret: '3nN0PohcnhdsvHvvShzwL6ZVZr4Mb40Us82eNJWNksdFpIa8oI',
    token: '<oauth token>',
    token_secret: '<oauth token secret>'
  },
  returnPromises: true
})
client.addGetMethods({
  singlePost: '/blog/:username/posts/:id'
})
export default {
  getPosts (username, pageNumber, offset, tag) {
    const options = {
      notes_info: true
    }
    if (pageNumber > 1) {
      options.page_number = pageNumber
      options.offset = offset
    }
    if (tag.length > 0) {
      options.tag = [tag]
    }
    return client.blogPosts(username, options)
  },
  getPost (id) {
    return axiosObj.get(`/get_post.php?id=${id}`)
  },
  getPostsWithType (username, type, pageNumber, offset, tag) {
    const options = {
      notes_info: true
    }
    if (pageNumber > 1) {
      options.page_number = pageNumber
      options.offset = offset
    }
    if (tag.length > 0) {
      options.tag = [tag]
    }
    return client.blogPosts(username, type, options)
  },
  exists (username) {
    return client.blogInfo(username)
  },
  setSeen (data) {
    return axiosObj.get(`/set_lastseen.php?username=${data}`)
  },
  setPosts (data) {
    return axiosObj.post(`/set_posts.php`, data)
  },
  getFavPosts (id) {
    return axiosObj.get(`/get_posts.php?user_id=${id}`)
  },
  getSeen (data) {
    return axiosObj.get(`/get_lastseen.php?limit=${data}`)
  },
  login (user) {
    return axiosObj.get(`/login.php?email=${user.email}&password=${user.password}`)
  },
  signup (user) {
    return axiosObj.get(`/signup.php?email=${user.email}&password=${user.password}&username=${user.username}`)
  },
  myFavs (id) {
    return axiosObj.get(`/get_favorites.php?user_id=${id}`)
  },
  addToFavs (user, type, id) {
    return axiosObj.get(`/set_favorite.php?user_id=${user}&blog_id=${id}&type=${type}`)
  },
  addBlogToFavs (user, type, username, id) {
    return axiosObj.get(`/set_favorite.php?user_id=${user}&post_id=${id}&blog_id=${username}&type=${type}`)
  },
  removeFav (id) {
    return axiosObj.get(`/remove_favorite.php?favorite_id=${id}`)
  }
}
