import vuetify_config from './config/vuetify.js'
import package_json from './package'



export default {
  mode: 'universal',
  server: {
    // port: 8888,  // default: 3000
    // host: 0,     // default: localhost,
    // timing: { total: true }
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'selfsigned.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'selfsigned.crt'))
    // }
  },
  head: {
    title: 'wireframe',
    meta: 
      [
        { charset: 'utf-8' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: package_json.description || ''
        }
      ],
    link: 
      [
        { rel: 'stylesheet', href:
            'https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700&display=swap'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,700' },
      ],
  },
  loading: { color: '#00D39C' },
  css:
    [
      '@fortawesome/fontawesome-pro/css/all.min.css'
      
    ],
  plugins: [],
  modules: ['@nuxtjs/axios'],
  devModules:
    [
      '@nuxtjs/vuetify'
    ],
  axios: {
    // proxyHeaders: false
  },
  vuetify: vuetify_config
}