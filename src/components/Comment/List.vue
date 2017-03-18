<template>
  <div class="comments">
    <h3 class="comments__count comments__title">{{ commentsNumber | formatCommentsNumber }}</h3>
    <ul class="comments__list">
      <comment-item v-for="comment in comments" :comment="comment"></comment-item>
    </ul>
    <comment-form :post="post"></comment-form>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
  import comments from './../../store/api/comments.js'
  import { eventHub } from './../../utils/event-hub.js'
  import { buildRequestURL } from './../../utils/helpers.js'
  import axios from 'axios'
  import CommentItem from './Item.vue'
  import CommentForm from './Form.vue'
  export default {
    props: ['post', 'commentsNumber'],
    components: {
      CommentItem,
      CommentForm
    },
    filters: {
      formatCommentsNumber (count) {
        return Number(count) === 1 ? '1 comment' : count + ' comments'
      }
    },
    data () {
      return {
        comments: []
      }
    },
    created () {
      this.loadComments(this.post)

      // Listen for emitting from Comment Form component
      eventHub.on('post_comment_succeed', (data) => {
        this.comments.push(data)
      })
    },
    watch: {
      post (to, from) {
        this.loadComments(to)
      }
    },
    methods: {
      loadComments (post) {
        var params = {
          post: post,
          per_page: 20,
          parent: 0,
          order: 'asc'
        }
        var requestedURL = axios.defaults.baseURL + '/comments'
        requestedURL = buildRequestURL(requestedURL, params)
        /* load data from cache */
        if ('caches' in window) {
          /* eslint-disable no-undef */
          caches.match(requestedURL).then((response) => {
            if (response) {
              response.json().then((_comments) => {
                this.comments = _comments
              })
            }
          })
        }
        comments.getComments(params)
        .then((response) => {
          this.comments = response.data
        })
        .catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>
