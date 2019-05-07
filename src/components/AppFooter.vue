<template>
  <nav class="footer">
    <a class="link" href="https://twitter.com/shibuhouse" target="_blank"
      >TWITTER</a
    >
    <a
      class="link"
      href="https://www.instagram.com/shibuhouse_official/"
      target="_blank"
      >INSTAGRAM</a
    >
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class AppFooter extends Vue {}
</script>

<style scoped lang="sass">
.footer
  transform: rotate(270deg)
  position: fixed
  top: 120px
  right: 60px
  display: flex
  flex-flow: column
  justify-content: flex-end
  align-items: flex-start
.link
  font-size: 28px
  margin-top: 20px
  position: relative
.link::before
  z-index: -1
  content: ''
  position: absolute
  bottom: 5px
  height: 6px
  background: transparent
  width: 0
  transition: 0.3s width
.link:hover::before
  background: #151515
  width: 100%
</style>
