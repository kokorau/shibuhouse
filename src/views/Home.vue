<template>
  <div class="home">
    <AppMenu></AppMenu>
    <ImageLayout class="images" :images="images"> </ImageLayout>
  </div>
</template>

<script lang="ts">
import * as Contentful from "contentful";
import { Component, Vue } from "vue-property-decorator";
import ImageLayout from "@/components/ImageLayout.vue";
import AppMenu from "@/components/AppMenu.vue";

const client = Contentful.createClient({
  space: "3phzeo0bdyyi",
  accessToken:
    "7e7552e8f2ba5ffef4f7330770c26536069c5e86c7066dd3540ab71244cf1884"
});

@Component({
  components: {
    AppMenu,
    ImageLayout
  }
})
export default class Home extends Vue {
  images: any = [
    {
      src: "https://thispersondoesnotexist.com/image"
    }
  ];
  async mounted() {
    const imageRef = await client.getEntries({
      content_type: "home"
    });
    this.images = imageRef.items.map(i => ({
      // webpsrc: i.fields.image.fields.file.url,
      // @ts-ignore
      src: i.fields.image.fields.file.url
    }));
  }
}
</script>

<style scoped lang="sass"></style>
