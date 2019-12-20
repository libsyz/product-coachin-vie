
<template lang="html">
  <section class="card-differentiator">
    <img :src="url" />
    <div class="card-differentiator-infos">
      <h2>{{ header }}</h2>
      <p> {{ body }}</p>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'card-differentiator',
    props: {
      header: String,
      body: String,
      url: {
        type: String,
        default: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
      }
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
  .card-differentiator {
    overflow: hidden;
    height: 300px;
    min-width: 400px;
    background: white;
    box-shadow: 0 15px 35px rgba(126, 87, 88, 0.1)
              , 0 5px 15px rgba(0, 0, 0, 0.07);
    display: flex;
    align-items: center;
}

.card-differentiator img {
  height: 100%;
  width: 50%;
  object-fit: cover;
}

.card-differentiator h2 {
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.card-differentiator p {
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 0;
  margin-top: 8px;
}

.card-differentiator .card-differentiator-infos {
  padding: 16px;
}

@media(min-width: 572px) {
  .card-differentiator {
    margin-bottom: 20px;
  }
}

</style>
