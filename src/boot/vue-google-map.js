import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAiVCW9Uqwx7xhSeAhdJfYd5_5lASNK25M',
    libraries: 'places',
  },
  installComponents: false
});

document.addEventListener('DOMContentLoaded', () => {
  Vue.component('google-map', VueGoogleMaps.Map);
  Vue.component('GmapMarker', VueGoogleMaps.Marker);
})
