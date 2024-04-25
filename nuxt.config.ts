// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // nginx开启gzip,可预加载
  // experimental:{
  //   payloadExtraction: false,
  // },

  devtools: { enabled: true },
  
  modules: ['@nuxt/ui', '@nuxt/content'],

  nitro: {
    output: { dir: 'dist', serverDir: 'dist/server', publicDir: 'dist/nuxt-blog' }
  },
  content: {
   
    highlight: {
      // https://github.com/shikijs/textmate-grammars-themes/tree/main/packages/tm-themes
      // theme: 'github-light',// D73A49
      // OR
      theme: {
        // https://content.nuxt.com/ 使用的 material-theme-lighter material-theme material-theme-palenight
        default: 'material-theme-lighter',
        // Theme used if `html.dark`
        dark: 'material-theme',
        // Theme used if `html.sepia`
        sepia: 'material-theme-palenight'
      }
    }
  }
})