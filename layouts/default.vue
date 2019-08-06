<template>
  <v-app class="fonte">
    <img :src="require('../assets/fundo3.jpg')" id="bg" alt="">
    <Toolbar/>
    <Toolbar2/>
    <v-content id="content" style="padding: 0px 0px 0px;" class="padtext">
        <nuxt/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>

import smoothscroll from 'smoothscroll-polyfill'
import Footer from './partials/footer';
import Toolbar from './partials/toolbar';
import Toolbar2 from './partials/toolbar2'

export default {
  components: {
    Toolbar,
    Toolbar2,
    Footer,
  },
  mounted(){
    smoothscroll.polyfill();
  },
}
</script>

<style>

.fonte{

  font-family: 'Montserrat' !important;
}

#bg {
  position: fixed; 
  top: 0; 
  left: 0; 
	
  /* Preserve aspet ratio */
  
  min-width: 125%;
  min-height: 100%;
  
  
  
  
  
}

html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.padtext{

  max-width: 100% !important
}

</style>