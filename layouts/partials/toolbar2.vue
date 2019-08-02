<template>
<v-flex class="hidden-md-and-up">
  <v-app-bar app
    flat dark color="transparent"
  >
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <v-spacer></v-spacer>

    <v-navigation-drawer app width="100%" color="rgba(219, 216, 216, 0.99)" v-model="drawer" temporary>
      <v-layout row mt-4 column>
        <i role="button" @click="drawer = !drawer" class="v-icon notranslate v-icon--link mdi mdi-close theme--light"></i>
        <v-flex>
          <v-flex mt-4 d-flex>
          <v-btn text href="" >
            <nuxt-link @click="drawer = !drawer" class="links green--text" to="/">Home</nuxt-link>
          </v-btn>
          </v-flex>
          <v-flex d-flex>
          <v-btn text href="" >
            <nuxt-link @click="drawer = !drawer" class="links blue--text" to="about">Sobre</nuxt-link>
          </v-btn>
          </v-flex>
          <v-flex d-flex @click="drawer = !drawer">
          <v-btn class="" text @click.prevent="scrollTo('programacao')" href="#programacao">
            <span class="mr-2">Programação</span>
          </v-btn>
          </v-flex>
          <v-flex d-flex>
          <v-btn class="white--text" text @click.prevent="scrollTo('local')" href="">
            <span class="mr-2">Local</span>
          </v-btn>
          </v-flex>
          <v-flex d-flex>
          <v-btn class="white--text" @click.prevent="scrollTo('contato')" text href="#contato">
            <span class="mr-2">Contato</span>
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

}
</script>


<style>

.teste{

  color:rgba(219, 216, 216, 0.63)
}
</style>
