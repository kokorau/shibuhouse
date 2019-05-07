<template>
  <div class="layout">
    <article class="image" v-for="img of images" :key="img.src">
      <PhotoCard :img="img"></PhotoCard>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PhotoCard from "@/components/PhotoCard.vue";

@Component({
  components: { PhotoCard },
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
.layout
  margin: 50px 0 0 250px
.image
  margin: 0 0 60px 0
</style>
