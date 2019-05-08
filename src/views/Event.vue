<template>
  <div class="home">
    <AppMenu></AppMenu>
    <ImageLayout :images="images"></ImageLayout>
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
export default class Event extends Vue {
  // TODO: TYPE
  images = [
    {
      src: require("@/assets/event/img5.jpg"),
      title: "KUNUGI potentials REIWA TO HEISEI"
    }
  ];
  init() {}
}
</script>
