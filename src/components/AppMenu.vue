<template>
  <div>
    <nav class="nav">
      <div class="page-links">
        <router-link :to="{ name: 'home' }">
          <img class="logo" src="@/assets/logo.svg" />
        </router-link>
        <router-link class="link" :to="{ name: 'about' }">ABOUT</router-link>
        <router-link class="link" :to="{ name: 'member' }">MEMBER</router-link>
        <router-link class="link" :to="{ name: 'contact' }"
          >CONTACT</router-link
        >
        <!--    <router-link class="nav-link" :to="{ name: 'event' }">EVENT</router-link>-->
      </div>

      <div class="outer-links">
        <a class="link" href="https://twitter.com/shibuhouse" target="_blank"
          >TWITTER</a
        >
        <a
          class="link"
          href="https://www.instagram.com/shibuhouse_official/"
          target="_blank"
          >INSTAGRAM</a
        >
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class AppMenu extends Vue {}
</script>

<style scoped lang="sass">
.page-links, .outer-links
  position: fixed
  z-index: 2
.page-links
  top: 80px
  left: 60px
  display: flex
  flex-direction: column
  justify-content: flex-start
  align-items: flex-start
.outer-links
  transform: rotate(270deg)
  top: 120px
  right: 60px
  display: flex
  flex-flow: column
  justify-content: flex-end
  align-items: flex-start
.logo
  width: 180px
.link
  position: relative
.page-links > .link
  font-size: 70px
  font-weight: bold
  margin: 20px 0 0 0
  position: relative
.outer-links > .link
  font-size: 28px
  margin-top: 20px
  position: relative
.link::before
  content: ''
  z-index: -1
  position: absolute
  bottom: 10%
  right: 0
  width: 0
  height: 20%
  background: #151515
  transition: 0.3s ease-out
.link:hover::before
  width: 100%
@media screen and (max-width: 480px)
  .nav
    display: none
</style>
