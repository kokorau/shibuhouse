<template>
  <div>
    <app-menu></app-menu>
    <article class="article">
      <p style="font-size: 36px">SHIBUHOUSE is selling for 500,000,000 yen.</p>
      <p style="font-size: 18px">渋家、5億で販売中。</p>
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
  padding: 0 80px 80px 0
.text
  font-size: 24px
.info
  font-size: 36px
  margin: 12px 0
</style>
