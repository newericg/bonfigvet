<template>
  <section class="" style="padding: 160px 0px 0px;">
    <v-container grid-list-md text-xs-center class="full-height">
    <v-layout justify-center class="hidden-md-and-up">
      <img :src="require('../assets/logooficial.jpeg')" class="logomob">
    </v-layout>

    <v-layout justify-center class="hidden-sm-and-down">
      <img :src="require('../assets/logooficial.jpeg')" class="logodesk">
    </v-layout>

    <br><br><br><br>
    
      <v-layout wrap>
        <v-flex pb-3 xs12>
          <h1>Médico Veterinário Domiciliar</h1>
        </v-flex>

        <v-flex pb-5 text-center xs12>
          <div data-aos="fade-up-left">
            <p class="subheading">"Todos os benefícios de uma clínica dentro de sua casa."</p>
          </div>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container class="backtext1 padtext" grid-list-md text-xs-center>
      <v-layout wrap>


        <v-flex pt-4 text-center xs12>

          <div data-aos="fade-up-left">
            <i class="fal fa-files-medical fa-3x primary--text"></i> <br><br>
            <p>Consultas</p>
          </div>
        </v-flex>

        <v-flex pt-4 text-center xs12>
          <i class="fal fa-vial fa-3x primary--text"></i> <br><br>
          <p>Exames de Sangue</p>
        </v-flex>
        <v-flex pt-4 text-center xs12>
          <i class="fal fa-syringe fa-3x primary--text"></i> <br><br>
          <p>Vacinas</p>
        </v-flex>
        <v-flex pt-4 text-center xs12>
          <i class="fal fa-users-medical fa-3x primary--text"></i> <br><br>
          <p>Outros Exames</p>
        </v-flex>
        <v-flex pt-4 text-center xs12>
          <i class="fal fa-ambulance fa-3x primary--text"></i> <br><br>
          <p>Transporte</p>
        </v-flex>
        <v-flex text-center xs12>
          <img :src="require('../assets/footerimg.png')" style="width:100%">
        </v-flex>
        <v-fab-transition>
          <v-btn href="https://api.whatsapp.com/send?phone=5519988379026&amp;text=Olá! Gostaria de informações." :key="activeFab.icon" color="primary" fab width="65px" height="65px" fixed bottom right>
            <v-icon class="fab fa-whatsapp fa-2x">
            </v-icon>
          </v-btn>
        </v-fab-transition>
      </v-layout>
    </v-container>


  </section>
</template>

<script>
  export default {
    head() {
      return {
        title: 'NUXT Home',
        meta: [{
            name: 'description',
            content: 'This is my about description here.'
          },
          {
            name: 'keywords',
            content: 'about nuxt, nuxt info'
          },
        ]
      }


    },

    data: () => ({
      fab: false,
      hidden: false,
      tabs: null,
    }),

    computed: {
      activeFab() {
        switch (this.tabs) {
          case 'one':
            return {
              color: 'success', icon: 'share'
            }
            case 'two':
              return {
                color: 'red', icon: 'edit'
              }
              case 'three':
                return {
                  color: 'green', icon: 'keyboard_arrow_up'
                }
                default:
                  return {}
        }
      },
    },
  }
</script>
}
</script>

<style>

.full-height {
  height: 600px;
}

  .backtext {

    background-color: rgba(255, 255, 255, 0.874);
  }

  .backtext1 {

    background-color: white;
  }



  .logomob {

    width: 75%;
    height: 100%;
    border-radius: 20px;
    opacity: 0.89;
  }

  .logomob:hover {
    opacity: 1.0;
    filter: alpha(opacity=100);
    /* For IE8 and earlier */
  }


  .logodesk {

    width: 40%;
    height: 50%;
    border-radius: 20px;
    opacity: 0.85;
  }

  .logodesk:hover {
    opacity: 1.0;
    filter: alpha(opacity=100);
    /* For IE8 and earlier */
  }

  body {

    margin: 0;
  }

  section {
    padding: 5em;
  }

  h1 {
    font-size: 2em;
    text-transform: uppercase;
  }

  .subheading {
    font-size: 1em;
    margin-bottom: 2em;
    text-transform: uppercase;
    color: rgb(179, 179, 179);
    font-weight: bold;
  }

  p {
    font-size: 1.2em;
    line-height: 1.8em;
    text-justify: inter-word;

  }


  .page-enter-active {
    animation: bounce-in .8s;
  }

  .page-leave-active {
    animation: bounce-out .5s;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(.9);
      opacity: 0;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes bounce-out {
    0% {
      transform: scale(1);
      opacity: 1;
    }

    100% {
      transform: scale(.9);
      opacity: 0;
    }
  }

  .links {

    color: inherit;
    text-decoration: none;
    font-weight: bold;
    
  }
</style>