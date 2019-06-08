<template>
  <v-container>
    <v-layout align-center justify-center column wrap fill-height>
      <v-flex xs6>
        <h1>Registrierung</h1>
      </v-flex>
      <v-flex xs6>
        <TheRegistration></TheRegistration>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TheRegistration from "../components/TheRegistration";

export default {
  components: {
    TheRegistration
  },
  data: function() {
    return {
      submitted: false
    };
  }
};
</script>
