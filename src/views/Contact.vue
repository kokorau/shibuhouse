<template>
  <div>
    <app-menu></app-menu>
    <article class="article">
      <h1 class="title">CONTACT</h1>

      <form name="contact" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label for="contact-title"></label>
          <input name="title" type="text" id="contact-title" required />
        </div>
        <div>
          <label for="contact-name"></label>
          <input name="title" type="text" id="contact-name" required />
        </div>
        <div>
          <label for="contact-mail"></label>
          <input name="title" type="email" id="contact-mail" required />
        </div>
        <div>
          <label for="contact-text"></label>
          <input name="title" type="text" id="contact-text" required />
        </div>
        <button type="submit">submit</button>
      </form>

      <div class="paragraph">
        <p class="detail">
          If you want to get in touch or want to know more, please contact us.
        </p>

        <p class="detail">And, now we want you for a SHIBUHOUSE member!</p>
        <a href="mailto:shibuhouseinfo@gmail.com">
          <p class="text">shibuhouseinfo@gmail.com</p>
        </a>
      </div>

      <div class="paragraph">
        <p class="detail">CALL ME!! CALL ME!! CALL ME!! CALL ME!!</p>
        <a href="tel:080-3367-6582">
          <p class="text">080-3367-6582</p>
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
.detail
  font-size: 24px
.text
  font-size: 36px
  margin: 6px 0 22px
@media screen and (max-width: 480px)
  .article
    padding: 0 0 2vh 10vw
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
