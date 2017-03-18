<script>
  import JaggedHr from '../components/Elements/JaggedHr.vue'
  import SiteHeader from '../components/Header.vue'

  export default {
    components: {
      JaggedHr,
      SiteHeader
    },
    props: {
      ztitle: ''
    },
    created () {
      document.title = 'About Me | Andrew Finney Weilbaecher'
    },
    data () {
      const data = {
        transitionName: 'fade2'
      }
      return data
    }
  }
</script>

<template>
<div>
  <SiteHeader ztitle='About Me...'></SiteHeader>
  <div class="container single">
    <div class="posts">
      <article class="post">
      <div class="my-picture"><img src="../../static/images/me.jpg"></div>

        <h1 class="post-title">About Me</h1>
        <div class="post-meta">
          <span>Andrew Finney Weilbaecher</span>
        </div>
          <JaggedHr></JaggedHr>
        <div class="post-content">
          <p>  I’ve been developing websites for over a decade. What I’ve learned is that coding is like the weather, it will continue to change on and off for a long, long time...</p>
          <p>Let’s share a few emails or a pint of coffee and discuss your next project.</p>
        </div>
      </article>
    </div>
  </div>
</div>
</template>

<style>
.fade2-enter-active, .fade2-leave-active {
  transition: opacity 5s ease;
    background-color: red;
}
.fade2-enter, .fade2-leave-to
/* .component-fade-leave-active for <2.1.8 */ {
  opacity: 0;

}

.my-picture {
  text-align: center;
  }
.my-picture  > img {
    border-radius: 50%;
    width: 33%;
  }


</style>