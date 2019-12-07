
<template>
  <div>
  <h1>
    Benefits of Product Coaching
  </h1>
  <BenefitLeft
    :imageUrl="benefitOne.imageUrl"
    :headerText="benefitOne.headerText"
    :bodyText="benefitOne.bodyText"/>
  <BenefitRight
    :imageUrl="benefitTwo.imageUrl"
    :headerText="benefitTwo.headerText"
    :bodyText="benefitTwo.bodyText"/>
  <BenefitLeft
    :imageUrl="benefitThree.imageUrl"
    :headerText="benefitThree.headerText"
    :bodyText="benefitThree.bodyText"/>
  <BenefitRight
    :imageUrl="benefitFour.imageUrl"
    :headerText="benefitFour.headerText"
    :bodyText="benefitFour.bodyText"/>
  </div>
</template>


<script>

import BenefitRight from './../../components/BenefitRight.vue';
import BenefitLeft from './../../components/BenefitLeft.vue';

  export default {
    name: 'benefits-landing',
    components: {
      BenefitRight,
      BenefitLeft
    },
    data() {
      return {
         benefitOne: {
         imageUrl: require("./../../assets/landing/launch.png"),
         headerText: "scale your product team",
         bodyText: "Take your product function to the next level. We help teams evolve their practices and tools to reach new heights."
        },
         benefitTwo: {
         imageUrl: require("./../../assets/landing/app-development.png"),
         headerText: "strategy and tech sync",
         bodyText: "Product teams that are aligned and know exactly what they have to do at any given time, in any situation."
        },
         benefitThree: {
         imageUrl: require("./../../assets/landing/launch-2.png"),
         headerText: "product mindset",
         bodyText: "Professionals from all domains understand the need to put their customers first and deliver tangible value as quickly and frequently as possible."
        },
         benefitFour: {
         imageUrl: require("./../../assets/landing/meeting.png"),
         headerText: "hard and soft skills",
         bodyText: "Get the right tools and frameworks to tackle complex problems. Gain the communication and interpersonal skills to drive results."
        }
      }
    }
  }


</script>

<style scoped>

</style>
