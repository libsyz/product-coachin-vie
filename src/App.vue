<template>
  <div id="app">
    <Navbar/>
    <section class="hero">
      <Hero/>
    </section>
    <section class="value-props">
      <ValueProps
              header= "How can we help?"
              subtitle= "We represent Product Management" />
    </section>
    <section class="for-companies-for-individuals">
      <CardModality v-for="card in cardsModalities"
              :key="card.id"
              :iconUrl="card.iconUrl"
              :headerText="card.headerText"
              :bodyText="card.bodyText"
              :bodyCta="card.bodyCta" />
    </section>
    <section class="testimonials">
      <TestimonialsLanding/>
      <CarouselTestimonials/>
    </section>
    <section class="join-our-events">
      <JoinOurEvents/>
    </section>
    <section class="benefits">
      <Benefits/>
    </section>
    <section class="mavericks-team">
      <h1> Meet our Amazing Team </h1>
      <p> We are proud to have some of the best minds in product management, technology and design. </p>
      <CarouselTeam/>
    </section>
    <section class="stay-in-touch">
      <StayInTouch/>
    </section>
    <Footer/>
  </div>
</template>

<script>

import ValueProps from './pages/landing/ValueProps.vue';
import TestimonialsLanding from './pages/landing/TestimonialsLanding.vue';
import JoinOurEvents from './pages/landing/JoinOurEvents.vue';
import Benefits from './pages/landing/Benefits.vue'
import StayInTouch from './pages/landing/StayInTouch.vue'

import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import CardModality from './components/CardModality.vue';
import CarouselTestimonials from './components/CarouselTestimonials.vue';
import CarouselTeam from './components/CarouselTeam.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    Hero,
    ValueProps,
    CardModality,
    TestimonialsLanding,
    CarouselTestimonials,
    CarouselTeam,
    JoinOurEvents,
    Benefits,
    StayInTouch,
    Footer
  },
  data() {
    return {
      cardsModalities: [
        {
          iconUrl: require("./assets/landing/user.png"),
          headerText: "for individuals",
          bodyText: "Get ahead in your product management career with our masterclasses and 1:1 coaching.",
          bodyCta: "Learn More"
        },
        {
          iconUrl: require("./assets/landing/enterprise.png"),
          headerText: "for companies",
          bodyText: "We help you build top-notch Product Teams through capability building, on-site coaching and staffing.",
          bodyCta: "Learn More"
        }
      ]
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');

#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
}

.value-props {
  padding: 0px 100px;
}


.for-companies-for-individuals {
  padding: 60px 100px;
  background-color: #F0EFFF;
  display: flex;
  justify-content: space-between;
}

.join-our-events {
  padding: 60px 100px;
  background-color: #F0EFFF;
}

.benefits {
  padding: 60px 100px;
  background-color: #fff;
}

.mavericks-team {
  padding: 60px 100px;
  background-color: #F0EFFF;
}

.stay-in-touch {
  padding: 60px 100px;
}
</style>
