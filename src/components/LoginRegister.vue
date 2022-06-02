<template>
  <div>
    <q-form ref="studentForm" @submit="submitForm()">
      <q-input
        v-if="tab == 'register'"
        class="q-mb-md"
        v-model="formData.name"
        label="Name"
        type="text"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        class="q-mb-md"
        v-model="formData.email"
        label="Email"
        type="email"
        lazy-rules
        :rules="emailRules"
      />
      <q-input
        class="q-mb-md"
        v-model="formData.password"
        label="Password"
        type="password"
        lazy-rules
        :rules="passwordRules"
      />
      <q-select
        class="q-mb-md"
        v-model="formData.select"
        :options="options"
        label="As"
        lazy-rules
        :rules="[val => !!val || 'Select something!']"
        dense
      />
      <q-select
        :disable="!formData.select"
        v-if="tab === 'register'"
        class="q-mb-md"
        v-model="formData.department"
        :options="
          formData.select === 'Non-Teaching-Staff' ? optionsS : optionsD
        "
        label="Department"
        lazy-rules
        :rules="[val => !!val || 'Select something!']"
        dense
      />
      <div class="row">
        <q-space />
        <q-btn
          type="submit"
          color="primary"
          :label="tab === 'register' ? 'Register' : 'Login'"
          :loading="loading"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "login-register",
  props: ["tab"],
  data: () => ({
    formData: {
      name: "",
      email: "",
      password: "",
      select: null,
      department: ""
    },
    loading: false,
    options: ["Student", "Staff", "Non-Teaching-Staff"],
    optionsD: [
      "Computer Science",
      "Financial Accounting",
      "Information Technology",
      "International Foundations Program",
      "Information Technology and Business Information System",
      "Law"
    ],
    optionsS: [
      "Library",
      "Finance Office",
      "Student Office",
      "International Relation",
      "Canteen",
      "Reception",
      "Others"
    ],
    emailRules: [
      val => (val && val.length > 0) || "Please type something",
      val => /.+@.+\..+/.test(val) || "Email must be in a valid format"
    ],
    passwordRules: [
      val => (val && val.length > 0) || "Please type something",
      val => (val && val.length >= 8) || "Min 8 characters"
    ]
  }),
  methods: {
    ...mapActions("store", ["registerUsers", "loginUsers"]),
    submitForm() {
      if (this.$refs.studentForm.validate()) {
        this.loading = true;
        if (this.tab === "register") {
          this.registerUsers(this.formData);
          setTimeout(() => {
            this.loading = false;
          }, 1500);
        } else {
          this.loginUsers(this.formData);
          setTimeout(() => {
            this.loading = false;
          }, 1500);
        }
      }
    },
    checkSelect() {
      console.log(this.select);
    }
  }
};
</script>

<style lang="scss">
.q-select__dialog {
  font-family: "Quicksand", sans-serif !important;
}
</style>  