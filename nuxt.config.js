export default {
  // Fully-static site generation
  target: "static",

  // Put all components in the global namespace
  components: true,

  // Don't use CSS @import!!
  css: [
    "~/assets/css/fonts.css",
    "~/assets/css/cv-prose.css",
    "~/assets/css/main.css"
  ],

  build: {
    extractCSS: true
  },

  // Plugins
  buildModules: ["@nuxtjs/tailwindcss", "@nuxt/content"],

  // Mobile scaling stuff
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  }
};
