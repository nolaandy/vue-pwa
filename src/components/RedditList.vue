<template>
  <div class="reddit-list">
    <h3>Posts from /r/{{ subreddit }}</h3>
    <ul>
        <li v-for="post in posts">
            <a v-bind:href="post.data.url">
                {{ post.data.title }}
            </a>
        </li>
    </ul>
  </div>
</template>

<script>
let axios = require('axios')
export default {
  data () {
    return {
      posts: [],
      subreddit: 'VueJS',
      limit: 1000
    }
  },

  mounted: function () {
    let self = this
    axios.get('https://www.reddit.com/r/' + this.subreddit + '/.json?limit=' + this.limit)
    .then(response => {
      self.posts = response.data.data.children
    })
  }
}

</script>

<style>
    .reddit-list {
        font-family: sans-serif;
        width: 500px;
        padding: 10px;
        background: #f1f2f3;
        border: solid 2px #ccc;
    }            
    .reddit-list h3 {
        font-size: 15px;
        font-weight: bold;                
    }
    .reddit-list ul {
        font-size: 13px;
        list-style-type: none;
        padding: 0;                
    }
    .reddit-list ul li {
        margin-bottom: 10px;
    }
</style>