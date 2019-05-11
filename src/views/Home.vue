<template>
  <div class="home">
    <AppMenu></AppMenu>
    <ImageLayout class="images" :images="images"> </ImageLayout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ImageLayout from "@/components/ImageLayout.vue";
import AppMenu from "@/components/AppMenu.vue";

@Component({
  components: {
    AppMenu,
    ImageLayout
  }
})
export default class Home extends Vue {
  // TODO: TYPE
  images = [
    // {
    //   src: require("@/assets/img1.jpg")
    // },
    {
      src: require("@/assets/img2.jpg")
    },
    {
      src: require("@/assets/img3.jpg")
    },
    // {
    //   src: require("@/assets/img4.jpg")
    // },
    {
      src: require("@/assets/img5.jpg")
    },
    {
      src: require("@/assets/img6.jpg")
    },
    {
      src: require("@/assets/img7.jpg")
    },
    // {
    //   src: require("@/assets/img8.jpg")
    // },
    {
      src: require("@/assets/img9.jpg")
    },
    {
      src: require("@/assets/img10.jpg")
    }
    // {
    //   src: require("@/assets/img11.jpg")
    // }
  ];
  init() {}
}
</script>

<style scoped lang="sass"></style>
