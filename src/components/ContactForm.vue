<template>
  <form class="form" name="contact" @submit="handleSubmit">
    <input type="hidden" name="form-name" value="contact" />
    <div class="input-group name">
      <input class="input" v-model="form.name" name="name" type="text" id="contact-name" placeholder=" " required />
      <label class="label" for="contact-name">NAME</label>
    </div>
    <div class="input-group mail">
      <input class="input" v-model="form.title" name="title" type="email" id="contact-mail" placeholder=" " required />
      <label class="label" for="contact-mail">MAIL</label>
    </div>
    <div class="input-group text">
      <textarea class="textarea" v-model="form.text" name="text" id="contact-text" placeholder=" " required></textarea>
      <label class="label" for="contact-text">TEXT</label>
    </div>
    <div class="submit">
      <button class="button" type="submit">SUBMIT</button>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component({})
export default class ContactForm extends Vue {
  form = {
    name: '',
    mail: '',
    text: ''
  }
  encode(data) {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&')
  }
  handleSubmit() {
    console.log('aaa')
    axios
      .create({
        baseURL: 'https://shibuhouse.com',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .post(
        '/',
        this.encode({
          'form-name': 'contact',
          ...this.form
        })
      )
  }
}
</script>

<style lang="sass" scoped>
.form
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
.text
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
.button:hover
  background: #151515
  color: #d5d5d5
@media screen and (max-width: 480px)
  .form
    width: 100%
    grid-template-columns: 1fr
    grid-auto-rows: auto
    grid-template-areas: "name" "mail" "text" "submit"
    gap: 8px
  .textarea
    height: 70px
    min-height: 70px
    max-height: 300px
@media screen and (min-width: 481px) and (max-width: 768px)
  .form
    width: 80vw
  .textarea:focus,
  .textarea:not(:placeholder-shown)
    height: 200px
</style>
