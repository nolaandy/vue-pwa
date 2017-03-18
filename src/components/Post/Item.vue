<template>
  <article class="post">
    <h2 class="post-title">
      <router-link :to="{ name: 'single', params: { slug: post.slug } }">
        <span v-html="post.title.rendered"></span>
      </router-link>
    </h2>
    <div class="post-meta">
      <span class="date" v-text="post.date"></span>
      <span class="comment">{{ post.comments_number | formatCommentsNumber }}</span>
    </div>
  </article>
</template>

<script>
  export default {
    props: ['post'],
    filters: {
      formatCommentsNumber (count) {
        return Number(count) === 1 ? '1 comment' : count + ' comments'
      }
    }
  }
</script>