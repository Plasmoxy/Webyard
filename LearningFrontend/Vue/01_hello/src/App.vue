<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"><br/>
    <hr />
    
    <counter />
    <hr/>
    
    <!-- strongs ul -->
    <ul>
      <li v-for="x in strongs" :key="x">
        {{x}}  
      </li>
    </ul>
    <hr/>
    
    <!-- reversing -->
    <input type="text" v-model="message" /> <br/>
    <button @click="reverseMessage">Reverse</button>
    <h2>Reversed: {{reversedMsg}}</h2>
    <hr/>
    
    <!-- kolorfule -->
    <span :style="kolorfulStyleData" @click="increaseKolorful">KOLORFUL</span><br/>
    <hr/>
    
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue'

export default {
  name: 'App',
  components: {
    Counter
  },
  
  data: () => ({
    strongs: [
      "Yes", "No", "mejbi", "yosh", "ananas"
    ],
    message: "",
    kolorfulStyleData: {
      color: 'red',
      fontSize: '2rem',
      cursor: 'pointer',
      userSelect: 'none',
    }
  }),
  
  computed: {
    reversedMsg() {
      return this.message.split('').reverse().join('')
    },
    
    // unused
    kolorfulStyle() {
      return {
        color: 'red',
        fontSize: '2rem'
      }
    }
  },
  
  methods: {
    reverseMessage() {
      this.message = this.reversedMsg
    },
    
    increaseKolorful() {
      this.kolorfulStyleData.fontSize = '' + (parseInt(this.kolorfulStyleData.fontSize)+1) + 'rem'
    }
  },
  
  created() {
    console.log("App created!")
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
  
  margin-bottom: 100px;
}

hr {
  margin-bottom: 16px;
  border: solid 1px rgba(0, 0, 0, 0.1);
}
</style>
