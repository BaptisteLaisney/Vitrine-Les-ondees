<template>
  <div id="lesondees">
    <Menu />

    <router-view />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";

export default {
  components: {
    Menu,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

#lesondees {
  margin: auto;
}
</style>
