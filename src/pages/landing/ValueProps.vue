
<template>
  <div class="container value-props">
    <div class="row align-top">
      <div class="col-sm offset-sm-1"
          v-for="card in cards"
          :key="card.id">
            <Card
              :header="card.header"
              :content="card.content"
              :imgUrl="card.image" />
      </div>
    </div>
  </div>
</template>

<script>
  import Card from './../../components/Card.vue';
  export default {
    name: 'value-props',
    props: {
      header: String,
      subtitle: String
    },
    components: {
      Card
    },
    data() {
      return {
        cards: [
              {
                id: 1,
                header: "assess",
                content: "We try to underWe try to understand the key needs in a product organization by understanding their processes.",
                image: require('../../assets/landing/assess.svg')
              },
              {
                id: 2,
                header: "boost",
                content: "Through training and workshops we help new product managers acquire key skills and problem solve",
                image: require("../../assets/landing/boost.svg")
              },
              {
                id: 3,
                header: "enable",
                content: "Our coaching approach to drive product managers and teams to the next level.",
                image: require("../../assets/landing/enable.svg")
              }
            ]
      }

      }
    }

</script>


<style scoped>


  h1 {
    font-weight: bold;
    font-size: 45px;
    line-height: 61px;
    margin-top: 40px;
    margin-bottom: 0px;
  }

  p {
    margin-top: 10px;
    font-size: 30px;
    line-height: 41px;
  }




</style>
