<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title class="headline text-uppercase">
        <span>OS</span>
        <span class="font-weight-light">ERP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      {{ api }}
      <v-spacer></v-spacer>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/login">Foo</router-link>
      |
      <router-link to="/about">About</router-link>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: function() {
    return {
      api: process.env.VUE_APP_API_CLIENT
    };
  }
};
</script>
