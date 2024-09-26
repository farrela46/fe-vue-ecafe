<template>
  <v-footer
    style="background-color: #19191D;"
    padless
    class="d-flex justify-content-center align-items-center"
  >
    <v-card
      flat
      tile
      style="background-color: #19191D;"
      class="text-white text-center "
    >
    <v-row >
      <v-col
      cols="12"
      >

      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
          size="small"
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Thanks for Visiting our Website, Feel free to hit us on our social media!
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>IMT</strong>
      </v-card-text>
      </v-col>
    </v-row>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>