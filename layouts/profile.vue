<template>
  <v-app>
    <v-content id="content">
      <v-container>
        <transition name="fade" mode="out-in">
          <nuxt />
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>
