<template>
  <q-page class="flex q-pa-lg">
    <q-img
      class="q-mx-auto"
      :src="url"
      :ratio="16 / 9"
      style="height: 100px; width: 250px"
    />
    <q-card class="full-width q-pa-md" flat style="background: transparent">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="secondary"
        indicator-color="secondary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login" />
        <q-tab name="register" label="Register" />
      </q-tabs>

      <q-separator />

      <q-tab-panels class="transparent" v-model="tab" animated>
        <q-tab-panel name="login">
          <login-register :tab="tab" />
        </q-tab-panel>

        <q-tab-panel name="register">
          <login-register :tab="tab" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    tab: "login",
    url: require("../assets/images/logo.svg")
  }),
  components: {
    "login-register": require("components/LoginRegister.vue").default
  }
};
</script>

<style lang="scss" scoped>
$input-text-color: #fff;
.q-page {
  background: url("../assets/images/school-bg-1.svg") center center;
  color: #fff !important;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
