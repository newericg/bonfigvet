import colors from 'vuetify/es5/util/colors'

//https://github.com/nuxt-community/vuetify-module

export default {
  customVariables: ['~/assets/variables.scss'],
  treeShake: false, //process.env.NODE_ENV === 'production'
  defaultAssets: {
    font: false, //true
    icons: true, //true
  },
  theme: {
    dark: false,
    themes: {
      light: {
        custom: '#f20540',
        primary: '#AAD063',
      },
      dark: {
        primary: "#05f230",
      },
    },
  }  
}