<template>
  <section v-if="blog !== null" class="blog blog-panel">
    <h1 class="blog-panel-header">
      <span class="blog-panel-icon">
        <a :href="`https://www.tumbex.com/${blog.name}/posts`">
          <img
            :src="`https://api.tumblr.com/v2/blog/${blog.name}.tumblr.com/avatar/128`"
            :alt="blog.name"
            class="t-blog-icon"
          >
        </a>
      </span>
      <span class="blog-panel-left text-truncate">
        <a :href="`https://www.tumbex.com/${blog.name}/posts`">{{ blog.name }}</a>
      </span>
      <span class="blog-panel-right text-truncate">
        <a :href="`https://${blog.name}.tumblr.com`" target="_blank">.tumblr.com</a>
      </span>
    </h1>
    <div class="blog-panel-title flow-text">
      {{ blog.title }}
    </div>
    <div class="blog-action container-fluid text-center px-0">
      <a
        :data-tumblr="blog.name"
        href="#"
        class="btn-square large tumbex tumblr-favorite"
        title="Add to favorite"
      >
        <i class="far fa-star fa-lg" />
      </a>
      <div class="h-divider" />
      <a
        href="#"
        class="btn-square large facebook"
        title="Share on facebook"
        onclick="window.open('https://www.facebook.com/dialog/share?app_id=777323555620254&amp;display=popup&amp;href=https%3A%2F%2Fwww.tumbex.com%2Fmirimadahmed.tumblr%2Fposts&amp;redirect_uri=https%3A%2F%2Fwww.tumbex.com%2Fmirimadahmed.tumblr%2Fposts', null, 'width=550, height=420'); return false;"
      >
        <i class="fab fa-facebook fa-lg" />
      </a>
      <a
        href="#"
        class="btn-square large twitter"
        title="Share on twitter"
        onclick="window.open('https://twitter.com/share?url=https%3A%2F%2Fwww.tumbex.com%2Fmirimadahmed.tumblr%2Fposts&amp;text=mirimadahmed+-+mirimadahmed+-+Tumbex', null, 'width=550, height=420'); return false;"
      >
        <i class="fab fa-twitter fa-lg" />
      </a>
      <a
        href="#"
        class="btn-square large google"
        title="Share on Google +"
        onclick="window.open('https://plus.google.com/share?url=https%3A%2F%2Fwww.tumbex.com%2Fmirimadahmed.tumblr%2Fposts', null, 'width=550, height=420'); return false;"
      >
        <i class="fab fa-google-plus-g fa-lg" />
      </a>
      <a
        href="#"
        class="btn-square large reddit"
        title="Share on Reddit"
        onclick="window.open('https://reddit.com/submit?url=https%3A%2F%2Fwww.tumbex.com%2Fmirimadahmed.tumblr%2Fposts&amp;title=mirimadahmed+-+mirimadahmed+-+Tumbex', null, 'width=550, height=420'); return false;"
      >
        <i class="fab fa-reddit-alien fa-lg" />
      </a>
      <a
        href="#"
        class="btn-square large vk"
        title="Share on VK"
        onclick="window.open('https://vk.com/share.php?url=https%3A%2F%2Fwww.tumbex.com%2Fmirimadahmed.tumblr%2Fposts', null, 'width=550, height=420'); return false;"
      >
        <i class="fab fa-vk fa-lg" />
      </a>
      <div class="h-divider" />
      <a href="#" class="btn-square large text-danger report-blog-abuse" title="Report abuse">
        <i class="fa fa-exclamation-triangle" style="font-size:1rem" />
      </a>
    </div>
    <div
      class="container-fluid blog-panel-description"
    >
      {{ blog.description }}
    </div>
    <ul class="container-fluid icon-list">
      <li :class="type && type === 'text' ? 'active': ''" class="text">
        <a :href="`https://www.tumbex.com/${blog.name}/text`">
          <i class="fas fa-font fa-3x" />
          <span class="number">Text</span>
          <span class="sr-only">Text</span>
        </a>
      </li>
      <li :class="type && type === 'quote' ? 'active': ''" class="quote">
        <a :href="`https://www.tumbex.com/${blog.name}/quote`">
          <i class="fas fa-quote-right fa-3x" />
          <span class="number">Citation</span>
          <span class="sr-only">Citation</span>
        </a>
      </li>
      <li :class="type && type === 'audio' ? 'active': ''" class="audio">
        <a :href="`https://www.tumbex.com/${blog.name}/audio`">
          <i class="fas fa-headphones fa-3x" />
          <span class="number">Audio</span>
          <span class="sr-only">Audio</span>
        </a>
      </li>
      <li :class="type && type === 'photo' ? 'active': ''" class="photo">
        <a :href="`https://www.tumbex.com/${blog.name}/photo`">
          <i class="fas fa-camera-retro fa-3x" />
          <span class="number">Photo</span>
          <span class="sr-only">Photo</span>
        </a>
      </li>
      <li :class="type && type === 'video' ? 'active': ''" class="video">
        <a :href="`https://www.tumbex.com/${blog.name}/video`">
          <i class="fas fa-video fa-3x" />
          <span class="number">Video</span>
          <span class="sr-only">Video</span>
        </a>
      </li>
      <li :class="type && type === 'link' ? 'active': ''" class="link">
        <a :href="`https://www.tumbex.com/${blog.name}/link`">
          <i class="fas fa-link fa-3x" />
          <span class="number">Lien</span>
          <span class="sr-only">Lien</span>
        </a>
      </li>
      <li :class="type && type === 'chat' ? 'active': ''" class="chat">
        <a :href="`https://www.tumbex.com/${blog.name}/chat`">
          <i class="far fa-comments fa-3x" />
          <span class="number">Discussion</span>
          <span class="sr-only">Discussion</span>
        </a>
      </li>
    </ul>
    <div class="pb-3">
      <div class="blog-tags">
        <div class="container-fluid">
          <form class="row mb-0" onsubmit="window.event.preventDefault()">
            <div class="col col-md-10 offset-md-1">
              <div class="form-group input-group mb-0">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    Tags (
                    <span id="blog-count-tags">{{ tags.length }}</span>)
                  </span>
                </div>
                <input
                  id="blog-filter-tags"
                  type="text"
                  class="form-control"
                  placeholder="Filter..."
                >
              </div>
            </div>
          </form>
          <div class="row">
            <div class="col col-md-10 offset-md-1">
              <ul id="blog-list-tags">
                <li v-for="(tag, i) in tags" :key="i">
                  <a :href="`/${blog.name}?tag=${tag}`" class="tag">{{ tag }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      type: this.$route.params.type
    }
  },
  computed: {
    ...mapGetters(['blog', 'tags'])
  }
}
</script>
<style scoped>
.blog {
    position: relative;
    margin-bottom: 1rem;
    box-shadow: rgba(11,14,16,0.35) 0 0 5px 0;
    border-bottom: 3px solid #4e9cba;
}
.blog-panel-header {
    position: relative;
    margin: 96px auto auto;
    text-align: center;
    min-height: 48px;
    font-size: 1.8rem;
    border-top: 3px solid #4e9cba;
    line-height: 1.5;
}
.blog>* {
    background-color: #3f525b;
}
.blog-panel-title {
    padding: 15px 0;
    text-align: center;
}
.flow-text {
  font-size: 1.488rem;
}
.blog-panel-icon {
    position: relative;
    width: 128px;
    height: 32px;
    display: inline-block;
}
.blog-panel-icon img {
    border-radius: 50%;
    position: absolute;
    top: -68px;
    left: -3px;
    border: 3px solid #4e9cba;
    background-color: #f1f4f5;
}
.blog-panel-left {
    margin-top: 2rem;
        display: block;
    max-width: 100%;
}
.blog-panel-right {
  display: block;
    max-width: 100%;

}
.text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.blog-action {
    padding-top: .5rem;
    padding-bottom: .5rem;
}
.container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.btn-square {
    height: 2rem;
    min-height: 2rem;
    max-height: 2rem;
    width: 2rem;
    min-width: 2rem;
    max-width: 2rem;
    line-height: 2rem;
    cursor: pointer;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
}
.btn-square, .btn-square:hover, .btn-square:active, .btn-square:focus {
    text-decoration: none;
}
.btn-square i {
    width: inherit;
    display: block;
    text-align: center;
    line-height: 2rem;
}
.btn-square .large {
    height: 3rem;
    min-height: 3rem;
    max-height: 3rem;
    width: 3rem;
    min-width: 3rem;
    max-width: 3rem;
    line-height: 3rem;
}
.h-divider {
    display: inline-block;
    background: #adb5bd;
    vertical-align: middle;
    height: 2rem;
    min-height: 2rem;
    max-height: 2rem;
    width: 1px;
    min-width: 1px;
    max-width: 1px;
}
.tumbex, .post-action.favorite.fav {
    color: #56b657 !important;
}
.facebook {
    color: #3b5998 !important;
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
.text-danger {
    color: #dc3545 !important;
}

.blog-panel-description {
    text-align: center;
    margin: 0;
    padding-bottom: 1rem;
    overflow: hidden;
    word-break: break-word;
}
.icon-list:before {
    content: "";
    position: absolute;
    top: 0;
    left: -20px;
    right: -20px;
    bottom: 0;
    box-shadow: rgba(11,14,16,0.35) 0 0 3px 0 inset;
    border: 1px solid rgba(11,14,16,0.35);
}
.icon-list {
    text-align: center;
    background-color: #35444c;
    overflow: hidden;
    position: relative;
    padding-left: 0;
    list-style: none;
}
.icon-list li {
    padding: 10px !important;
    display: inline-block;
    height: 96px;
    width: 96px;
    position: relative;
    cursor: pointer;
}
.icon-list li>a {
    display: block;
    text-decoration: none;
    text-align: center;
    margin: 0;
    height: 100%;
    color: #f8f9fa;
}
.icon-list li.text i {
    color: #bbb;
}
.icon-list li.quote i {
    color: #f2992e;
}
.icon-list li.audio i {
    color: #a77dc2;
}
.icon-list li.photo i {
    color: #d95e40;
}
.icon-list li.video i {
    color: #748089;
}
.icon-list li.link i {
    color: #56bc8a;
}
.icon-list li.chat i {
    color: #529ecc;
}
.icon-list li>a span {
    font-size: 1.05em;
}
.icon-list li>a span, .icon-list li>a i {
    display: block;
}
.sr-only, .post-single .post-share-on .name {
    height: 1px !important;
    width: 1px !important;
}
.sr-only, .post-single .post-share-on .name {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
.sr-only {
    border: 0;
    clip: rect(0,0,0,0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.blog-tags {
    position: relative;
    padding-top: 1rem;
}
.blog-tags ul {
    margin-bottom: 0;
    padding-top: .5rem;
    text-align: center;
    padding-left: 0;
    list-style: none;
}
.blog-tags ul li {
    height: 1rem;
    line-height: 1rem;
    display: inline-block;
}
.tag:before {
    content: "# ";
    font-style: italic;
    font-weight: 700;
    color: #d8d8d8;
}
.blog-tags ul li a {
    color: #f4f1ef;
    font-size: .8rem;
    line-height: .9rem;
    margin-right: 10px;
}
.icon-list li.active {
    background-color: #3f525b;
    border-radius: 5em;
    box-shadow: #3f525b 0 0 0 5px, rgba(11,14,16,0.35) 0 0 10px 5px;
}

.input-group-text {
    display: flex;
    align-items: center;
    padding: .375rem .5rem;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #f4f1ef;
    text-align: center;
    white-space: nowrap;
    background-color: rgba(42,55,61,0.8);
    border: 1px solid #4a5f6a;
}
.form-control, .btn.btn-control {
    display: block;
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

@media (max-width: 767.98px){
.icon-list li {
    height: 64px;
    width: 64px;
}
.icon-list li>a {
    padding: 3px 0 0 0;
}
.icon-list li>a span {
    font-size: 1rem;
}
}
@media (min-width: 576px) {
.blog-panel-icon {
    position: absolute;
    display: block;
    left: 50%;
    margin-left: -64px;
}
.blog-panel-left {
    right: 50%;
    margin-right: 74px;
    margin-top: 0;
    position: absolute;
    display: block;
    max-width: 40%;
    max-width: calc(50% - 64px);
}
.blog-panel-right {
    margin-left: 74px;
    left: 50%;
    position: absolute;
    display: block;
    max-width: 40%;
    max-width: calc(50% - 64px);
}
}

</style>
