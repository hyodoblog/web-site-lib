<template lang="pug">
  v-app
    navigation-bar
            
    v-content
      transition(name="page")
        nuxt

</template>

<script>
import NavigationBar from "@/components/NavigationBar"

export default {
  components: {
    NavigationBar,
  },
}
</script>

<style lang="scss" scoped>
.page-enter {
  opacity: 0;
}
.page-enter-active {
  transition: opacity 2s;
}
</style>
