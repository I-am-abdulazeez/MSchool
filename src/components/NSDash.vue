<template>
  <div class="NStaff">
    <div class="row">
      <div class="col-6 q-pa-sm">
        <q-card to="/" class="g-1 text-white text-center q-pa-md">
          <q-icon name="class" class="f-14"></q-icon>
          <q-card-section class="q-pa-none q-pt-sm">
            <div class="text-h6">School Department</div>
          </q-card-section>
          <q-separator class="q-mt-sm" dark />
          <q-card-actions align="center">
            <q-btn size="sm" flat>click me</q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-6 q-pa-sm">
        <q-card class="g-2 text-white text-center q-pa-md">
          <q-icon name="local_activity" class="f-14"></q-icon>
          <q-card-section class="q-pa-none q-pt-sm">
            <div class="text-h6">School Activities</div>
          </q-card-section>
          <q-separator class="q-mt-sm" dark />
          <q-card-actions align="center">
            <q-btn size="sm" to="/schoolactivities" flat>click me</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <div class="row">
      <div class="col-6 q-pa-sm">
        <q-card class="g-3 text-white text-center q-pa-md">
          <q-icon name="emoji_people" class="f-14"></q-icon>
          <q-card-section class="q-pa-none q-pt-sm">
            <div class="text-h6">School Staffs</div>
          </q-card-section>
          <q-separator class="q-mt-sm" dark />
          <q-card-actions align="center">
            <q-btn size="sm" to="/staffs" flat>click me</q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-6 q-pa-sm">
        <q-card class="g-4 text-white text-center q-pa-md">
          <q-icon name="create" class="f-14"></q-icon>
          <q-card-section class="q-pa-none q-pt-sm">
            <div class="text-h6">Unihub</div>
          </q-card-section>
          <q-separator class="q-mt-sm" dark />
          <q-card-actions align="center">
            <q-btn size="sm" to="openLink" flat>click me</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { openURL } from "quasar";
export default {
  methods: {
    openLink() {
      openURL(
        "https://ethos.mdx.ac.uk/authenticationendpoint/login.do?Name=PreLoginRequestProcessor&commonAuthCallerPath=%252Fcas%252Flogin&forceAuth=true&passiveAuth=false&service=https%3A%2F%2Fmyunihub.mdx.ac.uk%2Fc%2Fportal%2Flogin&tenantDomain=carbon.super&sessionDataKey=8e5cfac7-9127-4d1f-9ffa-b93aacbfa590&relyingParty=myunihub_portal_PROD&type=cas&sp=myunihub_portal_PROD&isSaaSApp=false&authenticators=BasicAuthenticator:LOCAL"
      );
    }
  }
};
</script>

<style>
</style>