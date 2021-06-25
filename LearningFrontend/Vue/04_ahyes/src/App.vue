<template>
  <v-app>
    <v-app-bar
      id="appbar"
      app
      dark
      dense
      elevate-on-scroll
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <ipsum />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Ipsum from './components/Ipsum.vue';

export default {
  name: 'App',
  components: {Ipsum},

  data: () => ({
    
  }),
};
</script>

<style lang="scss">
@import '~vuetify/src/styles/styles.sass';


@media #{map-get($display-breakpoints, 'md-and-up')} {
  .v-toolbar {
    max-width: 50vw !important;
    border-radius: 10px !important;
    margin: auto;
    margin-top: 3px !important;
  }
  
  .container {
    max-width: 50vw !important;
  }
}

html {
  overflow-y: auto !important;
}

</style>