<template>
  <q-page class="q-pa-lg">
    <h5 class="text-h5 text-center q-mt-none">School Activities</h5>
    <div>
      <EventCards class="q-mb-md" />
    </div>
    <div
      class="text-center"
      v-if="userDetails.select === 'Staff' || userDetails.select === 'Student'"
    >
      <q-btn
        push
        color="white"
        text-color="accent"
        icon-right="add_circle"
        label="Add Event"
        @click="bar = true"
      />
    </div>

    <div>
      <q-dialog v-model="bar" persistent>
        <q-card style="width: 900px; max-width: 100vw;">
          <q-bar>
            <h5 class="text-h5 q-ma-none">Add Event</h5>

            <q-space />

            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip>Close</q-tooltip>
            </q-btn>
          </q-bar>

          <q-card-section class="q-pa-lg">
            <q-form ref="eventForm" @submit="submitEventForm">
              <q-input
                class="q-mb-md"
                v-model="eventsData.topic"
                label="Topic"
                type="text"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
              />
              <q-input
                class="q-mb-md"
                v-model="eventsData.content"
                label="Content"
                type="textarea"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
              />
              <q-input
                v-model="eventsData.due"
                mask="date"
                label="Posted On"
                :rules="['date']"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date
                        v-model="eventsData.due"
                        @input="() => $refs.qDateProxy.hide()"
                      />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>

              <div class="row q-mt-md">
                <q-space />
                <q-btn
                  type="submit"
                  color="primary"
                  small
                  label="Save"
                  :loading="loading"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import EventCards from "../components/EventCards";
import { mapState, mapActions } from "vuex";
import { db } from "../boot/firebase";

export default {
  name: "schoolactivities",
  data: () => ({
    bar: false,
    eventsData: {
      content: "",
      due: null,
      topic: ""
    },
    loading: false
  }),
  components: {
    EventCards
  },
  mounted() {},
  computed: {
    ...mapState("store", ["userDetails"])
  },
  methods: {
    ...mapActions("store", ["saveEvents"]),
    submitEventForm() {
      if (this.$refs.eventForm.validate()) {
        this.loading = true;
        this.saveEvents(this.eventsData);
        setTimeout(() => {
          this.loading = false;
          this.bar = false;
        }, 500);
      }
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap");

body {
  font-family: "Quicksand", sans-serif !important;
}
.q-page {
  font-family: "Quicksand", sans-serif !important;
  .owl-theme .owl-dots .owl-dot.active span,
  .owl-theme .owl-dots .owl-dot:hover span {
    background: $secondary;
  }
}
</style>