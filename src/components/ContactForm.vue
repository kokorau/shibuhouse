<template>
  <form name="contact" @submit="handleSubmit">
    <input type="hidden" name="form-name" value="contact" />
    <div class="input-group">
      <input class="input" v-model="form.name" name="name" type="text" id="contact-name" placeholder=" " required />
      <label class="label" for="contact-name">NAME</label>
    </div>
    <div class="input-group">
      <input class="input" v-model="form.title" name="title" type="email" id="contact-mail" placeholder=" " required />
      <label class="label" for="contact-mail">MAIL</label>
    </div>
    <div class="input-group">
      <input
        class="input textarea"
        v-model="form.text"
        name="text"
        type="text"
        id="contact-text"
        placeholder=" "
        required
      />
      <label class="label" for="contact-text">TEXT</label>
    </div>
    <button class="button" type="submit">SUBMIT</button>
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
.input-group
  position: relative
  margin-bottom: 20px
.input
  font-family : inherit
  appearance: none
  background: #bbb
  border: none
  padding: 16px 6px 6px 6px
  height: 20px
.label
  position: absolute
  display: block
  height: 20px
  margin-left: 10px
  top: 55%
  -webkit-transform: translate(0, -50%)
  transition: 0.08s ease-out
.input:focus + .label,
.input:not(:placeholder-shown) + .label
  top: 0
  -webkit-transform: translate(0, -50%)
.button
  font-family: inherit
  border: none
  background: none
  padding: 0
  display: flex
  flex-direction: row
  border-bottom: 4px solid #151515
.button::after
  content: '→'
  display: block
  animation: heartbeat 1.2s infinite
@keyframes heartbeat
  0%
    transform: translate(0)
  15%
    transform: translate(4px)
  30%
    transform: translate(0)
  45%
    transform: translate(4px)
  60%
    transform: translate(0)
  100%
    transform: translate(0)
</style>
