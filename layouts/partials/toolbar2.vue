<template>
<v-flex class="hidden-md-and-up">
  <v-app-bar app
    flat :class="{transparent: !scrolled_down, white: scrolled_down}"
  >
    <v-app-bar-nav-icon  @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <v-spacer></v-spacer>

    <v-navigation-drawer app width="100%" color="rgba(255, 255, 255, 0.92)" v-model="drawer" temporary>
      <v-layout row mt-4 column>
        <i role="button" @click="drawer = !drawer" class="v-icon notranslate v-icon--link mdi mdi-close theme--light"></i>
        <v-flex>
          <v-flex mt-4 d-flex>
          <v-btn text href="" >
            <nuxt-link @click="drawer = !drawer" class="links"  to="/">Home</nuxt-link>
          </v-btn>
          </v-flex>
          <v-flex d-flex>
          <v-btn text href="" >
            <nuxt-link @click="drawer = !drawer" class="links"  to="appointment">Agendar</nuxt-link>
          </v-btn>
          </v-flex>
          <v-flex d-flex>
          <v-btn text href="" >
            <nuxt-link @click="drawer = !drawer" class="links"  to="services">Serviços</nuxt-link>
          </v-btn>
          </v-flex>
          <v-flex d-flex>
          <v-btn text href="" >
            <nuxt-link @click="drawer = !drawer" class="links"  to="about">Contato</nuxt-link>
          </v-btn>
          </v-flex>
        </v-flex>
      </v-layout>

    </v-navigation-drawer>
  </v-app-bar>
  </v-flex>
</template>


<script>
export default {

  data: function() {
    return {
      scrolled_down: false,
      drawer: null,
    }
  },


  methods: {
    scrollTo: function(id){     
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' })},
        update_scrolled_down() {
      this.scrolled_down = (window.scrollY > 640)
    },
    
  },
  mounted () {
    window.addEventListener('scroll', this.update_scrolled_down);
  }

}
</script>


<style>

.teste{

  color:rgba(255, 255, 255, 0.308)
}
</style>
