<template>
  <section class="container" style="padding: 110px 30px 30px;">
    <v-container grid-list-md text-xs-center class="backtext">
      <v-layout wrap>
        <v-flex pt-4 pb-4 xs12>
          <h2>
            Consultas
          </h2>
        </v-flex>

        <v-flex text-center xs12>
          <img :src="require('../assets/dog6.png')" width="25%">
          <p>
            As consultas e atendimentos são exclusivamente domiciliares, o horário normal de atendimento...
          </p>
        </v-flex>
        <v-flex xs12>
        </v-flex>
        <v-flex text-center xs12>
          <v-btn text>
        <nuxt-link class="links"  to="consultas">Leia mais</nuxt-link>
      </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container mt-4 grid-list-md text-xs-center class="backtext">
      <v-layout wrap>
        <v-flex pt-4 pb-3 xs12>
          <h2>
            Exames de Sangue
          </h2>
        </v-flex>

        <v-flex text-center xs12>
          <img :src="require('../assets/dog2.png')" width="40%">
          <p>
          Os exames de sangue podem sempre ser coletados... </p>
        </v-flex>
        <v-flex xs12>
        </v-flex>
        <v-flex text-center xs12>
          <v-btn text>
        <nuxt-link class="links"  to="exames">Leia mais</nuxt-link>
      </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container mt-4 grid-list-md text-xs-center class="backtext">
      <v-layout wrap>
        <v-flex pt-4 pb-3 xs12>
          <h2>
            Vacinas
          </h2>
        </v-flex>

        <v-flex text-center xs12>
          <img :src="require('../assets/dog7.png')" width="40%">
          <p>
            Gatos: Existem 3 diferentes vacinas no...          </p>
        </v-flex>
        <v-flex xs12>
        </v-flex>
        <v-flex text-center xs12>
          <v-btn text>
        <nuxt-link class="links"  to="vacinas">Leia mais</nuxt-link>
      </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container mt-4 grid-list-md text-xs-center class="backtext">
      <v-layout wrap>
        <v-flex pt-4 pb-3 xs12>
          <h2>
            Outros Exames
          </h2>
        </v-flex>

        <v-flex text-center xs12>
          <img :src="require('../assets/dog4.png')" width="18%">
          <p>
            Além dos exames de sangue ainda é possível realizar exames de fezes, exame...  
          </p>
        </v-flex>
        <v-flex xs12>
        </v-flex>
        <v-flex text-center xs12>
          <v-btn text>
        <nuxt-link class="links"  to="outros">Leia mais</nuxt-link>
      </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container mt-4 grid-list-md text-xs-center class="backtext">
      <v-layout wrap>
        <v-flex pt-4 pb-3 xs12>
          <h2>
            Transporte
          </h2>
        </v-flex>

        <v-flex text-center xs12>
          <img :src="require('../assets/dog5.png')" width="38%">
          <p>
            Serviço exclusivo para pacientes.          </p>
        </v-flex>
        <v-flex xs12>
        </v-flex>
        <v-flex text-center xs12>
          <v-btn text>
        <nuxt-link class="links"  to="transporte">Leia mais</nuxt-link>
      </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>