<template>
  <section class="index row">
    <div class="col">
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <h1 class="title">
            tumbex
          </h1>
          <hr>
          <div class="d-none d-sm-block">
            <p class="lead">
              You like <b>tumblr</b> ? <b>tumbex</b> is your access to all blogs, with a streamlined design and optimized navigation
            </p>
            <hr>
          </div>
        </div>
        <div class="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-sm-10 offset-sm-1">
          <form id="form-search" action="https://www.tumbex.com/search" method="get">
            <input id="home-search-safe" type="hidden" name="safe" value="1">
            <input id="home-search-type" type="hidden" name="type" value="">
            <p>Search tumblog, posts :</p><div class="input-group input-group-lg mb-3">
              <input
                id="form-search-input"
                type="text"
                name="q"
                class="form-control"
                placeholder="Search tumblog, posts"
                required=""
              >
              <div class="input-group-append">
                <input type="submit" value="Search" class="btn btn-primary">
              </div>
            </div>
          </form>
          <form id="find-tumblr" method="post">
            <p>Explore a tumblog :</p>
            <div class="input-group input-group-lg mb-3">
              <input
                id="tumblr-id"
                type="text"
                name="tumblr-id"
                class="form-control"
                placeholder="tumblr-name"
                required=""
              >
              <div class="input-group-append">
                <span class="input-group-text">.tumblr.com</span>
              </div>
            </div>
            <div class="alert alert-danger text-center verify-error" style="display: none">
              <h5 class="mb-0">
                <strong>Oh snap!</strong> tumblr "<strong><span class="verify-tumblr" /></strong>" not found.
              </h5>
            </div>
            <div class="alert alert-success text-center verify-success" style="display: none">
              <h5 class="mb-0">
                <strong>Yeah!</strong> tumblr "<strong><span class="verify-tumblr" /></strong>" found. <i class="fa fa-spin fa-sync-alt" />
              </h5>
            </div>
            <div class="row">
              <div class="col offset-md-4 col-md-4">
                <button type="submit" class="btn btn-block btn-primary">
                  Go <i class="fa fa-spin fa-sync-alt verifying" style="display: none" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
p {
  color: white;
}
section {
  background-color: rgba(0, 0, 0, 0.45);
  min-height: 85vh;
  padding: 6% 0px;
  text-align: center !important;
  align-items: center !important;
}
hr {
  border-top-width: initial;
    border-right-width: initial;
    border-left-width: initial;
    border-top-color: initial;
    border-right-color: initial;
    border-left-color: initial;
    border-style: none none solid;
    border-image: initial;
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
}
.title {
  font-size: 3.5rem;
  color: white;
  font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0.5rem;
}
.lead {
  font-size: 1.25rem;
    font-weight: 300;
    color: white;
}
</style>
