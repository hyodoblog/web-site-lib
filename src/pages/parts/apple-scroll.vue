<template lang="pug">
  .body

</template>

<script>
import ScrollOut from 'scroll-out'

export default {
  name: 'AppleScroll',
  head: {
    titleTemplate: 'apple-scroll',
  },
  mounted() {
    ScrollOut({
      onShown: (el) => {
        // use the web animation API
        el.animate([{ opacity: 0 }, { opacity: 1 }], 1000)
      },
      onHidden: (el) => {
        el.style.opacity = 0
      },
    })
  },
}
</script>

<style lang="scss" scoped>
.body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: #34495e;
}
</style>
