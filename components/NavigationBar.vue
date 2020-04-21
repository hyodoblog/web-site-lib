<template lang="pug">
  v-navigation-drawer(app)
    template(v-for="item in items")
      v-list-group(
        :key="item.text"
        v-model="item.model"
        :prepend-icon="item.model ? item.icon : item['icon-alt']"
        append-icon=""
      )
        template(v-slot:activator)
          v-list-item-content
            v-list-item-title {{ item.text }}
        v-list-item(
          v-for="(child, i) in item.children"
          :key="i"
          link
        )
          nuxt-link(:to="child.link")
            v-list-item-action(v-if="child.icon")
              v-icon {{ child.icon }}
            v-list-item-content
              v-list-item-title {{ child.text }}
</template>

<script>
import copyItem from "@/assets/copy.json"

export default {
  data: () => ({
    items: [
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "模写",
        model: false,
        children: copyItem,
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  div {
    color: #191919;
  }
}
</style>
