<template>
  <button class="toggle" @click="$emit('click')">
    <svg width="40" height="40">
      <rect x="5" y="8" width="30" height="8" fill="#151515"></rect>
      <rect x="5" y="24" width="30" height="8" fill="#151515"></rect>
    </svg>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({})
export default class MenuToggle extends Vue {
  @Prop({ default: false }) readonly isOpen!: boolean
}
</script>

<style scoped lang="sass">
.toggle
  position: fixed
  z-index: var(--z-nav-toggle)
  top: 40px
  right: 40px
  background: none
  border: none
  width: 40px
  height: 40px
  display: none
  padding: 0
</style>
