<template lang="html">

  <section class="mapbox">
    <div id="map"></div>
  </section>

</template>

<script lang="js">

  const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
  mapboxgl.accessToken = 'pk.eyJ1IjoibGlic3l6bWF2ZXJpY2tzIiwiYSI6ImNrNGR2Nm9qeTA3MHYzZW5vMnR2ajZ4dG4ifQ.Xc57Kii_RyyCpkwe4yUYVg'

  export default  {
    name: 'mapbox',
    props: [],
    mounted () {
      const map = new mapboxgl.Map({
          container: 'map',
          center: [103.818213,1.26496],
          zoom: 16,
          style: 'mapbox://styles/mapbox/streets-v11'
        })

      new mapboxgl.Marker({
        color: "#6C63FF"
      })
      .setLngLat([103.818213, 1.26496])
      .addTo(map)



    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
 }

</script>

<style scoped>


  .mapbox {

  }

  #map {
    height: 400px;
    width: 400px;
    overflow: visible;
  }
</style>
