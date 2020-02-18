<template>
  <div :class="$style.page">
    <app-menu />
    <article :class="$style.article">
      <div :class="$style.fixed">
        <h1 :class="$style.title">{{ title }}</h1>
        <div v-html="summary" :class="$style.summary"></div>
      </div>
      <div v-html="body" :class="$style.body"></div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppMenu from '@/components/AppMenu.vue'
import client from '@/module/contentful'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

interface Archive {}

export default Vue.extend({
  data(): {
    archive: Archive
    title: string
    summary: string
    body: string
    date: string
  } {
    return {
      archive: null,
      title: null,
      summary: null,
      body: null,
      date: null
    }
  },
  components: {
    AppMenu
  },
  async mounted() {
    const archiveRef = await client.getEntries({
      content_type: 'archive',
      'fields.slug': this.$route.params.slug
    })
    this.archive = archiveRef.items[0].fields
    this.title = archiveRef.items[0].fields.title
    this.date = archiveRef.items[0].fields.date
    this.body = this.toHtmlString(archiveRef.items[0].fields.body)
    this.summary = this.toHtmlString(archiveRef.items[0].fields.summary)
  },
  methods: {
    toHtmlString(s): string {
      const options = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: ({
            data: {
              target: { fields }
            }
          }) => `<img src="${fields.file.url}"/>`
        }
      }
      // @ts-ignore
      return documentToHtmlString(s, options)
    }
  }
})
</script>

<style lang="postcss" module>
.article {
  position: absolute;
  width: 40vw;
  right: 18vw;
}
.fixed {
  position: fixed;
  left: 0;
  bottom: 6vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: end;
  align-items: start;
}
.title {
  font-size: 50px;
  line-height: 66px;
  padding-left: 3vw;
  width: 100%;
  border-bottom: 10px #222 solid;
}
.body {
  position: relative;
  z-index: 2;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: start;
  margin-top: 100px;
}
.summary {
  padding-left: 3vw;
  margin-top: 12px;
  line-height: 1.4;
}
.summary b,
.body b {
  font-weight: 900;
}
.summary p,
.body p {
  font-weight: 300;
  margin-top: 12px;
}
.body img {
  width: 45vw;
  margin-top: 60px;
}
</style>
