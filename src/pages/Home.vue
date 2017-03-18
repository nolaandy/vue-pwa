<template>
<div>
<SiteHeader ztitle='AFW Development'></SiteHeader>
    <div class="container single">
      <div class="posts">
        <article class="post">
          <h1 class="post-title">Web Dev / IT</h1>
          <div class="post-meta">
            <span>Thank you for your patience while I get this site up and running.</span>
              <JaggedHr></JaggedHr>
            <span>Visit <a href="https://nolaandy.github.io">https://nolaandy.github.io</a> for more examples. This website uses the power of Service Workers to offer access to its content while offline.</span>
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