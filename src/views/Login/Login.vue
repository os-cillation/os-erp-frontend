<template>
  <v-container>
    <v-layout align-center justify-center column wrap fill-height>
      <v-flex xs6>
        <h1>Anmeldung</h1>
      </v-flex>
      <v-flex xs6>
        <v-alert type="error" :value="error !== false">
          Der Login war nicht erfolreich: {{ error }}
        </v-alert>
      </v-flex>
      <v-flex xs6>
        <TheLogin v-on:success="onSuccess" v-on:error="onError"></TheLogin>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TheLogin from "../../components/TheLogin";

export default {
  components: {
    TheLogin
  },
  data: function() {
    return {
      error: false
    };
  },
  methods: {
    onSuccess: function() {
      window.location.assign("/");
    },
    onError: function(error) {
      this.error = error;
    }
  }
};
</script>
