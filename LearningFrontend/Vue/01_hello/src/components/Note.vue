<template>
  <transition appear>
    <li>
      <input type="text" :value="text" @input="$emit('input', $event.target.value)" />
      <button @click="$emit('delete')">X</button>
    </li>
  </transition>
</template>

<script>
export default {
  
  props: {
    text: String,
  }
  
}
</script>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}

.v-enter, .v-leave-to {
  opacity: 0;
}
</style>