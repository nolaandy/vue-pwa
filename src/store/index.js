import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import posts from './modules/posts'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    posts
  },
  strict: process.env.NODE_ENV !== 'production'
})
