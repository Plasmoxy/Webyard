<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"><br/>
    <counter />
    
    <!-- ul -->
    <ul>
      <li v-for="x in strongs" v-bind:key="x">
        {{x}}  
      </li>
    </ul>
    
    <input type="text" v-model="message" /> <br/>
    <button v-on:click="reverseMessage">Reverse</button>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    Counter
  },
  
  data: () => ({
    strongs: [
      "Yes", "No", "mejbi", "yosh", "ananas"
    ],
    message: ""
  }),
  
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
