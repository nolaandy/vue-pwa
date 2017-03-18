<script>
import Vue from 'vue'
import VueFire from 'vuefire'
import Firebase from 'firebase'

Vue.use(VueFire)

const itemsRef = new Firebase('https://vuefiredemo.firebaseio.com/items/')
/* eslint-disable no-new */
new Vue({
  el: '#fire',
  firebase: {
    // can bind to either a direct Firebase reference or a query
    items: itemsRef.limitToLast(25)
  }
})
/* eslint-enable no-new */

</script>

<template>
<div id="fire">
  <div>
    <ul>
      <li v-for="item in items">
        {{ item.text }}
        <button @click="removeTodo(item['.key'])">X</button>
      </li>
    </ul>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" />
      <button>Add #{{ items.length }}</button>
    </form>
  </div>
</div>
</template>

<style>
  
</style>