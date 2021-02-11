<template>
  <button v-if="visible" v-on:click="count++">Count: {{count}}</button>
</template>

<script>
export default {
  data: () => ({
    count: 0,
    visible: true
  })
}
</script>

<style>
</style>