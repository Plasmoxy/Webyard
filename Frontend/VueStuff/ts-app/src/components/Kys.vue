<template>
  <h1>YOU FAGGOT, AND I DOND {{dog}}</h1>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class extends Vue {
    @Prop() public dog: string = ""
}
</script>

<style>

</style>