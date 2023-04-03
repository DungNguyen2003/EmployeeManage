<template>
  <div class="container">
    <TheMenu></TheMenu>
    <TheHeader></TheHeader>
    <TheMain></TheMain>
  </div>
</template>

<script>
import TheHeader from "./layout/TheHeader.vue";
import TheMain from "./layout/TheMain.vue";
import TheMenu from "./layout/TheMenu.vue";
export default {
  name: "App",
  components: { TheHeader, TheMain, TheMenu },
};
</script>

<style>
@import url(./css/main.css);
</style>
