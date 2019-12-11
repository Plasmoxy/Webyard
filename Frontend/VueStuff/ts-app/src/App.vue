<template>
  <div id="app">
    AH YES
    <Kys vue:dog="yes"></Kys>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Kys from './components/Kys.vue';

@Component({
  components: {
    HelloWorld, Kys
  },
})
export default class App extends Vue {

  

}
</script>

<style>
#app_bk {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
