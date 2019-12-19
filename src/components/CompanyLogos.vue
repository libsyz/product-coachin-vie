<template lang="html">

  <section class="company-logos">
    <div class="logo-wrapper"
           v-for="image in images"
           :key="image.id">
      <img class="logo"
           :src="image.url" alt="">
    </div>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'company-logos',
    props: [],
    mounted () {

    },
    data () {
      return {
        images: [
          {id: 1,
           url: require('./../assets/client-logos/uob.png')},
           {id: 2,
           url: require('./../assets/client-logos/dbs.png')},
           {id: 1,
           url: require('./../assets/client-logos/roche.png')},
           {id: 1,
           url: require('./../assets/client-logos/aprati.png')},
           {id: 1,
           url: require('./../assets/client-logos/redmart.png')},

        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped>
  .company-logos {
    padding: 15px 30px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .logo-wrapper {
    width: 200px;
  }

  .logo {
    height: 60px;
  }
</style>
