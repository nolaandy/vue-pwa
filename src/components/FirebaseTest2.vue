<script>
var firebase = require('firebase')
require('firebase/app')
require('firebase/messaging')

// Leave out Storage
// require("firebase/storage");

var config = {
  apiKey: 'AIzaSyBlaHmVZSckMomiI3BbT0oxJCBbbGjqd54',
  authDomain: 'push-test-161718.firebaseapp.com',
  databaseURL: 'https://push-test-161718.firebaseio.com',
  storageBucket: 'push-test-161718.appspot.com',
  messagingSenderId: '69874747537'
}

firebase.initializeApp(config)

export default {
/* eslint-disable no-undef */
  methods: {
    userSubscribe: function () {
      console.log('Subscribed!')
        // Retrieve Firebase Messaging object.
      const messaging = firebase.messaging()
      // Get Instance ID token. Initially this makes a network call, once retrieved
      // subsequent calls to getToken will return from cache.
      messaging.getToken()
      .then(function (currentToken) {
        if (currentToken) {
          sendTokenToServer(currentToken)
          updateUIForPushEnabled(currentToken)
        } else {
          // Show permission request.
          console.log('No Instance ID token available. Request permission to generate one.')
          // Show permission UI.
          updateUIForPushPermissionRequired()
          setTokenSentToServer(false)
        }
      })
      .catch(function (err) {
        console.log('An error occurred while retrieving token. ', err)
        showToken('Error retrieving Instance ID token. ', err)
        setTokenSentToServer(false)
      })
    }
  }
}
</script>

<template>
  <div>
    Firebase Test Componenet
    <button id="PushSubscribeButton" @click='userSubscribe()'>Subscribe</button>
  </div>
</template>

<style>
  
</style>