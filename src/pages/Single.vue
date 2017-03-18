<template>
  <div class="container single">

    <div class="posts">
      <div class="not-found" v-if="post == 0">
        <p>Post not found!</p>
      </div>
      <article class="post" v-if="post">
        <h1 class="post-title">
          <router-link :to="{ name: 'single', params: { slug: post.slug } }">
            <span v-html="post.title.rendered"></span>
          </router-link>
        </h1>
        <div class="post-meta">
          <span class="time" v-text="post.date"></span>
        </div>
        <div class="post-content" v-html="post.content.rendered"></div>
      </article><!-- end .post -->

      <comments :post="post.id" :comments-number="post.comments_number" v-if="post"></comments>
    </div>
  </div>
</template>

<script>
  import posts from './../store/api/posts.js'
  import Comments from 'components/Comment/List.vue'
  import axios from 'axios'
  import { buildRequestURL } from './../utils/helpers.js'
  import _ from 'lodash'
  export default {
    components: {
      Comments
    },
    computed: {
      posts () {
        return this.$store.getters.posts
      }
    },
    data () {
      return {
        post: null
      }
    },
    created () {
      this.loadItem()
    },
    watch: {
      $route (to, from) {
        this.loadItem()
      }
    },
    methods: {
      loadItem () {
        /* get data from current list posts */
        if (this.posts) {
          this.post = _.find(this.posts, { slug: this.$route.params.slug })
          if (this.post) {
            document.title = this.post.title.rendered + ' | Thien\'s notes'
          }
        }
        /* get data from cache */
        var requestedURL = axios.defaults.baseURL + '/posts'
        requestedURL = buildRequestURL(requestedURL, { slug: this.$route.params.slug })
        if ('caches' in window) {
          /* eslint-disable no-undef */
          caches.match(requestedURL).then((response) => {
            if (response) {
              response.json().then((_posts) => {
                this.post = _posts[0]
                document.title = this.post.title.rendered + ' | Thien\'s notes'
              })
            }
          })
        }
        /* get data from server */
        posts.getPost(this.$route.params.slug)
        .then((response) => {
          this.post = response.data[0]
          document.title = this.post.title.rendered + ' | Thien\'s notes'
        })
        .catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>