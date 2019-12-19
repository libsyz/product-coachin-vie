<template lang="html">

  <section class="about-us">

    <section class="story">
      <OurStory/>
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
      <StayInTouch/>
    </section>



  </section>



</template>

<script lang="js">

  import CarouselTestimonials from './../../components/CarouselTestimonials.vue'
  import StayInTouch from './../../components/StayInTouch.vue'
  import OurStory from './../../components/OurStory.vue'

  export default  {
    name: 'about-us',
    props: [],
    components: {
      CarouselTestimonials,
      StayInTouch,
      OurStory
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
  .about-us {

  }
</style>
