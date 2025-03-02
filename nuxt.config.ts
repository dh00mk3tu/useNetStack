// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  experimental: {
    renderJsonPayloads: false
  },
  modules: ["@pinia/nuxt", "@nuxt/content", "@nuxt/image"],
  css: ["@/assets/css/tailwind.css", "@/assets/css/theme.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
