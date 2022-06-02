<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      v-if="
        [
          'sdashboard',
          'profile',
          'schooldept',
          'schoolactivities',
          'staffs',
          'forum'
        ].indexOf($route.name) > -1
      "
    >
      <q-toolbar flat>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          {{ title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer
      v-if="
        [
          'sdashboard',
          'profile',
          'schooldept',
          'schoolactivities',
          'staffs'
        ].indexOf($route.name) > -1
      "
    >
      <q-toolbar>
        <q-toolbar-title class="text-center"
          >Middle-Sex-School App</q-toolbar-title
        >
      </q-toolbar>
    </q-footer>

    <q-drawer
      v-if="
        [
          'sdashboard',
          'profile',
          'schooldept',
          'schoolactivities',
          'staffs',
          'forum'
        ].indexOf($route.name) > -1
      "
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-primary"
    >
      <q-scroll-area
        style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
      >
        <q-list class="text-white">
          <q-item v-ripple clickable active-class="sec" to="/sdashboard" exact>
            <q-item-section avatar>
              <q-icon name="school" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            v-if="userDetails.select === 'Student'"
            clickable
            active-class="sec"
            v-ripple
            to="/profile"
            exact
          >
            <q-item-section avatar>
              <q-icon name="info" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Student Info</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            v-if="userDetails.select === 'Student'"
            clickable
            active-class="sec"
            v-ripple
            to="/forum"
            exact
          >
            <q-item-section avatar>
              <q-icon name="chat" />
            </q-item-section>
            <q-item-section>
              <q-item-label
                >Forum
                <q-badge color="negative">
                  New
                </q-badge>
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            v-if="userDetails.select === 'Non-Teaching-Staff'"
            clickable
            active-class="sec"
            v-ripple
            to="/profile"
            exact
          >
            <q-item-section avatar>
              <q-icon name="info" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Non-Teaching-Staff Info</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="logOutUsers()">
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Logout</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="70px" class="q-mb-sm">
            <q-img :src="userDetails.image" :placeholder-src="placeHolder" />
          </q-avatar>
          <!-- <q-avatar v-else color="primary" size="58px" text-color="white">
            <q-img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar> -->
          <div class="text-weight-bold">{{ userDetails.name }}</div>
          <div>{{ userDetails.email }}</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <transition
        name="transitions"
        leave-active-class="animated fadeOut faster"
        enter-active-class="animated fadeIn faster"
        mode="out-in"
      >
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "MyLayout",
  data() {
    return {
      leftDrawerOpen: false,
      placeHolder: "https://cdn.quasar.dev/img/boy-avatar.png"
    };
  },
  computed: {
    ...mapState("store", ["userDetails"]),
    title() {
      let currentPath = this.$route.fullPath;
      if (currentPath == "/sdashboard") return "Dashboard";
      else if (currentPath == "/profile" && this.userDetails.select === "Staff")
        return "Staff Information";
      else if (
        currentPath == "/profile" &&
        this.userDetails.select === "Non-Teaching-Staff"
      )
        return "Non-Teaching-Staff Information";
      else if (
        currentPath == "/profile" &&
        this.userDetails.select === "Student"
      )
        return "Student Information";
      else if (currentPath === "/schooldept") return "School Departments";
      else if (currentPath === "/schoolactivities") return "School Activities";
      else if (currentPath === "/staffs") return "All Staffs";
      else if (currentPath === "/forum") return "Chat Room";
    }
  },
  methods: {
    ...mapActions("store", ["logOutUsers"])
  }
};
</script>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css");
.sec {
  color: #dfa9f8;
}
</style>
