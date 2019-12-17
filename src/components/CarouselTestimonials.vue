
<template>
  <div class="testimonials-card-carousel-wrapper">
    <div
      class="testimonials-card-carousel--nav__left"
      @click="moveCarousel(-1)"
      :disabled="atHeadOfList"
    ></div>
    <div class="testimonials-card-carousel">
      <div class="testimonials-card-carousel--overflow-container">
        <div
          class="testimonials-card-carousel-cards"
          :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}"
        >
          <div
            class="testimonials-card-carousel--card"
            v-for="testimonial in items"
            :key="testimonial.id"
          >
            <img :src="testimonial.imgUrl" />

            <div class="testimonials-card-carousel--card--information">
              <p class="information-testimonial">{{ testimonial.blurb }}</p>
              <p class="information-referrer">{{ testimonial.referrer}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="testimonials-card-carousel--nav__right"
      @click="moveCarousel(1)"
      :disabled="atEndOfList"
    ></div>
  </div>
</template>


<script>
export default {
  name: "testimonials-carousel-testimonial",
  data() {
    return {
      currentOffset: 0,
      windowSize: 3,
      // pagination factor is determined by card width + margin
      paginationFactor: 620,
      items: [
        {
          id: 1,
          imgUrl:
            "https://static.wixstatic.com/media/6dbf99_5190935e819b40bea5b617e7e2161cf3~mv2.png/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01/David%20Rey%20-%20Profile%20Photo_edited.webp",
          blurb:
            '"Working with Mavericks was incredible, they completely transformed the product function and thanks to them our digital products are performing like never before."',
          referrer:
            "Aaron Johnson, Chief Marketing Office at Intercom International"
        },
        {
          id: 2,
          imgUrl:
            "https://static.wixstatic.com/media/6dbf99_71be2b366af142f583dbbedf99dcccc3~mv2.jpg/v1/crop/x_16,y_0,w_686,h_685/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01/6dbf99_71be2b366af142f583dbbedf99dcccc3~mv2.webp",
          blurb:
            '"Working with Mavericks was incredible, they completely transformed the product function and thanks to them our digital products are performing like never before."',
          referrer:
            "Aaron Johnson, Chief Marketing Office at Intercom International"
        },
        {
          id: 3,
          imgUrl:
            "https://static.wixstatic.com/media/6dbf99_2b3977dee16b4f208f236dbee3923c14~mv2_d_1280_1280_s_2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01/Photo_edited.webp",
          blurb:
            '"Working with Mavericks was incredible, they completely transformed the product function and thanks to them our digital products are performing like never before."',
          referrer:
            "Aaron Johnson, Chief Marketing Office at Intercom International"
        },
        {
          id: 4,
          imgUrl:
            "https://static.wixstatic.com/media/6dbf99_3eb744aaa9cc441d821a81d4beb5c48a~mv2.jpg/v1/crop/x_0,y_138,w_960,h_945/fill/w_244,h_240,al_c,q_80,usm_0.66_1.00_0.01/Jean.webp",
          blurb:
            '"Working with Mavericks was incredible, they completely transformed the product function and thanks to them our digital products are performing like never before."',
          referrer:
            "Aaron Johnson, Chief Marketing Office at Intercom International"
        },
        {
          id: 5,
          imgUrl:
            "https://static.wixstatic.com/media/6dbf99_cb964b4cd17a4b029d73af3a523b32c7~mv2.jpg/v1/crop/x_0,y_12,w_499,h_474/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01/adria_edited.webp",
          blurb:
            '"Working with Mavericks was incredible, they completely transformed the product function and thanks to them our digital products are performing like never before."',
          referrer:
            "Aaron Johnson, Chief Marketing Office at Intercom International"
        },
        {
          id: 6,
          imgUrl:
            "https://static.wixstatic.com/media/6dbf99_4045af698b2d4969990f34e27ba99345~mv2.jpg/v1/crop/x_0,y_21,w_853,h_810/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01/lynette_edited.webp",
          blurb:
            '"Working with Mavericks was incredible, they completely transformed the product function and thanks to them our digital products are performing like never before."',
          referrer:
            "Aaron Johnson, Chief Marketing Office at Intercom International"
        },
        {
          id: 7,
          imgUrl:
            "https://static.wixstatic.com/media/6dbf99_0b82bfb582924ef0b6b7fa41a46d47a3~mv2.jpg/v1/crop/x_0,y_18,w_710,h_675/fill/w_252,h_240,al_c,q_80,usm_0.66_1.00_0.01/isabel_edited.webp",
          blurb:
            '"Working with Mavericks was incredible, they completely transformed the product function and thanks to them our digital products are performing like never before."',
          referrer:
            "Aaron Johnson, Chief Marketing Office at Intercom International"
        }
      ]
    };
  },
  computed: {
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor * -1 * (this.items.length - this.windowSize)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    }
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    }
  }
};
</script>

<style scoped>
.testimonials-card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  padding-top: 40px;
  color: #666a73;
}

.testimonials-card-carousel {
  display: flex;
  justify-content: center;
  width: 800px;
}

.testimonials-card-carousel--overflow-container {
  overflow: hidden;
}
.testimonials-card-carousel--nav__left,
.testimonials-card-carousel--nav__right {
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 10px;
  box-sizing: border-box;
  border-top: 2px solid #6c63ff;
  border-right: 2px solid #6c63ff;
  cursor: pointer;
  margin: 0 20px;
  transition: transform 150ms linear;
}
.testimonials-card-carousel--nav__left[disabled],
.testimonials-card-carousel--nav__right[disabled] {
  opacity: 0.2;
  border-color: black;
}
.testimonials-card-carousel--nav__left {
  transform: rotate(-135deg);
}
.testimonials-card-carousel--nav__left:active {
  transform: rotate(-135deg) scale(0.9);
}
.testimonials-card-carousel--nav__right {
  transform: rotate(45deg);
}
.testimonials-card-carousel--nav__right:active {
  transform: rotate(45deg) scale(0.9);
}

.testimonials-card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
  padding-bottom: 40px;
}

.testimonials-card-carousel--card {
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
.testimonials-card-carousel--card:first-child {
  margin-left: 0;
}
.testimonials-card-carousel--card:last-child {
  margin-right: 0;
}

.testimonials-card-carousel--card--information {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  text-align: left;
}

.testimonials-information-testimonial {
  font-style: italic;
  font-size: 16px;
}

.testimonials-information-referrer {
  font-size: 12px;
}

.testimonials-card-carousel--card img {
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

@media (max-width: 570px) {
  .testimonials-card-carousel {
    width: 300px;
  }

  .testimonials-card-carousel--card {
    flex-direction: column;
    min-width: 300px;
  }
}
</style>
