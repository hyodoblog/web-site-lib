// import colors from 'vuetify/es5/util/colors'

export default {
  srcDir: 'src/',
  ssr: false,
  head: {
    titleTemplate: "%s",
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  loading: { color: "#fff" },
  css: [],
  plugins: [],
  buildModules: ['@nuxt/typescript-build', "@nuxtjs/vuetify"],
  modules: ["nuxt-fontawesome"],
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-brands-svg-icons",
        icons: ["fab"],
      },
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"],
      },
    ],
  },
  build: {},
}
