<template>
  <div class="member">
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
export default class Member extends Vue {
  // TODO: TYPE
  images = [
    {
      src: require("@/assets/img11.jpg"),
      title: "chiriro",
      text: "performer"
    },
    {
      src: require("@/assets/img1.jpg"),
      title: "shimo",
      text: "LAWSON PERSON"
    },
    {
      src: require("@/assets/img4.jpg"),
      title: "Mr.Sugawara",
      text: "??????????"
    },
    {
      src: require("@/assets/img8.jpg"),
      title: "Reiki no TOMODACHI",
      text: "Happy Boy"
    }
  ];
}
</script>

<style scoped lang="sass"></style>
