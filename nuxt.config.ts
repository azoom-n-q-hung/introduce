import vuetify from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      title: "Alo Ship99",
      meta: [
        {
          name: "description",
          content: "Cung cấp giải pháp ứng dụng Android, iOS",
        },
      ],
      script: [
        {
          async: "true",
          src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
        },
        {
          async: "true",
          src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js",
        },
        {
          async: "true",
          src: "https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/js/bootstrap.min.js",
        },
        {
          src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDX4b19Ejhlzoq6abiCZM8qoretxKuawKM",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@mdi/font@5.9.55/css/materialdesignicons.min.css",
        },
      ],
    },
  },
  css: ["@/assets/main.scss", "bootstrap/dist/css/bootstrap.min.css"],
});
