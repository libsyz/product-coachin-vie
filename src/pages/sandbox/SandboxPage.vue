<template>
  <section class='sandbox'>
    <mapbox/>
  </section>

</template>

<script lang="js">

import mapbox from './../../components/mapbox.vue'


  export default  {
    name: 'sandbox-page',
    props: [],
    components: {
      mapbox
    },
    mounted () {

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
  .sandbox {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FAFAFA;
    height: 100vh;
  }
</style>
