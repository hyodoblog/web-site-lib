<template lang="pug">
  transition(name="page")
    nuxt
</template>

<style lang="scss" scoped>
.page-enter {
  opacity: 0;
}
.page-enter-active {
  transition: opacity 2s;
}
</style>