import posts from './../api/posts'
import axios from 'axios'
import { buildRequestURL } from './../../utils/helpers'
const state = {
  list: {
    data: null,
    max_pages: 0,
    total_posts: 0
  }
}

const actions = {
  getPosts ({ commit }, payload) {
    // build url
    var requestedURL = axios.defaults.baseURL + '/posts'
    requestedURL = buildRequestURL(requestedURL, payload)
    if ('caches' in window) {
      /* eslint-disable no-undef */
      caches.match(requestedURL).then((response) => {
        if (response) {
          response.json().then((_posts) => {
            let headers = response.headers
            let posts = {}
            posts.data = _posts
            posts.total_posts = headers.get('x-wp-total')
            posts.max_pages = headers.get('x-wp-totalpages')
            commit('FETCH_POSTS', posts)
          })
        }
      })
    }

    posts.getPosts(payload)
      .then((response) => {
        let headers = response.headers
        let posts = {}
        posts.data = response.data
        posts.total_posts = headers['x-wp-total']
        posts.max_pages = headers['x-wp-totalpages']
        commit('FETCH_POSTS', posts)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const mutations = {
  'FETCH_POSTS' (state, posts) {
    state.list = posts
  }
}

export default { state, mutations, actions }
