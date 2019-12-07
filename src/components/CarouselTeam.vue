
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
               v-for="maverick in mavericks"
               :key="maverick.id">

            <img :src="maverick.imgUrl"/>

            <div class="card-carousel--card--information">
              <p class="maverick-name">
                {{ maverick.firstName }} {{ maverick.lastName}}
              </p>
              <p class="maverick-bio">
                {{ maverick.bio }}
              </p>

              <div class="maverick-linkedin">
                 <img class="linkedin-logo" :src="linkedIn" alt="">
                 <p>
                    Learn more about {{ maverick.firstName}}
                 </p>
              </div>


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
    name: "carousel-team",
    data() {
      return {
        currentOffset: 0,
        windowSize: 3,
        // pagination factor is determined by card width + margin
        paginationFactor: 620,
        linkedIn: "https://image.flaticon.com/icons/png/512/61/61109.png",
        mavericks: [
          {id:1,
           imgUrl: "https://static.wixstatic.com/media/6dbf99_edd2ef740c0145ad8c8f5fbd2a81c3af~mv2.jpg/v1/crop/x_0,y_33,w_835,h_835/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01/Dzmitry%20Yaltykhau_edited.webp",
           bio: 'Dzmitry is an experienced Agile Analysis Coach who helps business analysts adapt to Agile practices in software development and implement them into a working requirements design process.',
           firstName: "Dzmitry",
           lastName: "Yaltykhau",
           role: "Product Guy"},
          {id:2,
           imgUrl: "https://static.wixstatic.com/media/6dbf99_07a5939072154f288bee2db4f05ab686~mv2_d_2250_2250_s_2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01/IMG_20190801_111206_edited.webp",
           bio: 'Miguel is an agile business analyst with a background in organizational development and business model innovation. He has worked globally with large multinationals in adapting agile methods to non-IT environments.',
           firstName: "Miguel",
           lastName: "Jimenez",
           role: "Product Guy"},
          {id:3,
           imgUrl: "https://static.wixstatic.com/media/6dbf99_1b1d8c3492794ab6bc36a937c5d06c9d~mv2_d_1726_1726_s_2.jpg/v1/crop/x_0,y_8,w_1726,h_1711/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01/pedro_edited_edited.webp",
           bio: 'Pedro is a generalist with skills ranging from front-end to Devops to startup development and has worked in a variety of business with different sizes and domains, such as payments, gaming, e-commerce, logistics, and others.',
           firstName: "Pedro",
           lastName: "Viegas",
           role: "Product Guy"},
          {id:4,
           imgUrl: "https://static.wixstatic.com/media/6dbf99_91b7c840718e420c98db6446cda32656~mv2.jpg/v1/crop/x_0,y_13,w_715,h_694/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01/Abhinav%20Sagar.webp",
           bio: 'Abhinav is a product management professional with more than 10 years’ experience as part of product teams in the areas of Healthcare, Payments, Billing and Enterprise Communication.',
           firstName: "Abhinav",
           lastName: "Sagar",
           role: "Product Guy"},
          {
           id:5,
           imgUrl: "https://static.wixstatic.com/media/6dbf99_3d1fcd5481e44001a7381ff55389f627~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01/Tsoi-Lok-Yin_edited.webp",
           bio: 'Lok Yin had previously been working on systems in the public sector as well as the aviation industry, bringing enhancements from the conceptual stage to deployment to maintenance.',
           firstName: "Lok Yin",
           lastName: "Tsoi",
           role: "Product Guy"},
          {id:6,
           imgUrl: "https://static.wixstatic.com/media/6dbf99_6cccea87c7894b6b8478dfac12df3256~mv2.jpg/v1/crop/x_0,y_160,w_960,h_960/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01/photo_2018-04-13_19-04-11.webp",
           bio: 'An Electronics and Communication Engineer by degree, Isha started as a developer 6 years ago. Over the years she has worked across multiple domains such as Health, Retail and Media.',
           firstName: "Isha",
           lastName: "Tripathi"}
        ]
      }
    },
    computed: {
      atEndOfList() {
        return this.currentOffset <= (this.paginationFactor * -1) * (this.mavericks.length - this.windowSize);
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
  min-width: 600px;
  margin: 0 10px;
  padding-top: 40px;
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

.maverick-name {
  font-size: 16px;
  font-weight: bold;
}

.maverick-bio {
  font-size: 16px;
}

.maverick-linkedin {
  display: flex;
  justify-content: left;
  align-items: center;
}

.linkedin-logo {
  height: 25px;
  margin-right: 10px;
}


.card-carousel--card img {
  vertical-align: bottom;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: opacity 150ms linear;
  user-select: none;
}


h1 {
  font-size: 3.6em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 0;
  color: #42b883;
}

</style>
