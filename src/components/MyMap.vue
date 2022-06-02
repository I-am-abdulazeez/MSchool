<template>
  <div class="q-pa-sm">
    <div class="q-ma-auto">
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="300"
            height="300"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=middle%20sex%20college%20maurius&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          >
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style>
.mapouter {
  position: relative;
}
.gmap_outer {
  width: 90%;
  margin: 0 auto;
}
iframe#gmap_canvas {
  border-radius: 5px;
  width: 100%;
}
</style>