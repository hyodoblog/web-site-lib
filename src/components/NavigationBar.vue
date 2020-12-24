<template lang="pug">
  v-navigation-drawer(app)
    template(v-for="item in items")
      v-list-group(
        v-if="item.children"
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
      v-list-item(
        v-else
        :key="item.text"
        link
      )
        nuxt-link(:to="item.link")
          v-list-item-action
            v-icon {{ item.icon }}
          v-list-item-content
            v-list-item-title {{ item.text }}
</template>

<script>
import copyItem from "@/assets/copy.json"

export default {
  data: () => ({
    items: [
      {
        icon: "mdi-home",
        text: "トップ",
        link: "/",
      },
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
  display: flex;
  div {
    color: #191919;
  }
}
</style>
