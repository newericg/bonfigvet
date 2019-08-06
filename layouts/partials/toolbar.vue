<template>
  <v-flex class="hidden-sm-and-down">
    <v-app-bar flat app :class="{transparent: !scrolled_down, white: scrolled_down}">
      <v-spacer></v-spacer>
      <v-btn text >
        <nuxt-link class="links" style="color: rgba(170, 208, 99)" to="/">Home</nuxt-link>
      </v-btn>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <v-btn text >
        <nuxt-link class="links" style="color: rgba(170, 208, 99)" to="appointment">Agendar</nuxt-link>
      </v-btn>
      <v-btn text>
        <nuxt-link class="links" style="color: rgba(170, 208, 99)" to="services">Serviços</nuxt-link>
      </v-btn>

      <v-btn text>
        <nuxt-link class="links" style="color: rgba(170, 208, 99)" to="about">Contato</nuxt-link>
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
      this.scrolled_down = (window.scrollY > 340)
    },
    
  },
  mounted () {
    window.addEventListener('scroll', this.update_scrolled_down);
  }
}
</script>