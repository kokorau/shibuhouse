<template>
  <div class="articles">
    <article class="card" v-for="img of images" :key="img.src" :to="img.to">
      <img class="img" :src="img.src" :alt="img.title" />
      <div class="info">
        <h2 class="title" v-if="img.title">{{ img.title }}</h2>
        <p class="description" v-if="img.text">{{ img.text }}</p>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface img {
  src: string;
  text?: string;
  title?: string;
  to?: string;
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
.card
  position: relative
  margin: 0 0 60px 0
.img
  max-width: 70vw
  max-height: 80vh
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
    padding: 15vh 38px 0 38px
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
