<template lang="html">

  <section class="card-differentiator">

    <img :src="url" />
  <div class="card-differentiator-infos">
    <h2>{{ header }}</h2>
    <p> {{ description }}</p>

</div>


  </section>

</template>

<script lang="js">

  export default  {
    name: 'card-differentiator',
    props: {
      header: String,
      body: String,
      url: String
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

<style scoped lang="scss">
  .card-differentiator {
  overflow: hidden;
  height: 120px;
  background: white;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
}

.card-differentiator img {
  height: 100%;
  width: 120px;
  object-fit: cover;
}

.card-differentiator h2 {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.card-differentiator p {
  font-size: 12px;
  line-height: 1.4;
  opacity: .7;
  margin-bottom: 0;
  margin-top: 8px;
}

.card-differentiator .card-differentiator-infos {
  padding: 16px;
}

</style>
