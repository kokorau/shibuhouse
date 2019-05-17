<template>
  <p class="text">
    <slot></slot>
  </p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({})
export default class BorderText extends Vue {}
</script>

<style scoped lang="sass">
.text
  position: relative
.text::before
  content: ''
  z-index: -1
  position: absolute
  bottom: 25%
  width: 0
  height: 20%
  background: #151515
  transition: 0.3s ease-out
.text:hover::before
  width: 100%
</style>
