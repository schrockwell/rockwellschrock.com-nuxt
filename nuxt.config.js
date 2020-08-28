export default {
  mode: "spa",
  css: ["~/assets/css/main.css"],
  buildModules: ["@nuxtjs/tailwindcss"],
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
  components: true,
};
