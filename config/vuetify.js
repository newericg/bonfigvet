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
    primary: 'rgba(170, 208, 99,)',
    secondary: '#1abc9c',
    accent: '#2980b9',
    error: '#e74c3c',
    action: '#23DB2A',
    dark: false,
    themes: {
      light: {
        custom: '#f20540',
        primary: colors.blue.base,
      },
      dark: {
        primary: "#05f230",
      },
    },
  }  
}