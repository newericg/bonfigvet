<template>
  <v-flex class="hidden-sm-and-down">
    <v-app-bar flat app :class="{transparent: !scrolled_down, white: scrolled_down}">
      <v-btn text >
        <nuxt-link class="links green--text" to="/">Home</nuxt-link>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn text >
        <nuxt-link class="links green--text" to="about">Sobre</nuxt-link>
      </v-btn>
      <v-btn text>
        <nuxt-link class="links green--text" to="services">Serviços</nuxt-link>
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


<script>
export default {
  data: function() {
    return {
      scrolled_down: false
    }
  },
  
  methods: {
    scrollTo: function(id){     
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' })},
        update_scrolled_down() {
      this.scrolled_down = (window.scrollY > 260)
    },
    
  },
  mounted () {
    window.addEventListener('scroll', this.update_scrolled_down);
  }
}
</script>