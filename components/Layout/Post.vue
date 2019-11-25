<template>
  <div class="post">
    <div class="post-wrapper row m-0 p-0">
      <div class="post-content col-md-12 m-0 p-0">
        <div v-if="type === 'text'" class="p-2 col-md-12 m-0">
          <h3>{{ post.title }}</h3>
          <div v-html="post.body" />
        </div>
        <div v-else-if="type === 'quote'" class="p-2 col-md-12 m-0">
          <p>{{ post.text }}</p>
        </div>
        <div v-else-if="type === 'link'" class="p-2 col-md-12 m-0">
          <p v-html="post.description" />
          <a :href="post.url" class="float-right text-info font-weight-bolder">{{ post.title }}</a><v-icon name="link" class="mx-1 float-right text-info" width="15px" />
        </div>
        <div v-else-if="type === 'chat'" class="p-2 col-md-12 m-0">
          <div v-for="(item, index) in post.dialogue" :key="index">
            <h5>
              {{ item.label }}
            </h5>
            <p>{{ item.phrase }}</p>
          </div>
        </div>
        <div v-else-if="type === 'audio'" class="m-0 p-0">
          <div v-html="post.embed" class="col-md-12 m-0 p-0" />
        </div>
        <div v-else-if="type === 'video'" class="col-md-12 m-0">
          <div v-html="post.player[0]" class="col-md-12 m-0 p-0" />
        </div>
        <div v-else-if="type === 'photo'">
          <div v-for="(item, index) in post.photos" :key="index">
            <img :src="item.original_size.url" class="col-md-12 m-0 p-0">
          </div>
        </div>
        <div v-else-if="type === 'answer'" class="p-2">
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
          <v-icon :name="typeToIcon(post.type)" class="float-left mx-1" width="20px" />
          {{ post.note_count }} NOTES {{ timeNow(post.date) }}
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
  data () {
    return {
      typeToIcons: {
        photo: 'camera',
        audio: 'mic',
        video: 'video',
        answer: 'clipboard',
        link: 'link',
        quote: 'at-sign',
        chat: 'message-square',
        text: 'type'
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
    type () {
      return this.post.type
    }
  },
  methods: {
    timeNow (timestamp) {
      return moment(timestamp).fromNow()
    },
    typeToIcon (type) {
      return this.typeToIcons[type]
    }
  }
}
</script>

<style scoped>
.post {
  padding: 10px;
  width: 33vw;
  color: white;
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
