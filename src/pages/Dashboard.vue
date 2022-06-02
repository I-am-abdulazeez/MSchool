<template>
  <q-page class="q-pa-lg">
    <StudentDash v-if="userDetails.select === 'Student'" />
    <StaffDash v-if="userDetails.select === 'Staff'" />
    <NonStaffDash v-if="userDetails.select === 'Non-Teaching-Staff'" />
    <MyMap />
  </q-page>
</template>

<script>
import StudentDash from "../components/SDash";
import StaffDash from "../components/STDash";
import NonStaffDash from "../components/NSDash";
import MyMap from "../components/MyMap";
import { mapState } from "vuex";

export default {
  name: "dashboard",
  data: () => ({}),
  components: {
    StudentDash,
    MyMap,
    StaffDash,
    NonStaffDash
  },
  computed: {
    ...mapState("store", ["userDetails"])
  },
  created() {}
};
</script>

<style lang="scss">
.q-page {
  .g-1 {
    background: #41295a;
    background: linear-gradient(to right, #2f0743, #41295a);
  }
  .g-2 {
    background: #ff00cc;
    background: linear-gradient(to right, #333399, #ff00cc);
  }
  .g-3 {
    background: #de6161;
    background: linear-gradient(to right, #2657eb, #de6161);
  }
  .g-4 {
    background: #3a6186;
    background: linear-gradient(to right, #89253e, #3a6186);
  }
  .f-14 {
    font-size: 35px;
  }
}
</style>