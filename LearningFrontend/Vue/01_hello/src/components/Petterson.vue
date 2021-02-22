<template>
  <span>
    <img src="https://pbs.twimg.com/media/C27JpJvWQAA07y-?format=jpg&name=900x900" />
    {{title}}
  </span>
</template>

<script>
export default {
  props: {
    title: {type: String},
  }
}
</script>

<style scoped>
img {
  width: 70px;
  height: 70px;
  margin: 3px;
  border-radius: 10px;
}
</style>