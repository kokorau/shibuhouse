<template>
  <div :class="$style.home">
    <AppMenu />
    <ul :class="$style.links">
      <li :class="$style.link">
        <router-link :to="{ name: 'archive_detail', params: { slug: 'hand-to-mouth' } }">Hand To Mouth</router-link>
      </li>
    </ul>
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
        slug: i.fields.slug,
        // @ts-ignore
        src: i.fields.heroImage.fields.file.url
      }
    })
  }
})
</script>

<style lang="postcss" module>
/* XXX */
.home {
}
.links {
  position: absolute;
  left: 50%;
  top: 50%;
}
.link {
}
</style>
