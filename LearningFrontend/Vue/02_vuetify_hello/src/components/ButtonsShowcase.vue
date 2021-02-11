<template>

  <div class="text-center">
    
    <v-snackbar
      v-model="snackbar"
      color="deep-purple accent-4"
    >
      {{ butonsSnackText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    
    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="primary"
      @click="showButonsSnack('MINUUSS')"
    >
      <v-icon dark>
        mdi-minus
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="pink"
    >
      <v-icon dark>
        mdi-heart
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      color="teal"
    >
      <v-icon dark>
        mdi-format-list-bulleted-square
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      large
      color="cyan"
    >
      <v-icon dark>
        mdi-pencil
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      large
      color="purple"
    >
      <v-icon dark>
        mdi-android
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    snackbar: false,
    butonsSnackText: "",
  }),
  
  methods: {
    showButonsSnack(text) {
      this.snackbar = true
      this.butonsSnackText = text
    }
  },
}
</script>

<style>

</style>