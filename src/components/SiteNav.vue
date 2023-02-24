<template>
  <ul class="nav">
    <li class="nav-item" v-for="item in items" :key="item">
      <a class="nav-link" href="#">{{ item }}</a>
    </li>
  </ul>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
ul > li {
  border: solid 1px silver;
  margin-left: 2px;
  background: rgb(240, 240, 240);
}
</style>
