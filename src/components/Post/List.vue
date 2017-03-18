<template>
  <div class="container">
    <transition :name="transition">
      <div class="posts" :key="displayedPage" v-if="displayedPage > 0">
        <post-item v-for="post in posts" :post="post"></post-item>
      </div>
    </transition>
  </div>
</template>

<script>
  import PostItem from './Item.vue'
  export default {
    props: {
      type: String
    },
    computed: {
      data () {
        return this.$store.state.posts.list
      },
      posts () {
        return this.data.data
      },
      maxPage () {
        return Number(this.data.max_pages)
      },
      page () {
        return Number(this.$route.params.page) || 1
      },
      hasMore () {
        return this.page < this.maxPage
      },
      slug () {
        return this.type === 'index' ? '' : this.type + '/'
      }
    },
    data () {
      const data = {
        transition: 'slide-up',
        displayedPage: Number(this.$route.params.page) || 0
      }
      return data
    },
    components: {
      PostItem
    },
    beforeMount () {
      this.loadItems(this.page)
    },
    watch: {
      page (to, from) {
        this.loadItems(to, from)
      }
    },
    methods: {
      loadItems (to = this.page, from = 1) {
        this.$store.dispatch('getPosts', {
          page: to
        }).then(() => {
          this.transition = from === -1
            ? null
            : to > from ? 'slide-left' : 'slide-right'
          this.displayedPage = to
          document.title = this.type.charAt(0).toUpperCase() + this.type.slice(1) + ' | Page ' + to + ' | Thien\'s notes'
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .posts {
    padding-top: 48px;
  }
  .posts {
    transition: all .5s cubic-bezier(.55,0,.1,1)
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    transform: translate(30px, 0);
  }

  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    transform: translate(-30px, 0)
  }
</style>