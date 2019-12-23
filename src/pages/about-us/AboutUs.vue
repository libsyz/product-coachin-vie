<template lang="html">

  <section class="about-us">

    <section class="story">
      <OurStory/>
    </section>

    <section class="our-mission">
      <BlockQuote :quote="visionQuote"/>
    </section>

    <section class="our-difference">
      <h2> The Mavericks Difference </h2>
      <b-container fluid>
        <b-row>
          <b-col col="12" lg="4" v-for="card in cards"
                        :key="card.id">
            <CardDifferentiator :header="card.header"
                                :body="card.body"/>
          </b-col>
        </b-row>
      </b-container>

    </section>

    <section class="testimonials">
      <h2> What Our Clients Say </h2>
      <CarouselTestimonials/>
    </section>

    <section class="where-to-find">
      <h2> Where to Find Us </h2>
      <div class="location-wrapper">
        <div class="location-details">
          <ul class="address">
            <li>1 Harbourfront Avenue, #13-03, </li>
            <li>Keppel Bay Tower, </li>
            <li>Singapore 098632 </li>
            <li> <strong>hello@mavericks-consulting.com </strong></li>
            <li>(65) 82998997 </li>
        </ul>
        </div>
        <mapbox/>
      </div>
    </section>

    <section class="contact us">
      <StayInTouch header="Let's Chat!"
                   body="We know some great coffee places in Singapore"
                   cta="Get in Touch"/>
    </section>



  </section>



</template>

<script lang="js">

  import CarouselTestimonials from './../../components/CarouselTestimonials.vue'
  import StayInTouch from './../../components/StayInTouch.vue'
  import OurStory from './../../components/OurStory.vue'
  import BlockQuote from './../../components/BlockQuote.vue'
  import CardDifferentiator from './../../components/CardDifferentiator.vue'
  import mapbox from './../../components/mapbox.vue'


  export default  {
    name: 'about-us',
    props: [],
    components: {
      CarouselTestimonials,
      StayInTouch,
      OurStory,
      BlockQuote,
      CardDifferentiator,
      mapbox
    },
    mounted () {

    },
    data () {
      return {
        visionQuote: "We are an enthusiastic group of product people ding the best work we can. We want to disrupt hte product industry and take it to the next level. We want to bring digitialization to your indsutry and solve all the difficult problems that are stopping you from scaling your business.",
        cards: [
          {
            header: "We tailor",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae veniam laudantium perferendis."
          },
          {
            header: "We implement",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae veniam laudantium perferendis."
          },
          {
            header: "We different",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae veniam laudantium perferendis."
          },
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
  .about-us {

  }

  .our-difference {
    padding: 60px 0px;
  }

  .our-difference > h2 {
    padding-bottom: 60px;
  }

  .where-to-find {
    padding: 40px 30px;
    background-color: #F0EFFF;
  }

  .where-to-find > h2 {
    padding-bottom: 30px;
  }

  .location-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .address {
    text-align: left;
    font-size: 25px;
    line-height: 35px;
    list-style-type: none;
    padding-inline-start: 0px;
  }

</style>
