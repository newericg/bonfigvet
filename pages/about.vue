<template>
  <section class="container" style="padding: 100px 20px 0px;">
    <v-container grid-list-md text-xs-center>
      <v-layout px-2 wrap class="backtext">
        <v-flex pt-4 pb-5 xs12 class="primary--text">
          <h1>Contato</h1>
        </v-flex>

        <v-flex text-center xs12>
          <p>Segunda a sexta-feira das 07:00 às 19:00 horas. <br>
            Sábados até as 12:000 <br>
            *Exceto emergências <br> <br></p>
        </v-flex>
        <v-flex pb-4 text-center xs12>
          <i class="fal fa-phone-volume primary--text fa-2x"></i>
          <a class="links" href="tel:+5519991937377">
            (19) 9.8837.9026
          </a>
        </v-flex>

        <v-flex pb-4 xs12>
          <i class="fal fa-mail-bulk primary--text fa-2x"></i>
          <a class="links" href="mailto:bonfigliolivet@outlook.it">
            bonfigliolivet@outlook.it
          </a>
        </v-flex>
        
        <v-flex pb-1 xs12>
          <address>
          <i class="fal fa-map-marker-alt primary--text fa-2x"></i>
          Valinhos, SP</address><br>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {

  }
</script>

<style>

.linkscolor{
  
  color:black !important;
  font-style: normal !important;
  
}

</style>
