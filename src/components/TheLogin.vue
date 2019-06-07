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

      <v-btn type="submit" color="primary">Login</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit: function() {
      alert(this.username + this.password);
    }
  },
  data: function() {
    return {
      username: "Test",
      password: "test1234"
    };
  }
};
</script>
