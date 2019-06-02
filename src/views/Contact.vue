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

        <form class="form success" :class="[formCondition]" name="contact" @submit.prevent="onSubmit">
          <input type="hidden" name="form-name" value="contact" />
          <div class="input-group name">
            <input class="input" name="name" type="text" id="contact-name" placeholder=" " required v-model="name" />
            <label class="label" for="contact-name">NAME</label>
          </div>
          <div class="input-group mail">
            <input class="input" name="mail" type="email" id="contact-mail" placeholder=" " required v-model="mail" />
            <label class="label" for="contact-mail">MAIL</label>
          </div>
          <div class="input-group form-text">
            <textarea class="textarea" name="text" id="contact-text" placeholder=" " required v-model="text"></textarea>
            <label class="label" for="contact-text">TEXT</label>
          </div>
          <div class="submit">
            <button class="button" type="submit">
              {{
                formCondition === 'sending'
                  ? ''
                  : formCondition === 'success'
                  ? 'SUCCESS'
                  : formCondition === 'failed'
                  ? 'FAILED'
                  : 'SUBMIT'
              }}
            </button>
          </div>
        </form>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { Component, Vue } from 'vue-property-decorator'
import AppMenu from '@/components/AppMenu.vue'

@Component({
  components: { AppMenu }
})
export default class Contact extends Vue {
  private name: string = ''
  private mail: string = ''
  private text: string = ''
  private formCondition: string = 'waiting'
  async onSubmit() {
    this.formCondition = 'sending'
    const params = new URLSearchParams()
    params.append('form-name', 'contact')
    params.append('name', this.name)
    params.append('mail', this.mail)
    params.append('text', this.text)
    try {
      await axios.post('/', params)
      console.log('form: success')
      this.name = ''
      this.mail = ''
      this.text = ''
      this.formCondition = 'success'
    } catch (e) {
      console.log('form: error')
      this.formCondition = 'failed'
    }
  }
}
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
  width: 700px
  display: grid
  grid-template-columns: 1fr 1fr
  grid-auto-rows: auto auto auto
  grid-template-areas: "name mail" "text text" "submit submit"
  gap: 8px
.input-group
  position: relative
input, textarea, button
  margin: 0
  padding: 0
  background: none
  border: none
  border-radius: 0
  outline: none
  appearance: none
  box-sizing: border-box
  font-family: 'Noto Sans JP', sans-serif
  font-weight: 400
.input,
.textarea
  height: 40px
  width: 100%
  background: #eeeeee
.name
  grid-area: name
.mail
  grid-area: mail
.input
  padding: 0 10px
.form-text
  grid-area: text
.textarea
  transition: 0.2s ease-out
  padding: 15px 10px
  resize: none
  overflow: hidden
  height: 40px
  min-height: 40px
  max-height: 300px
.textarea:focus,
.textarea:not(:placeholder-shown)
  height: 120px
  resize: vertical
.label
  position: absolute
  margin-left: 10px
  top: 20px
  left: 0
  transform: translate(0, -50%)
  transition: 0.1s ease-out
  font-size: 18px
.input:focus + .label,
.textarea:focus + .label,
.input:not(:placeholder-shown) + .label,
.textarea:not(:placeholder-shown) + .label
  transform: translate(0, -50%)
  top: 0
  font-size: 14px
.submit
  grid-area: submit
  display: flex
  flex-flow: row
  justify-content: flex-end
  align-items: center
.button
  font-size: 18px
  font-weight: bold
  transition: 0.1s ease-out
  background: #d5d5d5
  border: 2px solid #151515
  color: #151515
  padding: 3px 6px
  width: 144px
.button:hover
  background: #151515
  color: #d5d5d5
.form.sending .button
  $color: #151515
  animation: stripes-move 5s infinite linear
  background: repeating-linear-gradient(45deg, $color 0, $color 0.25em, transparent 0.25em, transparent .5em)
  color: adjust-hue($color,180)
.form.success .button
  content: 'SUCCESS'
@keyframes stripes-move
  100%
    background-position: 5em 0px
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
  .form
    width: 100%
    grid-template-columns: 1fr
    grid-auto-rows: auto
    grid-template-areas: "name" "mail" "text" "submit"
    gap: 8px
  .input
    height: 30px
  .label
    top: 15px
    font-size: 16px
  .textarea
    height: 60px
    min-height: 70px
    max-height: 300px
  .button
    font-size: 12px
    padding: 3px 6px
    width: 72px
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
  .form
    width: 80vw
  .textarea:focus,
  .textarea:not(:placeholder-shown)
    height: 200px
</style>
