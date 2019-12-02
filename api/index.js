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

export default {
  getPosts (username) {
    return client.blogPosts(username)
  },
  getPostsWithType (username, type) {
    return client.blogPosts(username, type)
  },
  exists (username) {
    return client.blogInfo(username)
  },
  setSeen (data) {
    return axiosObj.get(`/set_lastseen.php?username=${data}`)
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
  }
}
