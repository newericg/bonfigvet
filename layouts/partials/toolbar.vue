<template>
  <v-flex class="hidden-sm-and-down">
    <v-app-bar flat app dark color="transparent">
      <v-btn text >
        <nuxt-link class="links white--text" to="/">Home</nuxt-link>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn text >
        <nuxt-link class="links white--text" to="about">Sobre</nuxt-link>
      </v-btn>
      <v-btn text class="white--text">
        <span class="mr-2">Inscrição</span>
      </v-btn>

      <v-btn text class="white--text" @click.prevent="scrollTo('programacao')" href="#programacao">
        <span class="mr-2">Programação</span>
      </v-btn>
      <v-btn text class="white--text" @click.prevent="scrollTo('local')" href="">
        <span class="mr-2">Local</span>
      </v-btn>
      <v-btn text class="white--text">
        <span class="mr-2">Contato</span>
      </v-btn>
    </v-app-bar>
  </v-flex>
</template>