<template>
<div>
  <SiteHeader ztitle='Portfolio Items'></SiteHeader>
  <div class="container single">
    <div class="posts">
      <article class="post">
        <h1 class="post-title">My Work</h1>
        <div class="post-meta">
          <span>this is just a proof of concept for now. These images could be available offline.</span>
          <span>Visit <a href="https://nolaandy.github.io">https://nolaandy.github.io</a> for more examples.</span>
        </div>
        <JaggedHr></JaggedHr>
        <div class="post-content center">
          <img src="../../static/images/work-img-1.jpg">
          <img src="../../static/images/work-img-2.jpg">
          <img src="../../static/images/work-img-6.jpg">
          <img src="../../static/images/work-img-5.jpg">
          <img src="../../static/images/work-img-3.jpg">
          <img src="../../static/images/work-img-4.jpg">
        </div>
      </article>
    </div>
  </div>
</div>
</template>

<script>
  import SiteHeader from '../components/Header.vue'
  import JaggedHr from '../components/Elements/JaggedHr.vue'
  export default {
    components: {
      JaggedHr,
      SiteHeader
    },
    props: {
      ztitle: ''
    },
    created () {
      document.title = 'My Work | Andrew Finney Weilbaecher'
    }
}
</script>