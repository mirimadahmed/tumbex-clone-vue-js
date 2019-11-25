<template>
  <div class="post">
    <div class="post-wrapper row m-0 p-0">
      <div class="post-content col-md-12 m-0 p-0">
        <div v-if="type === 'text'">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </div>
        <div v-else-if="type === 'quote'">
          <p>{{ post.text }}</p>
        </div>
        <div v-else-if="type === 'link'">
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
          <a :href="post.url">{{ post.excerpt }}</a>
        </div>
        <div v-else-if="type === 'chat'">
          <p>{{ post.body }}</p>
          <div v-for="(item, index) in post.dialogue" :key="index">
            <h3>
              {{ item.label }}
            </h3>
            <p>{{ item.phrase }}</p>
          </div>
        </div>
        <div v-else-if="type === 'audio'">
          <h3>{{ post.caption }}</h3>
          <div v-html="post.embed" />
        </div>
        <div v-else-if="type === 'video'">
          <h3>{{ post.caption }}</h3>
          <div v-html="post.player[0]" />
        </div>
        <div v-else-if="type === 'photo'">
          <div v-for="(item, index) in post.photos" :key="index">
            <img :src="item.original_size.url" class="col-md-12 m-0 p-0">
          </div>
        </div>
        <div v-else-if="type === 'answer'">
          <h3>{{ post.question }}</h3>
          <h6>{{ post.answer }}</h6>
        </div>
      </div>
      <div class="col-md-12 post-info">
        <div v-if="post.caption" v-html="post.caption" class="p-1 caption" />
        <div v-if="post.tags.length > 0" class="p-1 tags">
          <span v-for="(item, i) in post.tags" :key="i">
            #{{ item }}
          </span>
        </div>
        <div class="p-1">
          {{ post.type }} | {{ post.note_count }} NOTES | {{ timeNow(post.date) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    type () {
      return this.post.type
    }
  },
  methods: {
    timeNow (timestamp) {
      return moment(timestamp).fromNow()
    }
  }
}
</script>

<style scoped>
.post {
  padding: 10px;
  max-width: 33vw;
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
.caption {
  border: 1px solid #2f2f2f;

}
.tags {
  border: 1px solid #2f2f2f;

}
</style>
