<template>
  <v-container>
    <v-layout align-center justify-center column wrap fill-height>
      <v-flex xs6>
        <h1>Anmeldung</h1>
      </v-flex>
      <v-flex xs6>
        <TheLogin></TheLogin>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TheLogin from "../../components/TheLogin";

export default {
  components: {
    TheLogin
  }
};
</script>
