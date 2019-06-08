<template>
  <div class="login">
    <v-form v-on:submit.prevent="onSubmit">
      <v-text-field
        v-model="username"
        label="Benutzername"
        placeholder="Benutzername"
        box
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Passwort"
        placeholder="Passwort"
        type="password"
        box
      ></v-text-field>

      <v-btn type="submit" color="primary">Anmelden</v-btn>
    </v-form>
  </div>
</template>

<script>
import user from "../_service/user.service";
export default {
  methods: {
    onSubmit: function() {
      const promise = user.login(this.username, this.password);

      promise
        .then(token => this.$emit("success", token))
        .catch(error => this.$emit("error", error));
    }
  },
  data: function() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>
