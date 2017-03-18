<template>
<div>
<SiteHeader ztitle='Contact Me Today!'></SiteHeader>
  <div class="container single">
    <div class="posts">
      <article class="post">
        <h1 class="post-title">Contact Me</h1>
        <div class="post-meta">
          <span>tell me what's on your mind</span>
        </div>
        <JaggedHr></JaggedHr>
        <div class="post-content center">
          <a href="mailto:andyw504@gmail.com" rel="noopener noreferrer">andyw504@gmail.com</a>

          <ContactForm></ContactForm>
          
          
        </div>
      </article>
    </div>
  </div>
</div>
</template>

<script>
  import SiteHeader from '../components/Header.vue'
  import JaggedHr from '../components/Elements/JaggedHr.vue'
  import ContactForm from '../components/ContactForm.vue'
  import RedditList from '../components/RedditList.vue'
  import FirebaseTest from '../components/FirebaseTest.vue'

  export default {
    components: {
      JaggedHr,
      SiteHeader,
      ContactForm,
      RedditList,
      FirebaseTest
    },
    data: function () {
      return {
      }
    }

}
</script>