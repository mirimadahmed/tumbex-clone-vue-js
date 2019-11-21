<template>
  <section class="about row">
    <div class="col">
      <div class="container">
        <h2 class="title">
          About
        </h2>
        <p class="lead">
          Tumbex indexes only tumblr posts which have caption or tags. We analyse the content and define if tumblr or posts are nsfw/adult.
        </p>
        <p class="lead">
          If your tumblr was detected as nsfw by mistake, you can request a review and we will manually check your tumblr.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
section {
      background-color: rgba(252,252,252,0.85);
    color: #333;
    padding: 6% 0;
    min-height: 85vh;
    text-align: center !important;
    align-items: center !important;
}
.title {
  border-bottom: 1px rgba(68,151,94,0.9) solid;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    position: relative;
    font-size: 3.5rem;
}
.lead {
    font-size: 1.25rem;
    font-weight: 300;
}
</style>
