<template>
  <div>
    <app-menu></app-menu>
    <article class="article">
      <h1 class="title">CONTACT</h1>

      <div class="body">
        <div class="paragraph">
          <p class="detail">
            If you want to get in touch or want to know more, please contact us.
          </p>
          <p class="detail">And, now we want you for a SHIBUHOUSE member!</p>
          <a href="mailto:shibuhouseinfo@gmail.com">
            <p class="text">shibuhouseinfo@gmail.com</p>
          </a>
          <p class="detail">CALL ME!! CALL ME!! CALL ME!! CALL ME!!</p>
          <a href="tel:080-3367-6582">
            <p class="text">080-3367-6582</p>
          </a>
        </div>

        <contact-form class="form"></contact-form>
      </div>
    </article>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import AppMenu from '@/components/AppMenu.vue'
import ContactForm from '../components/ContactForm'

@Component({
  components: { ContactForm, AppMenu }
})
export default class Contact extends Vue {}
</script>

<style scoped lang="sass">
.article
  display: flex
  flex-flow: column
  justify-content: flex-start
  align-items: stretch
  position: fixed
  bottom: 0
  right: 0
  width: 80vw
  margin-bottom: 4vh
  box-sizing: border-box
.title
  color: #151515
  font-size: 42px
  border-bottom: 8px solid #151515
  margin-bottom: 24px
  padding-left: 12px
.body
  padding: 0 8px
.paragraph
  display: flex
  flex-flow: column
  justify-content: flex-start
  align-items: flex-start
.detail
  font-size: 24px
.text
  font-size: 36px
  margin: 6px 0 22px
.form
  margin: 10px 0
@media screen and (max-width: 480px)
  .article
    padding: 0
    width: 100%
  .article:not(:first-child)
    padding: 0 10px
  .title
    font-size: 30px
    margin-bottom: 18px
    border-bottom: 6px solid #151515
  .detail
    font-size: 16px
  .text
    font-size: 22px
    margin: 6px 0 18px
@media screen and (min-width: 481px) and (max-width: 768px)
  .article
    width: 90vw
  .title
    font-size: 36px
    margin-bottom: 18px
    border-bottom: 6px solid #151515
  .detail
    font-size: 18px
  .text
    font-size: 32px
    margin: 6px 0 18px
</style>
