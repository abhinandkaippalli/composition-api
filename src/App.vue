<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav class="navbar bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">7 Wonders Of World</a>
    </div>
  </nav>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped></style>
