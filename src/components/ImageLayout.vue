<template>
  <div class="articles">
    <slot></slot>
    <article class="card" v-for="img of images" :key="img.src" :to="img.to">
      <div class="photo">
        <img class="img" v-lazy="img.src" :alt="img.title" />
        <div class="cover"></div>
      </div>
      <div class="info">
        <h2 class="title" v-if="img.title">{{ img.title }}</h2>
        <p class="description" v-if="img.text">{{ img.text }}</p>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

interface img {
  src: string
  text?: string
  title?: string
  to?: string
}

@Component({
  props: {
    images: {
      type: Array,
      required: true
    }
  }
})
export default class ImageLayout extends Vue {}
</script>

<style scoped lang="sass">
.articles
  padding: 15vh 0 0 20vw
  display: flex
  flex-flow: column
  justify-content: flex-start
  align-items: flex-start
.card
  margin-bottom: 60px
.photo
  position: relative
  overflow: hidden
.cover
  content: ''
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 2
.img
  visibility: hidden
.img[lazy="loaded"]
  visibility: visible
  animation: photo-keyframes 0.6s ease-in forwards
.img[lazy="loaded"]+.cover
  animation: cover-keyframes 0.6s ease-in forwards
@keyframes photo-keyframes
  0%
    visibility: hidden
  50%
    visibility: hidden
  51%
    visibility: visible
  100%
    visibility: visible
@keyframes cover-keyframes
  0%
    background: #151515
    transform-origin: left
    transform: scaleX(0)
  50%
    transform-origin: left
    transform: scaleX(1)
  51%
    transform-origin: right
  100%
    background: #151515
    transform-origin: right
    transform: scaleX(0)
.photo
  width: auto
  max-width: 70vw
  max-height: 90vh
  position: relative
/*  animation: img 1s ease-in forwards*/
/*  visibility: hidden*/
/*@keyframes img*/
/*  0%*/
/*    visibility: hidden*/
/*  50%*/
/*    visibility: hidden*/
/*  100%*/
/*    visibility: visible*/
.info
  position: absolute
  left: 20px
  bottom: 20px
  max-width: 70vw
  color: #151515
.title
  font-size: 48px
.description
  margin-top: 4px
  font-size: 24px
@media screen and (max-width: 480px)
  .articles
    padding: 15vh 26px 0 26px
  .card
    position: relative
    margin: 0 0 40px 0
    width: 100%
  .card:nth-child(2n)
    display: flex
    flex-flow: column
    justify-content: flex-start
    align-items: flex-end
  .info
    position: relative
    bottom: 0
    left: 0
  .img
    max-width: 70vw
    max-height: 40vh
</style>
