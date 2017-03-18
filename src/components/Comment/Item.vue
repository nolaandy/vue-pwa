<template>
  <li :id="'comment-' + comment.id"
      class="comments__item"
      v-if="comment">
    <article class="comments__item__body">
      <span class="comments__item__date">{{ comment.date | dateFormat }}</span>
      <span class="comments__item__author" v-text="comment.author_name"></span>
      <div class="comments__item__content" v-html="comment.content.rendered"></div>
    </article>
    <ul v-if="comment.children" class="comments__item__children">
      <comment-item v-for="item in comment.children" :comment="item"></comment-item>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'comment-item',
    props: ['comment'],
    filters: {
      dateFormat (date) {
        if (date) {
          let d = new Date(date)
          return 'd/m/Y'
            .replace('d', d.getDate())
            .replace('m', d.getMonth() + 1)
            .replace('Y', d.getFullYear())
        }
      }
    }
  }
</script>