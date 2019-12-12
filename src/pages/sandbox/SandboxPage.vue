<template>
  <section class='sandbox'>
    <Framework/>
  </section>

</template>

<script lang="js">

import Framework from './../../components/Framework.vue'


  export default  {
    name: 'sandbox-page',
    props: [],
    components: {
      Framework
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
