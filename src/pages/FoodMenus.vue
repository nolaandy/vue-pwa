<template>
  <div class="container single">
    <div class="posts">
      <article class="post">
        <h1 class="post-title">Menus</h1>
        <div class="post-meta">
          <span>this will show sub-routing for different menus.</span>
        </div>
        <div class="post-content">
          <ul>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Drinks</li>
            <li>Dessert</li>
          </ul>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    created () {
      document.title = 'Menus | Enjoy our Delicious Food'
    }
  }
</script>