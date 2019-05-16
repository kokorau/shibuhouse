<template>
  <div>
    <form name="contact" method="POST" netlify>
      <p>
        <label>Name <input type="text" name="name"/></label>
      </p>
      <p>
        <label>Text <input type="text" name="text"/></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Contact extends Vue {}
</script>

<style scoped lang="sass"></style>
