<template>
  <div class="member">
    <AppMenu></AppMenu>
    <ImageLayout :images="images"></ImageLayout>
    <AppFooter></AppFooter>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ImageLayout from "@/components/ImageLayout.vue";
import AppMenu from "@/components/AppMenu.vue";
import AppFooter from "@/components/AppFooter.vue";

@Component({
  components: {
    AppFooter,
    AppMenu,
    ImageLayout
  }
})
export default class Member extends Vue {
  // TODO: TYPE
  images = [
    {
      src: require("@/assets/img1.jpg")
    },
    {
      src: require("@/assets/img4.jpg")
    },
    {
      src: require("@/assets/img8.jpg")
    }
  ];
}
</script>
