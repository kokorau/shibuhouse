<template>
  <nav class="nav" :class="{ active: width > 480 || isOpen }">
    <menu-toggle @click="isOpen = !isOpen" :isOpen="isOpen || width <= 480"></menu-toggle>
    <!-- MAIN MENU -->
    <div class="page-links">
      <router-link :to="{ name: 'home' }">
        <img class="logo" src="@/assets/logo.svg" />
      </router-link>
      <div class="menu">
        <router-link class="link" :to="{ name: 'about' }">
          <border-text>ABOUT</border-text>
        </router-link>
        <router-link class="link" :to="{ name: 'contact' }">
          <border-text>CONTACT</border-text>
        </router-link>
      </div>
    </div>
    <!-- SNS -->
    <div class="outer-links">
      <div class="menu">
        <a class="link" href="https://twitter.com/shibuhouse" target="_blank">
          <border-text>TWITTER</border-text>
        </a>
        <a class="link" href="https://www.instagram.com/shibuhouse_official/" target="_blank">
          <border-text>INSTAGRAM</border-text>
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BorderText from '@/components/BorderText.vue'
import MenuToggle from '@/components/MenuToggle.vue'
@Component({
  components: { MenuToggle, BorderText }
})
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
.nav
  position: fixed
  z-index: var(--z-nav)
.page-links,
.outer-links,
.menu
  display: flex
  flex-flow: column
  justify-content: flex-start
  align-items: flex-start
.logo
  width: 180px
.page-links
  position: fixed
  top: 0
  left: 0
  margin: 10vh 0 0 3vw
.outer-links
  position: fixed
  top: 0
  right: 0
  margin: 10vh 6vw 0 0
.page-links > .menu
  margin: 10% 0 0 0
.outer-links > .menu
  transform-origin: right bottom
  transform: translateY(-100%) rotate(-90deg)
.page-links .link
  font-size: 70px
  margin-bottom: 20px
.outer-links .link
  font-size: 28px
  margin-bottom: 14px
@media screen and (max-width: 480px)
  .page-links
    position: relative
  .outer-links
    top: auto
    bottom: 0
    margin: 0 8vw 4vh 0
  .outer-links > .menu
    transform-origin: right top
    transform: translateY(100%) rotate(90deg)
  .link:not(.logo)
    display: none
  .page-links
    margin: 20px 0 0 20px
  .page-links > .menu
    margin: 40px 0 0 0
  .menu > .link
    margin-bottom: 20px
  .logo
    width: 80px
  .toggle
    display: block
  .nav.active
    position: fixed
    top: 0
    right: 0
    width: 100vw
    height: 100vh
    background: #d5d5d5
  .nav.active .link
    display: flex
@media screen and (min-width: 481px) and (max-width: 768px)
  .logo
    width: 140px
  .page-links .link
    font-size: 54px
</style>
