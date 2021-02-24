<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    {{rtName}}<br/>
    Store {{$store.state}}<br />
    yesnotes: {{$store.getters.yesNotes}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  components: {},
  
  watch: {
    
  },
  
  computed: {
    rtName() {
      return this.$route.name;
    },
  },
});
</script>
