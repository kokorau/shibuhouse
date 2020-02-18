<template>
  <div class="home">
    <AppMenu />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppMenu from '@/components/AppMenu.vue'
import client from '@/module/contentful'

interface Archive {
  title: string
  src: string
}

export default Vue.extend({
  components: {
    AppMenu
  },
  data(): {
    archives: Archive[]
  } {
    return {
      archives: []
    }
  },
  async mounted() {
    const archiveRef = await client.getEntries({
      content_type: 'archive',
      order: '-sys.createdAt'
    })
    this.archives = archiveRef.items.map(i => {
      console.log(i)
      return {
        // @ts-ignore
        title: i.fields.title,
        // @ts-ignore
        src: i.fields.heroImage.fields.file.url
      }
    })
  }
})
</script>

<style lang="postcss" module></style>
