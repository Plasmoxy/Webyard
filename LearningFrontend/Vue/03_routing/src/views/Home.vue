<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    {{rtName}}<br/>
    Store {{$store.state}}<br />
    yesnotes: {{$store.getters.yesNotes}}
    
    <button @click="trow()">YESYES</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  components: {},
  
  
  
  methods: {
    trow() {
      throw new Error("YES")
    },
  },
  
  computed: {
    
    
    rtName() {
      return this.$route.name;
    },
  },
});
</script>
