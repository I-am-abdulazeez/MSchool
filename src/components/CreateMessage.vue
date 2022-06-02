<template>
  <q-footer>
    <q-toolbar class="bg-white shadow-2">
      <q-form class="full-width" @submit="sendMessage">
        <q-input
          filled
          bottom-slots
          rounded
          v-model="newMessage"
          placeholder="Type a Message"
          counter
          dense
        >
          <template v-slot:before>
            <q-avatar>
              <q-img :src="userDetails.image" :placeholder-src="placeHolder" />
            </q-avatar>
          </template>

          <template v-slot:after>
            <q-btn round flat bg-color="white" dense size="md" icon="send" />
          </template>
        </q-input>
      </q-form>
    </q-toolbar>
  </q-footer>
</template>

<script>
import { mapState } from "vuex";
import { db, firebaseAuth } from "../boot/firebase";

export default {
  data: () => ({
    newMessage: "",
    errorText: "",
    placeHolder: "https://cdn.quasar.dev/img/boy-avatar.png"
  }),
  // props: ["name"],
  computed: {
    ...mapState("store", ["userDetails"])
  },
  methods: {
    sendMessage() {
      if (this.newMessage) {
        db.collection("chats")
          .add({
            id: firebaseAuth.currentUser.uid,
            message: this.newMessage,
            name: this.userDetails.name,
            timestamp: Date.now()
          })
          .catch(err => {
            console.log(err);
          });
        this.newMessage = null;
        this.errorText = null;
      } else {
        this.errorText = "A message must be entered!";
      }
    }
  }
};
</script>