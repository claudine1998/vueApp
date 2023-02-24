<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">CRUD Test Vue</router-link>
    </nav>

    <div class="mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
