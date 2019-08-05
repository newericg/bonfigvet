<template>
  <section class="container" style="padding: 200px 0px 0px;">

    <v-layout justify-center>
      
    <img :src="require('../assets/logooficial.jpeg')" class="logo">
      
    </v-layout>
    <br><br><br><br>
    <h1>The Best Nuxt</h1>
    <p class="subheading ">Weee've got the best nuxt's.</p>
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


.logo{

  width: 60%;
  height: 60%;
  border-radius: 20px;
  opacity: 0.75;
}

.logo:hover {
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
    font-size: 3em;
    text-transform: uppercase;
  }

  .subheading {
    font-size: 1.5em;
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