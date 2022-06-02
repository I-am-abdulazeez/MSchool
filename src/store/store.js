import Vue from "vue"
import {
  date,
  Notify
} from 'quasar'

import {
  firebaseAuth,
  firebaseDb,
  firebaseStorage,
  db
} from '../boot/firebase'

const state = {
  userDetails: {},
  allUsers: {},
  events: {},
}

const mutations = {
  setUserDetails(state, payload) {
    state.userDetails = payload
  },
  addAllUsers(state, payload) {
    Vue.set(state.allUsers, payload.userId, payload.userDetails)
  },
  setEvents(state, payload) {
    if (payload) {
      state.events = payload
    } else {
      state.events = {}
    }
  },
}

const actions = {
  registerUsers({}, payload) {
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        const userId = res.user.uid;
        console.log(res)
        Notify.create({
          message: 'Regsitration Successful!.',
          color: 'positive',
          classes: 'quick'
        })
        //set user to the database
        firebaseDb.ref(`users/${userId}`).set({
          name: payload.name,
          email: payload.email,
          select: payload.select,
          department: payload.department
        });
      })
      .catch(err => {
        console.log(err)
        Notify.create({
          message: `${err.message}`,
          classes: 'quick',
          color: 'negative'
        })
      })

    console.log(payload)
  },


  loginUsers({}, payload) {
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(res => {
        console.log(res);
        Notify.create({
          message: 'Success!',
          classes: 'quick',
          color: 'positive'
        })
      })
      .catch(err => {
        console.log(err);
        Notify.create({
          message: `${err.message}`,
          classes: 'quick',
          color: 'negative'
        })
      })
  },


  //reload or when app is closed and reopned
  handleAuthStateChange({
    commit,
    dispatch
  }) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        const userId = user.uid;
        console.log(userId)
        firebaseDb.ref(`users/${userId}`).once('value', snapshot => {
          let userDetails = snapshot.val()
          commit('setUserDetails', {
            name: userDetails.name,
            email: userDetails.email,
            select: userDetails.select,
            userId: userId,
            department: userDetails.department,
            image: userDetails.image
          })
          dispatch('getUsers')
        })
        dispatch('getEvents')
        this.$router.push('/sdashboard').catch(err => {})
      } else {
        commit('setUserDetails', {}),
          Notify.create({
            message: 'Logged out. Please Login',
            classes: 'quick',
            color: 'primary'
          });
        this.$router.replace('/').catch(err => {})
      }
    })
  },

  logOutUsers() {
    firebaseAuth.signOut()
      .catch(err => {
        console.loge(err)
      })
  },

  //Let users change Profile Picture
  saveUsersProfile({
    commit,
    dispatch
  }, payload) {
    // Get the File
    const file = payload;
    const extension = file.name.split(".").pop();
    const uploadDate = new Date();
    const fileName = `${firebaseAuth.currentUser.uid}--${uploadDate.toDateString()}.${extension}`;
    firebaseStorage
      .ref(`users/profile/${fileName}`)
      .put(file)
      .then(res => {
        console.log(res);
        res.ref.getDownloadURL().then(link => {
          //getting the new profile picture from firebase Storage
          firebaseAuth.currentUser.updateProfile({
            photoURL: link
          }).then(() => {
            //Update the user with the Link
            let userId = firebaseAuth.currentUser.uid
            firebaseDb.ref(`users/${userId}`).update({
              image: link
            })
          })
          const userId = firebaseAuth.currentUser.uid;
          console.log(userId)
          firebaseDb.ref(`users/${userId}`).once('value', snapshot => {
            console.log(snapshot.val())
            let userDetails = snapshot.val();
            commit('setUserDetails', {
              name: userDetails.name,
              email: userDetails.email,
              select: userDetails.select,
              department: userDetails.department,
              userId: userId,
              image: link
            })
            dispatch('getUsers')
          })
        })

      })
      .catch(err => {
        console.log(err);
      });
  },

  getUsers({
    commit
  }) {
    //get All Available users(Registered users)
    firebaseDb.ref('users').on('child_added', snapshot => {
      let userDetails = snapshot.val();
      console.log(userDetails)
      let userId = snapshot.key;
      commit('addAllUsers', {
        userDetails,
        userId
      })
    })
  },

  //Savingposts
  saveEvents({}, payload) {
    db.collection('events').add({
      due: date.formatDate(payload.due, 'Do MMM YYYY'),
      content: payload.content,
      topic: payload.topic
    }).then(() => {
      Notify.create({
        message: `Event Added`,
        classes: 'quick',
        color: 'primary'
      })
    })
  },

  getEvents({
    commit
  }) {
    db.collection('events').orderBy('due', 'desc').onSnapshot(snapshot => {
      let eventsArray = []
      snapshot.forEach(doc => {
        let event = doc.data()
        event.id = doc.id
        eventsArray.push(event)
      })
      commit('setEvents', eventsArray)
    })
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
