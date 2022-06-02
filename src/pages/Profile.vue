<template>
  <q-page class="q-pa-lg text-center justify-center" id="profile">
    <h5 class="text-center">User Info</h5>
    <div class="bg-transparent text-center">
      <div class="row justify-center q-mb-sm">
        <div class="col-sm-12">
          <q-avatar size="150px" class="q-mb-sm">
            <q-img
              :loading="loading"
              :src="userDetails.image"
              :placeholder-src="placeHolder"
            />
          </q-avatar>
          <!-- <q-avatar v-else color="primary" size="150px" text-color="white">
            <q-img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar> -->
        </div>
      </div>
      <div class="row justify-center q-mb-sm">
        <div class="col-sm-12">
          <q-file
            v-model="file"
            label="Change Profile Picture"
            use-chips
            accept=".jpg, .png image/*"
            style="width: 200px"
          />
          <q-btn flat class="text-primary q-mt-sm" @click="saveUsers()"
            >Save</q-btn
          >
        </div>
      </div>
      <div class="column text-center">
        <div class="text-weight-bold q-mb-sm">
          Name: <span class="text-weight-medium">{{ userDetails.name }}</span>
        </div>
        <div class="text-weight-bold q-mb-sm">
          Email: <span class="text-weight-medium">{{ userDetails.email }}</span>
        </div>
        <div class="text-weight-bold q-mb-sm">
          {{ userDetails.name }} is a
          <span class="text-weight-medium">{{ userDetails.select }}</span>
        </div>
        <div class="text-weight-bold q-mb-sm">
          Department of:
          <span class="text-weight-medium">{{ userDetails.department }}</span>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "profile",
  data: () => ({
    file: null,
    loading: false,
    placeHolder: "https://cdn.quasar.dev/img/boy-avatar.png"
  }),
  computed: {
    ...mapState("store", ["userDetails"])
  },
  methods: {
    ...mapActions("store", ["saveUsersProfile"]),
    saveUsers() {
      this.loading = true;
      this.saveUsersProfile(this.file);
      setTimeout(() => {
        this.file = null;
        this.loading = false;
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
#profile {
  .q-field__control {
    text-align: center !important;
  }
}
</style>
