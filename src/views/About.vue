<template>
  <div>
    <app-menu></app-menu>
    <article class="article">
      <h1 class="title">ABOUT</h1>
      <div class="content">
        <p style="font-size: 36px">
          SHIBUHOUSE is selling for 500,000,000 yen.
        </p>
        <p style="font-size: 18px">渋家、5億で販売中。</p>
      </div>
    </article>
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import AppMenu from "@/components/AppMenu.vue";

@Component({
  components: { AppMenu }
})
export default class About extends Vue {}
</script>

<style scoped lang="sass">
.article
  position: fixed
  bottom: 0
  right: 0
.title
  color: #151515
  font-size: 42px
  border-bottom: 8px solid #151515
  margin-bottom: 24px
.content
  margin: 0 80px 80px 0
.text
  font-size: 24px
.info
  font-size: 36px
  margin: 12px 0
</style>
