<template>
  <div class="post">
    <div class="post-wrapper row m-0 p-0">
      <div class="post-content col-md-12 m-0 p-0">
        <div v-if="type === 'text'" class="p-2 col-md-12 m-0">
          <h3>{{ post.title }}</h3>
          <div v-html="post.body" />
        </div>
        <div v-else-if="type === 'quote'" class="p-2 col-md-12 m-0">
          <p v-html="post.text" />
        </div>
        <div v-else-if="type === 'link'" class="p-2 col-md-12 m-0">
          <p v-html="post.description" />
          <a :href="post.url" class="float-right text-info font-weight-bolder">{{ post.title }}</a><v-icon name="link" class="mx-1 float-right text-info" width="15px" />
        </div>
        <div v-else-if="type === 'chat'" class="p-2 col-md-12 m-0">
          <div v-for="(item, index) in post.dialogue" :key="index">
            <h5 v-html="item.label" />
            <p v-html="item.phrase" />
          </div>
        </div>
        <div v-else-if="type === 'audio'" class="m-0 p-0">
          <div v-html="post.embed" class="col-md-12 m-0 p-0" />
        </div>
        <div v-else-if="type === 'video'" class="col-md-12 m-0">
          <div v-html="post.player[0]" class="col-md-12 m-0 p-0" />
        </div>
        <div v-else-if="type === 'photo'">
          <img v-for="(item, index) in post.photos" :key="index" :src="item.original_size.url" class="col-md-12 p-0 m-0">
        </div>
        <div v-else-if="type === 'answer'" class="p-2">
          <h3 v-html="post.question" />
          <h6 v-html="post.answer" />
        </div>
      </div>
      <div class="col-md-12 post-info">
        <div v-if="post.caption" v-html="post.caption" class="p-1 caption" />
        <div v-if="post.tags.length > 0" class="p-1 tags">
          <span v-for="(item, i) in post.tags" :key="i">
            #{{ item }}
          </span>
        </div>
        <div class="post-misc">
          <div class="post-type">
            <a class="btn-link btn-sm btn" href="/mirimadahmed.tumblr/post/71378054155/nice-place-to-sleep-p" target="_blank"><i :class="typeToIcon(post.type)" /></a>
          </div><div class="post-notes">
            <a class="btn-link btn-sm btn" href="/mirimadahmed.tumblr/post/71378054155/nice-place-to-sleep-p" target="_blank">{{ post.note_count }}<small> notes</small></a>
          </div><div class="post-date">
            <a class="btn-link btn-sm btn" href="/mirimadahmed.tumblr/post/71378054155/nice-place-to-sleep-p" target="_blank"><small>{{ timeNow(post.date) }}</small></a>
          </div>
          <div class="btn-group-sm btn-group post-actions">
            <a @click="addToFav" :title="inFavs ? 'Remove from fav' : 'Add to favorite'" class="post-favorite favorite btn-link btn post-action"><i :class="inFavs ? 'fas fav-done':'far'" class="fa-fw fa-heart" /></a>
            <!-- <div class="dropup dropdown">
              <a
                class="dropdown-toggle btn-sm btn-link btn post-action"
                href="javascript:"
                title="Share on"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ><i class="fa-fw fa-share-alt fas" /></a><div class="dropdown-menu-right dropdown-menu">
                <a class="post-action text-danger report-abuse dropdown-item" href="javascript:" title="Report abuse"><i class="fa-exclamation-circle fa-fw fa" /><span class="name"> Report</span></a><div class="dropdown-divider" /><h6 class="dropdown-header">
                  Share on
                </h6><a class="pinterest post-action post-share-on dropdown-item" href="javascript:" title="Pin it"><i class="fa-pinterest fa-fw fab" /><span class="name"> Pinterest</span></a><a class="facebook post-action post-share-on dropdown-item" href="javascript:" title="Share on facebook"><i class="fa-facebook fa-fw fab" /><span class="name"> Facebook</span></a><a class="twitter post-action post-share-on dropdown-item" href="javascript:" title="Tweet"><i class="fa-twitter fa-fw fab" /><span class="name"> Twitter</span></a><a class="google post-action post-share-on dropdown-item" href="javascript:" title="Share on Google +"><i class="fa-google-plus-g fa-fw fab" /><span class="name"> Google +</span></a><a class="reddit post-action post-share-on dropdown-item" href="javascript:" title="Share on reddit"><i class="fa-reddit-alien fa-fw fab" /><span class="name"> Reddit</span></a><a class="vk post-action post-share-on dropdown-item" href="javascript:" title="Share on VK"><i class="fa-vk fa-fw fab" /><span class="name"> VK</span></a>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
