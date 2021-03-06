import Sass from 'sass';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    
    title: 'blizzard-ssr',
    htmlAttrs: {
      // lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  target: 'server',
  // css: ["~assets/styles/main.scss"],


  // Вам нужно будет добавить этот новый объект, если он еще не существует
  styleResources: {
    // scss: ["./assets/styles/*.scss"]
  },


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/IntersectionObserver.js',mode: 'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  static: {
    prefix: false
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg-sprite',
  ],
  svgSprite: {
    input: '~/assets/sprites/svg/'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n', 
    '@nuxtjs/auth-next'
  ],
  
  i18n: {
    locales: [
      {
        code: 'en-us',
        file: 'en-US.js',
        iso: 'en-US',
        name: 'English (US)'
      },
      {
        code: 'ru-ru',
        file: 'ru-RU.js',
        iso: 'ru-RU',
        name: 'Русский'
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
    },
   
    defaultLocale: 'en-us',
    vueI18nLoader: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  loaders: {

    scss: {

      implementation: Sass,


    }

  }
  
}
