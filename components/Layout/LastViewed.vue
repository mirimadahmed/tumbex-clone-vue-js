<template>
  <div class="row m-0 p-3">
    <div class="col-md-12 heading">
      Last tumblr viewed
    </div>
    <div v-for="last in lastViewed" :key="last" class="col-md-2 my-2 text-center">
      <div class="col-md-12">
        <b-img v-bind="mainProps" rounded="circle" alt="Circle image" />
      </div>
      <div class="col-md-12 title">
        {{ last }}
      </div>
    </div>
    <div class="col-md-12 text-center">
      <b-button variant="outline-primary">
        View All
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mainProps: { blank: true, blankColor: '#777', width: 75, height: 75 },
      lastViewed: ['imad', 'hassan', 'umar', 'etc', 'etc', 'etc', 'etc']
    }
  }
}
</script>

<style scoped>
.heading {
  border-bottom: 1px white solid;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  position: relative;
  font-size: 3.5rem;
  line-height: 1.2;
  text-align: center;
  color: white;
}
.title {
  color: #6ab0fb;
  font-weight: 700;
  line-height: 3;
  font-size: 1rem;
}
</style>
