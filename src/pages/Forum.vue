<template>
  <q-page class="q-pa-md" id="forum">
    <div class="text-center">
      <q-badge class="text-subtitle1 text-white q-mt-none q-mb-sm">
        Where Student Interact!
      </q-badge>
    </div>
    <div class="row justify-center">
      <div style="width: 100%; max-width: 400px">
        <q-chat-message
          v-chat-scroll="{ always: false, smooth: true }"
          v-for="chat in messages"
          :key="chat.id"
          :text="[chat.message]"
          :stamp="chat.timestamp"
        />
      </div>
    </div>
    <CreateMessage />
  </q-page>
</template>

<script>
import { mapState } from "vuex";
import CreateMessage from "../components/CreateMessage";
import { db } from "../boot/firebase";
import moment from "moment";

export default {
  name: "Forum",
  props: ["name"],
  data: () => ({
    messages: []
  }),
  components: {
    CreateMessage
  },
  created() {
    let ref = db.collection("chats").orderBy("timestamp");

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: this.userDetails.name,
            message: doc.data().message,
            timestamp: moment(doc.data().timestamp).format("LTS")
          });
        }
      });
    });
  },
  computed: {
    ...mapState("store", ["userDetails", "allUsers"])
  }
};
</script>

<style lang="scss">
</style>