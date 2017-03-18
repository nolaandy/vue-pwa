<template>
  <form class="form comments__form" @submit.prevent="submitComment">
    <p class="comments__moderation" v-if="isModeration"><span class="emoji">👍</span> Thank you for posting comment. Your comment is awaiting moderation!</p>
    <h3 class="comments__title">Leave a comment</h3>
    <div class="form-group">
      <input type="text" id="name" required placeholder="Your name" v-model="commentAuthorName">
    </div>
    <div class="form-group">
      <input type="email" id="email" required placeholder="Your email" v-model="commentAuthorEmail">
    </div>
    <div class="form-group">
      <textarea required placeholder="Your comment" id="comment-content" v-model="commentContent"></textarea>
    </div>
    <div class="form-group">
      <button class="ladda-button btn-submit btn" data-style="expand-right"><span class="ladda-label">Submit</span></button>
    </div>
  </form>
</template>

<script>
  import comments from './../../store/api/comments.js'
  import { eventHub } from './../../utils/event-hub.js'
  import ladda from 'ladda'
  export default {
    props: ['post'],
    computed: {
      submitText () {
        return this.isSubmitting ? 'Submitting...' : 'Submit'
      }
    },
    data () {
      return {
        commentAuthorName: '',
        commentAuthorEmail: '',
        commentContent: '',
        isSubmitting: false,
        isModeration: false
      }
    },
    mounted () {
      this.submitButton = ladda.create(document.querySelector('.btn-submit'))
    },
    methods: {
      submitComment () {
        if (!this.isSubmitting) {
          if (this.commentAuthorName && this.commentAuthorEmail && this.commentContent) {
            this.isSubmitting = true
            this.submitButton.start()
            // post comment
            comments.postComment({
              post: this.post,
              author_name: this.commentAuthorName,
              author_email: this.commentAuthorEmail,
              content: this.commentContent
            }).then((response) => {
              this.isSubmitting = false
              this.submitButton.stop()
              this.resetCommentFields()

              let comment = response.data
              if (comment.status === 'approved') {
                // if comment status is approved -> send signal to Comment List component to update comments list
                eventHub.emit('post_comment_succeed', comment)
              } else {
                // if comment status is hold -> show notification
                this.isModeration = true
              }
            }).catch((error) => {
              console.log(error)
            })
          } else {
            window.alert('Comment fields are missing!')
          }
        }
      },
      resetCommentFields () {
        this.commentAuthorName = ''
        this.commentAuthorEmail = ''
        this.commentContent = ''
      }
    }
  }
</script>