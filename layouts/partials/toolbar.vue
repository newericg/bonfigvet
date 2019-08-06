<template>
  <v-flex class="hidden-sm-and-down">
    <v-app-bar flat app :class="{transparent: !scrolled_down, white: scrolled_down}">
      <v-spacer></v-spacer>
      <v-btn text >
        <nuxt-link class="links"  to="/">Home</nuxt-link>
      </v-btn>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      
      <v-btn text >
        <nuxt-link class="links" to="appointment"> Agendar</nuxt-link>
      </v-btn>
      <v-btn text>
        <nuxt-link class="links"  to="services">Serviços</nuxt-link>
      </v-btn>

      <v-btn text>
        <nuxt-link class="links"  to="about">Contato</nuxt-link>
      </v-btn>

      <v-spacer></v-spacer>
      
      
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
      this.scrolled_down = (window.scrollY > 620)
    },
    
  },
  mounted () {
    window.addEventListener('scroll', this.update_scrolled_down);
  }
}
</script>