<template>
  <section class="container" style="padding: 220px 0px 0px;">

    <v-layout justify-center class="hidden-md-and-up">  
    <img :src="require('../assets/logooficial.jpeg')" class="logomob"> 
    </v-layout>

    <v-layout justify-center class="hidden-sm-and-down">  
    <img :src="require('../assets/logooficial.jpeg')" class="logodesk"> 
    </v-layout>
    
    <br><br><br><br>
    <v-container grid-list-md text-xs-center>
      <v-layout wrap>
        <v-flex  pb-5 xs12 >
          <h1>Medico Veterinário Domiciliar</h1>
        </v-flex>

        <v-flex text-center xs12>
          <p class="subheading">"Todos os benefícios de uma clínica dentro de sua casa."</p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-flex class="backtext py-3 px-4">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sed tenetur quas! Laudantium odio
      consectetur, quia dolore veritatis quae quam nobis aperiam saepe, modi quibusdam facere tenetur omnis earum
      molestiae.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sed tenetur quas! Laudantium odio
      consectetur, quia dolore veritatis quae quam nobis aperiam saepe, modi quibusdam facere tenetur omnis earum
      molestiae.</p>
      <br>
      <br>
      <br>
      <br>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sed tenetur quas! Laudantium odio
      consectetur, quia dolore veritatis quae quam nobis aperiam saepe, modi quibusdam facere tenetur omnis earum
      molestiae.</p>
      <br>
      <br>
      <br>
      <br>
      <br>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sed tenetur quas! Laudantium odio
      consectetur, quia dolore veritatis quae quam nobis aperiam saepe, modi quibusdam facere tenetur omnis earum
      molestiae.</p>
      <br>
      <br>
      <br>
      <br>
      <div id="sobre">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sed tenetur quas! Laudantium odio
      consectetur, quia dolore veritatis quae quam nobis aperiam saepe, modi quibusdam facere tenetur omnis earum
      molestiae.</p>
      </div>
      <br>
      <br>
      <br>
      <br>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sed tenetur quas! Laudantium odio
      consectetur, quia dolore veritatis quae quam nobis aperiam saepe, modi quibusdam facere tenetur omnis earum
      molestiae.</p>
      <br>
      <br>
      <br>
      <br>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates sed tenetur quas! Laudantium odio
      consectetur, quia dolore veritatis quae quam nobis aperiam saepe, modi quibusdam facere tenetur omnis earum
      molestiae.</p>
    </v-flex>
    
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


    }
  }
</script>

<style>

.backtext{

  background-color: rgba(255, 255, 255, 0.774);
}


.logomob{

  width: 100%;
  height: 100%;
  border-radius: 20px;
  opacity: 0.75;
}

.logomob:hover {
  opacity: 1.0;
  filter: alpha(opacity=100); /* For IE8 and earlier */
}


.logodesk{

  width: 50%;
  height: 50%;
  border-radius: 20px;
  opacity: 0.75;
}

.logodesk:hover {
  opacity: 1.0;
  filter: alpha(opacity=100); /* For IE8 and earlier */
}

  body {
    font-family: 'Montserrat';
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
    line-height: 1.4em;
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

  .links{

    color: inherit;
    text-decoration: none
  }


</style>