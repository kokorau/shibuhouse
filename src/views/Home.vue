<template>
  <div class="home">
    <AppMenu />
    <ImageLayout class="images" :images="images" />
  </div>
</template>

<script lang="ts">
import * as Contentful from 'contentful'
import { Component, Vue } from 'vue-property-decorator'
import ImageLayout from '@/components/ImageLayout.vue'
import AppMenu from '@/components/AppMenu.vue'

const client = Contentful.createClient({
  space: '3phzeo0bdyyi',
  accessToken: '7e7552e8f2ba5ffef4f7330770c26536069c5e86c7066dd3540ab71244cf1884'
})

@Component({
  components: {
    AppMenu,
    ImageLayout
  }
})
export default class Home extends Vue {
  images: any = [
    {
      src: 'https://thispersondoesnotexist.com/image'
    }
  ]
  async mounted() {
    const imageRef = await client.getEntries({
      content_type: 'home',
      order: '-sys.createdAt'
    })
    this.images = imageRef.items.map(i => ({
      // @ts-ignore
      src: i.fields.image.fields.file.url
    }))
  }
}
</script>

<style scoped lang="sass">
@media screen and (max-width: 480px)
  .home::after
    content: 'SHIBUHOUSE'
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    z-index: 100
    text-align: center
    font-size: 10vh
    color: transparent
    background: linear-gradient(3deg, #151515, #151515 47%, transparent 48%, transparent 52%, #151515 53%, #151515)
    -webkit-background-clip: text
</style>
