<template>
  <div class="home">
    <AppMenu />
    <h1>ARCHIVE</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppMenu from '@/components/AppMenu.vue'
import client from '@/module/contentful'

interface Archive {}

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
      contentType: 'archive',
      order: '-sys.createdAt'
    })
    this.archives = archiveRef.items
  }
})
</script>

<style lang="postcss" module></style>
