<template>
  <div id="app">
    <site-header></site-header>
    <div class="main-content">
      <transition :name="transition" mode="out-in">
      <router-view></router-view></transition>
    </div>
    <site-footer></site-footer>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import SiteHeader from 'components/Header.vue'
import SiteFooter from 'components/Footer.vue'
import BottomNav from 'components/BottomNav.vue'
export default {
  name: 'app',
  components: {
    SiteHeader,
    SiteFooter,
    BottomNav
  },
  data () {
    const data = {
      transition: 'fade'
    }
    return data
  }
}
</script>

<style lang="scss">
  @import "~nprogress/nprogress.css";
  @import "~ladda/css/ladda";
  @import "assets/scss/main";
  body {

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to
/* .component-fade-leave-active for <2.1.8 */ {
  opacity: 0;
}

    #nprogress {
      .bar {
        background: #ffd400;
        height: 5px;
      }
      .peg {
        box-shadow: none;
      }
      .spinner-icon {
        border-top-color: #ffd400;
        border-left-color: #ffd400;
      }
    }
  }
</style>
