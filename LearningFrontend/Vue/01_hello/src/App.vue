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
    
    <h1>Conditional rendering</h1>
    Peterson showww <input type="checkbox" v-model="petersonVisibel" /><br/>
    <petterson v-if="petersonVisibel" />
    <p v-else>Peterson slepp :(</p>
    <!-- IF v-if and v-else share same components, use key if they shouldnt be reused -->
    
    <hr />
    <input type="checkbox" value="Jack" v-model="checkedNames" />
    <label>Jack</label>
    <input type="checkbox" value="Valkyrie" v-model="checkedNames" />
    <label>Valkyrie</label>
    <input type="checkbox" value="Aurora" v-model="checkedNames" />
    <label>Aurora</label>
    <p>Checked names: {{checkedNames}}</p>
    
    <hr />
    <ul>
        <note
          v-for="(note, idx) of notes"
          :text="note.text"
          :key="note.id"
          @input="note.text = $event"
          @delete="notes.splice(idx, 1)"
        />
    </ul>
    <button @click="createNewNote()">New Note</button>
    {{notes}}
    
    <hr />
    <button @click="showBigText = !showBigText">Show big text</button>
    <transition name="fade">
      <h1 v-show="showBigText">Big Text !!!</h1>
    </transition>
    
    <hr />
    User name: {{user.name}}<br/>
    User age: {{user.age}}<br />
    <button @click="user.age++">inc age</button>
    
  </div>
</template>

<script lang="ts">
import {v4 as uuid} from 'uuid'
import Vue from 'vue'
import Counter from './components/Counter.vue'
import Petterson from './components/Petterson.vue'
import Note from './components/Note.vue'

export default Vue.extend({
  name: 'App',
  components: { Counter, Petterson, Note },
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
      petersonVisibel: false,
      checkedNames: [],
      notes: [
        {id: uuid(), text: "Yes" },
        {id: uuid(), text: "No" },
      ],
      showBigText: false,
      user: {
        name: 'Seb',
        age: 19,
      },
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
    
    createNewNote() {
      this.notes.push({id: uuid(), text: ""})
    },
    
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
    },
    
    hello() {
      console.log("HELLO!")
    },
  
  },
  
  created() {
    console.log("App created!")
    console.log(this)
  },
  
  
})
</script>

<style>

body {
  background: #030304;
  color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50;*/
  margin-top: 60px;
  
  margin-bottom: 100px;
}

hr {
  margin-bottom: 16px;
  border: solid 1px rgba(0, 0, 0, 0.1);
}

button { margin: 3px; }
input { margin: 3px; }

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
