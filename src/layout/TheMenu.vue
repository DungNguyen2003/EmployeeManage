<template>
  <menu id="menu">
    <HeaderMenu></HeaderMenu>
    <BodyMenu></BodyMenu>
  </menu>
</template>

<script>
import HeaderMenu from "../components/Mheadermenu/HeaderMenu.vue";
import BodyMenu from "../components/Mbodymenu/BodyMenu.vue";

export default {
  name: "TheMenu",
  components: {
    HeaderMenu,
    BodyMenu,
  },
};
</script>

<style scoped></style>
