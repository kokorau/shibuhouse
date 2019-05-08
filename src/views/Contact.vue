<template>
  <div>
    <app-menu></app-menu>
    <article class="article">
      <p class="text">
        If you want to get in touch or want to know more, please contact us.
      </p>
      <a href="mailto:shibuhouseinfo@gmail.com">
        <p class="info">shibuhouseinfo@gmail.com</p>
      </a>
      <p class="text">CALL ME!! CALL ME!! CALL ME!! CALL ME!! CALL ME!!</p>
      <a href="tel:080-3367-6582">
        <p class="info">080-3367-6582</p>
      </a>
    </article>
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import AppMenu from "@/components/AppMenu.vue";

@Component({
  components: { AppMenu }
})
export default class Contact extends Vue {}
</script>

<style scoped lang="sass">
.article
  position: fixed
  bottom: 0
  right: 0
  padding: 0 80px 80px 0
.text
  font-size: 24px
.info
  font-size: 36px
  margin: 12px 0
</style>
