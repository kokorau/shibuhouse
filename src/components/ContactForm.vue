<template>
  <form name="contact">
    <input type="hidden" name="form-name" value="contact" />
    <div>
      <label for="contact-name">NAME</label>
      <input v-model="form.name" name="name" type="text" id="contact-name" required />
    </div>
    <div>
      <label for="contact-mail">MAIL</label>
      <input v-model="form.title" name="title" type="email" id="contact-mail" required />
    </div>
    <div>
      <label for="contact-text">TEXT</label>
      <input v-model="form.text" name="text" type="text" id="contact-text" required />
    </div>
    <button type="submit">SUBMIT</button>
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

<style></style>
