<template>
  <div>
    <app-menu></app-menu>
    <article class="article">
      <h1 class="title">ABOUT</h1>
      <div class="paragraph">
        <p class="text">
          SHIBUHOUSE is selling for 500,000,000 yen.
        </p>
        <p class="ruby">渋家、5億で販売中。</p>
      </div>
    </article>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'
import AppMenu from '@/components/AppMenu.vue'

@Component({
  components: { AppMenu }
})
export default class About extends Vue {}
</script>

<style scoped lang="sass">
.article
  position: fixed
  bottom: 0
  width: 100%
  padding: 0 0 4vh 20vw
  box-sizing: border-box
.title
  color: #151515
  font-size: 42px
  border-bottom: 8px solid #151515
  margin-bottom: 24px
  padding-left: 12px
.paragraph
  padding-left: 8px
.text
  font-size: 24px
.info
  font-size: 36px
  margin: 6px 0 22px
@media screen and (max-width: 480px)
  .article
    padding: 0 0 4vh 10vw
  .title
    font-size: 30px
    margin-bottom: 18px
    border-bottom: 6px solid #151515
  .text
    font-size: 22px
    margin-bottom: 4px
  .ruby
    font-size: 16px
@media screen and (min-width: 481px) and (max-width: 768px)
  .title
    font-size: 36px
    margin-bottom: 18px
    border-bottom: 6px solid #151515
  .text
    font-size: 24px
  .ruby
    font-size: 18px
</style>
