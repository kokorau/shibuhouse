<template>
  <form name="contact" netlify>
    <input type="hidden" name="form-name" value="contact" />
    <div>
      <label for="contact-name">NAME</label>
      <input name="name" type="text" id="contact-name" required />
    </div>
    <div>
      <label for="contact-mail">MAIL</label>
      <input name="title" type="email" id="contact-mail" required />
    </div>
    <div>
      <label for="contact-text">TEXT</label>
      <input name="text" type="text" id="contact-text" required />
    </div>
    <button type="submit">submit</button>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class ContactForm extends Vue {}
</script>

<style></style>
