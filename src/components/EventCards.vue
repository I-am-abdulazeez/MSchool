<template>
  <div class="eventCards">
    <div v-if="!events.length">
      <div class="text-center">
        <q-spinner-tail color="primary" size="2em" />
        <q-tooltip :offset="[0, 8]">QSpinnerTail</q-tooltip>
      </div>
    </div>
    <q-card
      v-for="eventCard in events"
      :key="eventCard.id"
      bordered
      class="animated fadeInRight my-card q-mb-md"
    >
      <q-card-section>
        <div class="text-h6 text-secondary">{{ eventCard.topic }}</div>
      </q-card-section>

      <q-separator light inset />

      <q-card-section>
        {{ eventCard.content }}
      </q-card-section>

      <q-separator light inset />
      <div class="q-pa-md text-subtitle2">Due: {{ eventCard.due }}</div>
      <q-card-actions v-if="userDetails.select === 'Staff'">
        <q-btn
          text-color="negative"
          size="md"
          icon="delete"
          flat
          @click="deleteEvent(eventCard.id)"
          >Delete</q-btn
        >
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import { mapState, mapActions } from "vuex";
import { db } from "../boot/firebase";

export default {
  name: "eventCard",
  data: () => ({
    eventCards: [],
  }),
  computed: {
    ...mapState("store", ["userDetails", "events"]),
  },
  methods: {
    deleteEvent(eventCard) {
      this.$q
        .dialog({
          title: `Confirm`,
          message: `Delete Event? it will get deleted in the database immediately! `,
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          db.collection("events")
            .doc(eventCard)
            .delete()
            .then(() => {
              //success
              this.$q.notify({
                message: "Event deleted successfully",
                classes: "quick",
                color: "positive",
              });
            })
            .catch((err) => {
              //error
              this.$q.notify({
                message: `${err.message}`,
                classes: "quick",
                color: "negative",
              });
            });
        });
    },
  },
};
</script>

<style lang="scss">
.eventCards {
  .my-card {
    border-left: 4px solid #af40e2;
  }
}
</style>
