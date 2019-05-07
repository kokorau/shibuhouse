<template>
  <transition name="body">
    <div id="app">
      <router-view />
    </div>
  </transition>
</template>

<style scoped lang="sass">
.body-enter-active, .body-leave-active
  background: #151515
</style>
