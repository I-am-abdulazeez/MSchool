<template>
  <q-page class="q-pa-lg text-center">
    <h5 class="q-mt-none q-mb-sm">School Staffs</h5>
    <div class="row">
      <div class="col-6 q-pa-md" v-for="user in allUsers" :key="user.id">
        <div
          v-if="user.select === 'Staff' || user.select === 'Non-Teaching-Staff'"
        >
          <q-avatar size="80px">
            <q-img
              :loading="loading"
              :src="user.image"
              :placeholder-src="placeHolder"
            />
          </q-avatar>
          <div>
            <h6 class="text-h6 q-my-none text-grey">
              {{ user.name }} is a
              <q-badge :color="user.select === 'staff' ? 'primary' : 'accent'">
                {{ user.select }}
              </q-badge>
            </h6>
            <p class="q-my-none">
              Department of:
              <q-badge color="negative" :label="user.department" />
            </p>
            <p>
              {{ user.email }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "staffs",
  data: () => ({
    placeHolder: "https://cdn.quasar.dev/img/boy-avatar.png",
    loading: false
  }),
  mounted() {},
  computed: {
    ...mapState("store", ["allUsers", "userDetails"])
  }
};
</script>

<style></style>
