<script>
import FirebaseTest from '../components/FirebaseTest.vue'

export default {
  components: {
    FirebaseTest
  },
  props: {
    ztitle: ''
  },
  data: function () {
    return {
      isOpen: false,
      transition: 'menu-fade'
    }
  },
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<template>
<div>
  <header class="site-header">
  <div class="header-left">
   <router-link to="/" exact class="logo"><div class="logo-holder"></div></router-link>
  </div>
  <div class="header-center">
     <div class="page-title-top">{{ztitle}}</div>
  </div>

   <FirebaseTest></FirebaseTest>

   <div class="header-right">

<nav>
  <button class="nav-toggle" @click='toggle()' :class="{ 'opened': isOpen }" >
    <span class="bar-top"></span>
    <span class="bar-mid"></span>
    <span class="bar-bot"></span>
  </button>
</nav>
   </div>
  </header>

  

<transition :name="transition" mode="out-in">
<div class="mobile-menu" v-show="isOpen">

<router-link to="/about" active-class="active"><li>About</li></router-link>
<router-link to="/resume" active-class="active"><li>Resume</li></router-link>
<router-link to="/work" active-class="active"><li>Work</li></router-link>
<router-link to="/contact" active-class="active"><li>Contact</li></router-link>

</div>
</transition>

</div>
</template>


<style>

button#PushSubscribeButton {
    background: black;
    color: white;
    border: none;
    border-radius: 2px;
    padding: 5px 5px;
    cursor: pointer;
    font-size: 8px;
    position: absolute;
    top: 53px;
    width: 100px;
    right: 10px;
}

.menu-fade-enter-active, .menu-fade-leave-active {
  transition: opacity .3s ease;
}
.menu-fade-enter, .menu-fade-leave-to
/* .component-fade-leave-active for <2.1.8 */ {
  opacity: 0;
}

.mobile-menu {
    background: #232323;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px;
    padding: 0px;
    width: 100%;
    position: fixed;
    color: white;
    display: flex;
    flex-direction: column;
    list-style: none;
}
.mobile-menu > a {
    font-size: 60px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 300;
    font-style: italic;
    color: #fff;
}

.nav-toggle {
  background: transparent;
  border: 1px solid transparent;
  position: relative;
  top: 3px;
  right: 5px;
  }
 
.nav-toggle:focus {
  outline-width: 0;
}

.nav-toggle [class*='bar-'] {
    background: #000000;
    display: block;
    transform: rotate(0deg);
    transition: .2s ease all;
    border-radius: 2px;
    height: 2px;
    width: 40px;
    margin-bottom: 8px;
}

.nav-toggle .bar-bot {
  margin-bottom: 0;
}

.opened .bar-top {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  -webkit-transform-origin: 15% 15%;
          transform-origin: 15% 15%;
}
.opened .bar-mid {
  opacity: 0;
}
.opened .bar-bot {
  -webkit-transform: rotate(45deg);
          transform: rotate(-45deg);
  -webkit-transform-origin: 15% 95%;
          transform-origin: 15% 95%;
}



</style>