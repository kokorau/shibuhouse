<template>
  <nav class="nav" :class="{ active: width > 480 || isOpen }">
    <button class="toggle" @click="isOpen = !isOpen">
      <svg width="40" height="40">
        <rect x="5" y="8" width="30" height="8" fill="#151515"></rect>
        <rect x="5" y="24" width="30" height="8" fill="#151515"></rect>
      </svg>
    </button>
    <div class="page-links">
      <router-link :to="{ name: 'home' }">
        <img class="logo" src="@/assets/logo.svg" />
      </router-link>
      <router-link class="link" :to="{ name: 'about' }">ABOUT</router-link>
      <!--          <router-link class="link" :to="{ name: 'member' }"-->
      <!--            >MEMBER</router-link-->
      <!--          >-->
      <router-link class="link" :to="{ name: 'contact' }">CONTACT</router-link>
      <!--    <router-link class="nav-link" :to="{ name: 'event' }">EVENT</router-link>-->
    </div>
    <div class="outer-links">
      <a class="link" href="https://twitter.com/shibuhouse" target="_blank">TWITTER</a>
      <a class="link" href="https://www.instagram.com/shibuhouse_official/" target="_blank">INSTAGRAM</a>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({})
export default class AppMenu extends Vue {
  isOpen = false
  width = window.innerWidth
  mounted() {
    window.addEventListener('resize', this.updateWindow)
  }
  destoroyed() {
    window.removeEventListener('resize', this.updateWindow)
  }
  updateWindow() {
    this.width = window.innerWidth
  }
}
</script>

<style scoped lang="sass">
.page-links, .outer-links
  position: fixed
  z-index: 2
.page-links
  top: 80px
  left: 60px
.outer-links
  transform: rotate(270deg)
  top: 120px
  right: 4vw
  display: flex
  flex-flow: column
  justify-content: flex-end
  align-items: flex-start
.logo
  width: 180px
.link
  position: relative
.page-links .link
  font-size: 70px
  font-weight: bold
  margin: 20px 0 0 0
  position: relative
.menu
  display: flex
  flex-direction: column
  justify-content: flex-start
  align-items: flex-start
.toggle
  display: none
.outer-links > .link
  font-size: 28px
  margin-top: 20px
  position: relative
.toggle
  display: none
  background: none
  border: none
  position: fixed
  right: 30px
  top: 30px
  width: 60px
  height: 60px
  justify-content: center
  align-items: center
  padding: 0
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
  .menu, .outer-links
    display: none
  .nav.active > .menu,
  .nav.active > .outer-links
    display: flex
  .nav.active
    z-index: 2
    position: fixed
    width: 100vw
    height: 100vh
    background: #ddd
    display: flex
    justify-content: center
    align-items: center
    flex-flow: column
  .toggle
    display: flex
  .page-links
    top: 20px
    left: 20px
  .logo
    width: 80px
</style>
