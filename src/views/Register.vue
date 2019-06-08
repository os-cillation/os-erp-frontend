<template>
  <v-container>
    <v-layout align-center justify-center column wrap fill-height>
      <v-flex xs6>
        <h1>Registrierung</h1>
      </v-flex>
      <v-flex xs6>
        <v-alert type="success" :value="success !== false">
          Sie wurden erfolreich registriert
        </v-alert>
        <v-alert type="error" :value="error !== false">
          Die Registrierung konnte nicht abgeschlossen werden: {{ error }}
        </v-alert>
      </v-flex>
      <v-flex xs6>
        <TheRegistration
          v-on:success="onSuccess"
          v-on:error="onError"
        ></TheRegistration>
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
      submitted: false,
      success: false,
      error: false
    };
  },
  methods: {
    onSuccess: function() {
      window.location.assign("/login");
    },
    onError: function(error) {
      this.error = error;
    }
  }
};
</script>
