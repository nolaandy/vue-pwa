// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from './store'
import NProgress from 'nprogress'
import axios from 'axios'
import Firebase from 'firebase'

/* eslint-disable no-new no-undef, semi, indent, space-before-function-paren, quotes, no-unused-vars */
let firebase = new Firebase('https://push-test-161718.firebaseio.com/')
/* eslint-enable */

// axios configuration
axios.defaults.baseURL = 'https://rampages.us/bicycleurbanism2015/wp-json/wp/v2'
axios.interceptors.request.use((config) => {
  NProgress.start()
  return config
}, (error) => {
  // do something with request error
  NProgress.done(true)
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  NProgress.done()
  return response
}, (error) => {
  // do something with response error
  NProgress.done(true)
  return Promise.reject(error)
})

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
/* eslint-disable no-new no-undef, semi, indent, space-before-function-paren, quotes, no-unused-vars */
/* implement service worker */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then(function (reg) {
      console.log('Service Worker Registered, Scoped is: ' + reg.scope)
    })
}
/* eslint-enable no-new */
/* eslint-disable no-new, no-undef, semi, indent, space-before-function-paren, quotes, no-unused-vars */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
/* eslint-enable no-new */
