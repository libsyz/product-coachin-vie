
<template>
  <div class="card-carousel-wrapper">
    <div class="card-carousel--nav__left"
         @click="moveCarousel(-1)"
         :disabled="atHeadOfList">
    </div>
    <div class="card-carousel">
      <div class="card-carousel--overflow-container">
        <div class="card-carousel-cards"
             :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
          <div class="card-carousel--card"
               v-for="caseStudy in caseStudies"
               :key="caseStudy.id">
            <!-- <img :src="caseStudy.imgUrl"/> -->
            <div class="card-carousel-image--container"
                 v-bind:style="{ backgroundImage: 'url(' + caseStudy.imgUrl + ')' }"></div>

            <div class="card-carousel--card--information">
              <h2 class="information-case-title">
                {{ caseStudy.title }}
              </h2>
              <p class="information-case-blurb">
                {{ caseStudy.blurb}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-carousel--nav__right"
         @click="moveCarousel(1)"
         :disabled="atEndOfList"></div>
  </div>

</template>


<script>

  export default {
    name: "carousel-testimonial",
    data() {
      return {
        currentOffset: 0,
        windowSize: 3,
        // pagination factor is determined by card width + margin
        paginationFactor: 700,
        caseStudies: [
          {id:1,
           imgUrl: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
           blurb: 'We brought product management practices to a luxury travel operator in China. We found a way forward to aligning the team on the value proposition, segmenting users and prioritizing features.',
           title: "tranforming luxury travel"},
          {id:2,
           imgUrl: "https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
           blurb: 'A candy manufacturer in Cambodia was struggling to accelerate their product development processes. We introduced Agile Product concepts and practices to drive their business forward',
           title: "MAKING CANDY AGILE"}
        ]
      }
    },
    computed: {
      atEndOfList() {
        return this.currentOffset <= (this.paginationFactor ) * (this.caseStudies.length - this.windowSize);
      },
      atHeadOfList() {
        return this.currentOffset === 0;
      },
    },
    methods: {
      moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
        if (direction === 1 && !this.atEndOfList) {
          this.currentOffset -= this.paginationFactor;
        } else if (direction === -1 && !this.atHeadOfList) {
          this.currentOffset += this.paginationFactor;
        }
    },
  }
}

</script>

<style scoped>

.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  padding-top: 40px;
  color: #666a73;
}

.card-carousel {
  display: flex;
  justify-content: center;
  width: 800px;
}

.card-carousel--overflow-container {
  overflow: hidden;
}
.card-carousel--nav__left, .card-carousel--nav__right {
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 10px;
  box-sizing: border-box;
  border-top: 2px solid #6C63FF;
  border-right: 2px solid #6C63FF;
  cursor: pointer;
  margin: 0 20px;
  transition: transform 150ms linear;
}
.card-carousel--nav__left[disabled], .card-carousel--nav__right[disabled] {
  opacity: 0.2;
  border-color: black;
}
.card-carousel--nav__left {
  transform: rotate(-135deg);
}
.card-carousel--nav__left:active {
  transform: rotate(-135deg) scale(0.9);
}
.card-carousel--nav__right {
  transform: rotate(45deg);
}
.card-carousel--nav__right:active {
  transform: rotate(45deg) scale(0.9);
}

.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
}

.card-carousel--card {
  display: flex;
  min-width: 700px;
  height: 335px;
  margin: 0 10px;
  cursor: pointer;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
              0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background-color: #fff;
  border-radius: 4px;
  z-index: 3;
  margin-bottom: 2px;
}
.card-carousel--card:first-child {
  margin-left: 0;
}
.card-carousel--card:last-child {
  margin-right: 0;
}

.card-carousel--card--information {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  text-align: left;
}

.information-case-title {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  padding-bottom: 15px;
}

.information-case-blurb {
  font-size: 16px;
}

.card-carousel-image--container {
  min-width: 40%;
  transition: opacity 150ms linear;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-size: cover;
}


.card-carousel--card img {
  vertical-align: bottom;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: opacity 150ms linear;
  user-select: none;
  width: 40%;
}


h1 {
  font-size: 3.6em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 0;
  color: #42b883;
}


@media (max-width: 570px) {
  .card-carousel {
    width: 300px;
  }

  .card-carousel--card {
    flex-direction: column;
    min-width: 300px;
    height: auto;
  }

  .card-carousel-image--container {
    min-height: 200px;
    height:200px;
  }
}

</style>
