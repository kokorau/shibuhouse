<template>
  <div class="card" :to="img.to">
    <img class="img" :src="img.src" :alt="img.title" />
    <div class="info">
      <p class="text title" v-if="img.title">{{ img.title }}</p>
      <p class="text description" v-if="img.text"></p>
    </div>
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
    img: {
      required: true,
      type: Object
    }
  }
})
export default class PhotoCard extends Vue {}
</script>

<style scoped lang="sass">
.card
  position: relative
.img
  max-width: 70vw
  max-height: 80vh
.info
  position: absolute
  left: 10px
  bottom: 10px
</style>
