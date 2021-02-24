<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <div>
      Route: {{$route.name}}
    </div>
    <button @click="increment()">Increment</button>
    <button @click="incrementDelay({delay: 2000})">Increment delay</button>
    
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
export default Vue.extend({
  
  methods: {
    ...mapActions(['incrementDelay', 'increment']),
    
  },
  
  errorCaptured(err, vm, info) {
    console.log("EROR")
    console.log(err)
    return false
  },
  
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
