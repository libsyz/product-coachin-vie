<template lang="html">

  <section class="about-us">

    <section class="story">
      <OurStory/>
    </section>

    <section class="our-mission">
      <BlockQuote :quote="visionQuote"/>
    </section>

    <section class="our-difference">
      <h2> Our Difference</h2>
    </section>

    <section class="testimonials">
      <CarouselTestimonials/>
    </section>

    <section class="where-to-find">
      <h3> Where to find Us </h3>
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

  export default  {
    name: 'about-us',
    props: [],
    components: {
      CarouselTestimonials,
      StayInTouch,
      OurStory,
      BlockQuote
    },
    mounted () {

    },
    data () {
      return {
        visionQuote: "We are an enthusiastic group of product people ding the best work we can. We want to disrupt hte product industry and take it to the next level. We want to bring digitialization to your indsutry and solve all the difficult problems that are stopping you from scaling your business."

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
</style>
