<template>
  <div class="landing">
    <Hero />
    <section class="value-props">
      <ValueProps header="How can we help?" subtitle="We represent Product Management" />
    </section>
    <section class="for-companies-for-individuals">
      <b-container class="bv-example-row">
        <b-row>
          <b-col v-for="card in cardsModalities" :key="card.id" sm="6" xs="12">
            <CardModality
              :iconUrl="card.iconUrl"
              :headerText="card.headerText"
              :bodyText="card.bodyText"
              :bodyCta="card.bodyCta"
              :goToUrl="card.goToUrl"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="testimonials">
      <TestimonialsLanding />
      <CarouselTestimonials />
    </section>
    <section class="join-our-events">
      <JoinOurEvents />
    </section>
    <section class="benefits">
      <Benefits />
    </section>
    <section class="mavericks-team">
      <h1>Meet our Amazing Team</h1>
      <p>We are proud to have some of the best minds in product management, technology and design.</p>
      <CarouselTeam />
    </section>
    <section class="stay-in-touch">
      <StayInTouch />
    </section>
  </div>
</template>

<script>
import Hero from "./../../components/Hero.vue";

import ValueProps from "./ValueProps.vue";
import TestimonialsLanding from "./TestimonialsLanding.vue";
import JoinOurEvents from "./JoinOurEvents.vue";
import Benefits from "./Benefits.vue";
import StayInTouch from "./StayInTouch.vue";
import CardModality from "./../../components/CardModality.vue";
import CarouselTestimonials from "./../../components/CarouselTestimonials.vue";
import CarouselTeam from "./../../components/CarouselTeam.vue";

export default {
  name: "landing-page",
  components: {
    Hero,
    ValueProps,
    CardModality,
    TestimonialsLanding,
    CarouselTestimonials,
    CarouselTeam,
    JoinOurEvents,
    Benefits,
    StayInTouch
  },
  data() {
    return {
      cardsModalities: [
        {
          iconUrl: require("./../../assets/landing/user.png"),
          headerText: "for individuals",
          bodyText:
            "Get ahead in your product management career with our masterclasses and 1:1 coaching.",
          bodyCta: "Learn More",
          goToUrl: "/for-individuals"
        },
        {
          iconUrl: require("./../../assets/landing/enterprise.png"),
          headerText: "for companies",
          bodyText:
            "We help you build top-notch Product Teams through capability building, on-site coaching and staffing.",
          bodyCta: "Learn More",
          goToUrl: "/for-companies"
        }
      ]
    };
  }
};
</script>

<style scoped>
.value-props {
  padding: 0px 100px;
}

.for-companies-for-individuals {
  padding: 60px 100px;
  background-color: #f0efff;
  display: flex;
  justify-content: space-between;
}

.join-our-events {
  padding: 60px 100px;
  background-color: #f0efff;
}

.benefits {
  padding: 60px 100px;
  background-color: #fff;
}

.mavericks-team {
  padding: 60px 100px;
  background-color: #f0efff;
}

.stay-in-touch {
  padding: 60px 100px;
}

@media (max-width: 572px) {
  .for-companies-for-individuals,
  .value-props,
  .join-our-events,
  .stay-in-touch {
    padding: 60px 10px;
  }
}
</style>
