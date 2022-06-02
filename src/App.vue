<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions("store", ["handleAuthStateChange"])
  },
  mounted() {
    this.handleAuthStateChange();
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css");

#q-app {
  font-family: "Quicksand", sans-serif !important;
}

.quick {
  font-family: "Quicksand", sans-serif !important;
}

#q-app .q-toolbar__title {
  font-size: 16px;
}

.q-toolbar {
  padding: 12px;
}
</style>
