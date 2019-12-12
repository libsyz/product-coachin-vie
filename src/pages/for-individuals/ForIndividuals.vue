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
    <div class="workshops ">
      <h2>Some of Our Workshops</h2>

      <CardforIndividual v-for="workshop in workshops" :key="workshop.id"
                        :header="workshop.headerText"
                        :content="workshop.bodyText"
                        :imgUrl="workshop.imgUrl"/>
    </div>
    <div class="parent">
      <div class="div1 info-column">1-Day Workshops </div>
      <div class="div2 price-column">$200 SGD / PERSON </div>
      <div class="div3 info-column">Multi-Day Workshops </div>
      <div class="div4 price-column">$150 SGD / PERSON </div>
      <div class="div5 info-column">Individual Coaching </div>
      <div class="div6 price-column" id="requestRect">Depending on request </div>
      <div class="div7 "> 
        <h4>WHAT'S INCULDED</h4>
        <ul>
          <li>Certificate of Completion</li>
          <li>Lifetime access to our resource library</li>
          <li>Life time access to our slack community</li>
          <li>Lunch and Coffee Breaks! *important*</li>
          <li>An Awesome Mavericks T-Shirt</li>
        </ul>
      </div>
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
  import CardforIndividual from './../../components/CardforIndividual.vue'

  export default  {
    name: 'for-individual',
    components: {
      HeroPage,
      BlockQuote,
      CardProduct,
      StayInTouch,
      CarouselCaseStudies,
      CardforIndividual
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
          }
        ],
        workshops: [
          {
            imgUrl: require('./../../assets/landing/launch-2.png'),
            headerText: "Roadmap 101",
            bodyText: "Create and communicate agile product roadmaps that balance flexibility and execution."
          },
          {
            imgUrl: require('./../../assets/for-companies/plant.png'),
            headerText: "Roadmap 102",
            bodyText: "Create and communicate agile product roadmaps that balance flexibility and execution."
          },
          {
            imgUrl: require('./../../assets/for-companies/plant.png'),
            headerText: "Roadmap 103",
            bodyText: "Create and communicate agile product roadmaps that balance flexibility and execution."
          },
          {
            imgUrl: require('./../../assets/for-companies/plant.png'),
            headerText: "Roadmap 104",
            bodyText: "Create and communicate agile product roadmaps that balance flexibility and execution."
          }
        ],
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
.workshopItem {
  display: inline-block;
  margin: 25px;
  padding: 25px;
}

.parent {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 10px;
grid-row-gap: 10px;
margin-top: 40px;
padding-top: 80px;
padding-left: 223px;
background: #F0EFFF;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 2 / 1 / 3 / 2; }
.div4 { grid-area: 2 / 2 / 3 / 3; }
.div5 { grid-area: 3 / 1 / 4 / 2; }
.div6 { grid-area: 3 / 2 / 4 / 4; }
.div7 { grid-area: 1 / 3 / 3 / 4; 
  /* position: absolute; */
  width: 327px;
  height: 230px;
  /* left: 985px;
  top: 2983px; */
  text-align: left;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;

  color: #000000;
}


.price-column {
  
  width: 359px;
  height: 106px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-left: 20px;

  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;

}
.info-column {
  width: 381px;
  height: 106px;

  background: #6C63FF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-left: 20px;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #FFFFFF;
}

#requestRect {
  width: 737px;
}



</style>
