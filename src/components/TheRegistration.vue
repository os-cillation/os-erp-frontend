<template>
  <div class="login">
    <v-form
      v-on:submit.prevent="onSubmit"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="username"
        label="Benutzername"
        placeholder="Benutzername"
        :counter="maxUsername"
        @input="$v.username.$touch()"
        @blur="$v.username.$touch()"
        :error-messages="usernameErrors"
        box
      ></v-text-field>
      <v-text-field
        v-model="email"
        label="E-Mail"
        placeholder="E-Mail"
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
        :error-messages="emailErrors"
        box
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Passwort"
        placeholder="Passwort"
        type="password"
        ref="password"
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
        :error-messages="passwordErrors"
        box
      ></v-text-field>
      <v-text-field
        v-model="passwordRepeat"
        label="Passwort wiederholen"
        placeholder="Passwort wiederholen"
        type="password"
        @input="$v.passwordRepeat.$touch()"
        @blur="$v.passwordRepeat.$touch()"
        :error-messages="passwordRepeatErrors"
        box
      ></v-text-field>

      <v-btn type="button" @click="onSubmit" color="primary">
        Registrieren
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  email,
  sameAs,
  helpers
} from "vuelidate/lib/validators";
const passwordRegex = helpers.regex(
  "password",
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[\,\.\-\_\#\'\+\*\~]).{8,}$/
);

let maxUsername = 15;

export default {
  mixins: [validationMixin],
  data: function() {
    return {
      valid: false,
      username: "",
      email: "",
      password: "",
      passwordRepeat: "",
      maxUsername: maxUsername
    };
  },
  validations: {
    username: { required, maxLength: maxLength(maxUsername) },
    email: { required, email },
    password: { required, passwordRegex },
    passwordRepeat: { required, sameAsPassword: sameAs("password") }
  },
  methods: {
    onSubmit: function() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        alert("valid");
      } else {
        alert("NOT!");
      }
    }
  },
  computed: {
    usernameErrors: function() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.required && errors.push("Der Benutzername ist Pflicht");
      !this.$v.username.maxLength &&
        errors.push(`Der Benutzername ist zu lang`);
      return errors;
    },
    emailErrors: function() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.required && errors.push("Die E-Mail Adresse ist Pflicht");
      !this.$v.email.email && errors.push(`Das ist keine gültige E-Mail`);
      return errors;
    },
    passwordErrors: function() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required &&
        errors.push("Bitte geben Sie ein Passwort ein");
      !this.$v.password.passwordRegex &&
        errors.push(
          "Ihr Passwort muss Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen enthalten."
        );
      return errors;
    },
    passwordRepeatErrors: function() {
      const errors = [];
      if (!this.$v.passwordRepeat.$dirty) return errors;
      !this.$v.passwordRepeat.required &&
        errors.push("Bitte wiederholen Sie Ihr Passwort");
      !this.$v.passwordRepeat.sameAsPassword &&
        errors.push(`Das Passwort stimmt nicht überein`);
      return errors;
    }
  }
};
</script>
