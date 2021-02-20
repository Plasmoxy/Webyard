<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"><br/>
    <hr />
    
    <counter />
    <hr/>
    
    <!-- strongs ul -->
    <h4>Strongs:</h4>
    <ul>
      <li v-for="(x, idx) in strongs" :key="x">
      (index: {{idx}}) {{x}} 
      </li>
    </ul>
    <hr/>
    
    <!-- reversing -->
    <input type="text" v-model="message" /> <br/>
    <button @click="reverseMessage">Reverse</button> <br/>
    <button @click="addToStrongs">Add to strongs</button> <br/>
    <h2>Reversed: {{reversedMsg}}</h2>
    <hr/>
    
    <!-- kolorfule -->
    <span :style="kolorfulStyleData" @click="increaseKolorful">KOLORFUL</span><br/>
    <hr/>
    
    <h4>Object pront:</h4>
    <ul>
      <li v-for="(value, key) in object" :key="key">
        {{key}}: {{value}}  
      </li>
    </ul>
    <hr />
    
    <!-- petersonnen -->
    <h1>PETTERSONNEN !!!!</h1>
    <button @click="nummerOfPetersons++">MORE PETERSONSNS</button>
    <div style="text-align: center;">
      <petterson v-for="n in nummerOfPetersons" :key="n" />
    </div>
    <hr />
    
    
       
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue'
import Petterson from './components/Petterson.vue'

export default {
  name: 'App',
  components: {
    Counter,
    Petterson
  },
  
  data() {
    return {
      strongs: [
        "Yes", "No", "mejbi", "yosh", "ananas"
      ],
      message: "",
      kolorfulStyleData: {
        color: 'red',
        fontSize: '2rem',
        cursor: 'pointer',
        userSelect: 'none',
      },
      object: {
        name: 'yes',
        password: 'secretttt',
        age: 18,
      },
      nummerOfPetersons: 3,
    }
  },
  
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
    },
    
    addToStrongs() {
      if (this.strongs.includes(this.message)) {
        alert('Strong is already in strongs xdd')
        return
      }
      this.strongs.push(this.message)
      this.message = ''
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

button { margin: 3px; }
input { margin: 3px; }

</style>
