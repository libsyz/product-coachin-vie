<template>
  <section class='sandbox'>
    <tryout/>
  </section>

</template>

<script lang="js">

import tryout from './../../components/tryout.vue'


  export default  {
    name: 'sandbox-page',
    props: [],
    components: {
      tryout
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
