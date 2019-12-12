<template>

  <section class="for-individuals">
    <HeroPage informationHeader="turbo charge your product career"
              informationText="Take your product management skill to the next level with our workshops, courses and individual coaching packages."/>
    <BlockQuote quote="At Mavericks we believe the next source of competitive advantage is product thinking. Those organizations that will be able to bring across the importance of being in constant search of value for customers across UX, Engineering, Sales and Customers Success will be in the best conditions to excel."/>
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
            headerText: "FREE MEETUPS",
            bodyText: "We are on a quest to build a strong Product Management community. We run free high quality workshops and discussion tables. Come Join us!"
          },
          {
            imgUrl: require('./../../assets/for-companies/computer.png'),
            headerText: "PUBLIC MASTERCLASSES",
            bodyText: "Practical, hands-on and interactive workshops where you will learn up to date tools, skills and techniques"
          },
          {
            imgUrl: require('./../../assets/for-companies/plant.png'),
            headerText: "1 ON 1 COACHING",
            bodyText: "Hire a coach on demand that unleash your best thinking and helps you frame the most challenging product conversations"
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
