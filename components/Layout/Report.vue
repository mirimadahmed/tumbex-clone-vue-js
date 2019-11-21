<template>
  <section class="row">
    <div class="col">
      <div class="container">
        <h2 class="title">
          Content Removal
        </h2>
        <p class="lead">
          If you want to remove any content, just report them with the report button : <button class="btn btn-dark btn-sm">
            <i class="fa fa-exclamation-circle fa-lg fa-fw text-danger" />
          </button>.
        </p>
        <p class="lead">
          <b>If the content is related to violence against minors, it will be immediately removed from tumbex and we will report it to tumblr.com.</b>
        </p>
        <p class="lead">
          For reports of copyright infringement / invasion of privacy, please provide proof by email that this is your property. We will then delete the contents of tumbex.<br> Unfortunately, we are not affiliated with Tumblr and do not have the ability to remove images hosted directly by Tumblr.<br> You can however go to <a href="https://www.tumblr.com/abuse" target="_blank">https://www.tumblr.com/abuse</a> and follow the procedure for deleting content.
        </p>
        <p class="lead">
          The post link will be requested, you can find it at the bottom of each page by following the link "Original Post".
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
  background-color: rgba(151,68,68,0.9);
  padding: 6% 0;
  text-align: center !important;
  width: 100%;
  margin: 0;
  color: white;
}
.title {
  border-bottom: 1px white solid;
}
.lead {
  font-size: 1.25rem;
    font-weight: 300;
}
</style>
