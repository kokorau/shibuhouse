<template>
  <div>
    <app-menu></app-menu>
    <article class="article">
      <h1 class="title">CONTACT</h1>

      <div class="paragraph">
        <p class="text">
          If you want to get in touch or want to know more, please contact us.
        </p>

        <p class="text">And, we want you for SHIBUHOUSE member!</p>
        <a href="mailto:shibuhouseinfo@gmail.com">
          <p class="info">shibuhouseinfo@gmail.com</p>
        </a>
      </div>

      <div class="paragraph">
        <p class="text">CALL ME!! CALL ME!! CALL ME!! CALL ME!! CALL ME!!</p>
        <a href="tel:080-3367-6582">
          <p class="info">080-3367-6582</p>
        </a>
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
export default class Contact extends Vue {}
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
.text
  font-size: 24px
.info
  font-size: 36px
  margin: 6px 0 22px
</style>
