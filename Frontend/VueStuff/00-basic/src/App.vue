<template>
  <div id="app">
    <HelloWorld msg="Welcome tojs App xd kys mikiasdasd" />
    <h1>ff = {{ faggot }}</h1>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data: () => ({
    faggot: "KYS FAGGOTsd"
  })
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
