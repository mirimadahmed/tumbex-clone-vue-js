const tumblr = require('tumblr.js')

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
  }
}
