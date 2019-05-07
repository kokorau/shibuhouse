<template>
  <nav class="nav">
    <router-link :to="{ name: 'home' }">
      <img src="@/assets/logo.svg" width="180" />
    </router-link>
    <router-link class="nav-link" :to="{ name: 'about' }">ABOUT</router-link>
    <router-link class="nav-link" :to="{ name: 'member' }">MEMBER</router-link>
    <router-link class="nav-link" :to="{ name: 'contact' }"
      >CONTACT</router-link
    >
    <!--    <router-link class="nav-link" :to="{ name: 'event' }">EVENT</router-link>-->
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class AppMenu extends Vue {}
</script>

<style scoped lang="sass">
.nav
  position: fixed
  top: 80px
  left: 60px
  display: flex
  flex-direction: column
  justify-content: flex-start
  align-items: flex-start
  z-index: 2
.nav-link
  font-size: 70px
  font-weight: bold
  margin: 20px 0 0 0
  position: relative
.nav-link::before
  z-index: -1
  content: ''
  position: absolute
  bottom: 10px
  height: 16px
  background: #151515
  width: 0
  transition: 0.3s width
.nav-link:hover::before
  border-color: #151515
  width: 100%
</style>
