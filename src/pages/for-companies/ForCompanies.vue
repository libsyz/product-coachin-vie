<template>

  <section class="for-companies">
    <HeroPage informationHeader="take your product team to the next level"
              informationText="We are your ultimate solution to the most difficult product challenges you can imagine"/>
    <BlockQuote quote="We are an enthusiastic group of product people ding the best work we can. We want to disrupt hte product industry and take it to the next level. We want to bring digitialization to your indsutry and solve all the difficult problems that are stopping you from scaling your business."/>
    <div class="cards-container">
      <CardProduct v-for="card in cards"
                   :key="card.id"
                   :imgUrl="card.imgUrl"
                   :headerText="card.headerText"
                   :bodyText="card.bodyText"/>
    </div>


    <StayInTouch header="Ready to uplift your product teams?"
                 body="We offer free 1-day taster workshops. Contact us to know more"
                 cta="Get in Touch"/>
    <section class="mavericks-team">
      <h1> Our Success Stories </h1>
      <CarouselCaseStudies/>
    </section>
  </section>


</template>

<script lang="js">

  import HeroPage from './../../components/HeroPage.vue'
  import BlockQuote from './../../components/BlockQuote.vue'
  import CardProduct from './../../components/CardProduct.vue'
  import StayInTouch from './../../components/StayInTouch.vue'
  import CarouselCaseStudies from './../../components/CarouselCaseStudies.vue'

  export default  {
    name: 'for-companies',
    components: {
      HeroPage,
      BlockQuote,
      CardProduct,
      StayInTouch,
      CarouselCaseStudies
    },
    data () {
      return {
        cards: [
          {
            imgUrl: require('./../../assets/for-companies/presentation.png'),
            headerText: "PRODUCT DISCOVERY",
            bodyText: "We help you build top-notch Product Teams through capability building, on-site coaching and staffing."
          },
          {
            imgUrl: require('./../../assets/for-companies/computer.png'),
            headerText: "PRODUCT TRAINING",
            bodyText: "Tailored training courses and workshops that give your product teams the skills they need to succeed."
          },
          {
            imgUrl: require('./../../assets/for-companies/plant.png'),
            headerText: "1 ON 1 COACHING",
            bodyText: "We become part of your organization and help you leap forward in your product development journey."
          },
        ]
      }
    }
}


</script>

<style scoped>

.cards-container {
  display: flex;
  justify-content: space-between;
  padding: 80px 160px;
  background-color: #F0EFFF;

}

</style>