import api from '@/api'
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      typeToIcons: {
        photo: 'fa-camera-retro fas fa-lg icon-photo',
        audio: 'fa-headphones fas fa-lg icon-audio',
        video: 'fa-video fas fa-lg icon-video',
        answer: 'fa-quote-right fas fa-lg icon-quote',
        link: 'fa-link fas fa-lg icon-link',
        quote: 'fa-quote-right fas fa-lg icon-quote',
        chat: 'fa-comments far fa-lg icon-chat',
        text: 'fa-font fas fa-lg icon-text'
      },
      iconColor: {
        photo: '',
        video: '',
        answer: '',
        link: '',
        quote: '',
        chat: '',
        text: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
      favPosts: 'favPosts',
      user: 'user'
    }),
    type () {
      return this.post.type
    },
    inFavs () {
      return this.favPosts.filter(post => parseInt(post.post_id) === this.post.id).length > 0
    }
  },
  methods: {
    timeNow (timestamp) {
      return moment(timestamp).fromNow()
    },
    typeToIcon (type) {
      return this.typeToIcons[type]
    },
    async addToFav () {
      if (!this.isLoggedIn) {
        this.$store.dispatch('showLogin', true)
      } else if (this.inFavs) {
        const fav = this.favPosts.filter(post => parseInt(post.post_id) === this.post.id)[0]
        const { data } = await api.removeFav(fav.favorite_id)
        if (data.error === 0) {
          this.$store.dispatch('removePostFromFav', fav.favorite_id)
          this.$emit('removed')
        }
      } else {
        const { data } = await api.addBlogToFavs(this.user.user_id, 'post', this.post.blog_name, this.post.id)
        if (data.error === 0) {
          const { data } = await api.myFavs(this.user.user_id)
          this.$store.dispatch('setBlog', data)
        }
      }
    }
  }
}
</script>

<style scoped>
.post {
  padding: 10px;
  width: 100vw;
  color: white;
  text-align: justify;
}
@media screen and (max-width: 1280px) and (min-width: 993px) {
  .post {
    width: 33vw !important;
  }
}
@media screen and (max-width: 992px) and (min-width: 601px) {
  .post {
    width: 50vw !important;
  }
}
.post-wrapper {
  margin: 0;
  padding: 0;
  border-radius: 2px;
  box-shadow: rgba(28,35,43,0.5) 0 0 1px 0;
}
.post-content {
  font-size: 0.85rem;
  background: #465056;
  border: 1px solid #2f2f2f;
}
.post-info {
  margin: 0;
  padding: 0;
  background: #2b353b;
  border: 1px solid #2f2f2f;
  color: white;
}
.post-misc {
    color: #adb5bd;
    font-size: 75%;
    text-transform: uppercase;
    border: none;
}
.post-misc .post-notes, .post-misc .post-date, .post-misc .post-type {
    float: left;
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}

.post-type>.btn {
    padding-left: 0;
}
.post-misc .btn {
    padding-bottom: 0;
    padding-right: 0;
    padding-left: .375rem;
}
.btn-group>.btn:first-child {
    margin-left: 0;
}
.post-misc .post-favorite {
    padding-right: .375rem;
}
.btn-group>.btn, .btn-group-vertical>.btn {
    position: relative;
    flex: 0 1 auto;
}
.btn-sm, .btn-group-sm>.btn, .post-action {
    padding: .25rem .5rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: 0;
}
.post-misc a {
    color: inherit;
}
.btn-link {
    font-weight: 400;
    color: #6ab0fb;
    background-color: transparent;
}
.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0;
    transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
}
.post-misc .post-actions {
    float: right;
}
.post-actions {
    text-align: center;
}
.btn-group, .btn-group-vertical {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
}
.caption {
  border: 1px solid #2f2f2f;
}
.tags {
  border: 1px solid #2f2f2f;
}

.icon-photo {
    color: #d95e40;
}
.icon-video {
    color: #748089;
}
.icon-chat {
    color: #529ecc;
}
.icon-quote {
    color: #f2992e;
}
.icon-audio {
    color: #a77dc2;
}
.icon-text {
    color: #bbb;
}
.icon-link {
    color: #56bc8a;
}
.fav-done {
    color: #56b657 !important;
}
</style>
