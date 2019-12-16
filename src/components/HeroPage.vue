<template lang="html">

  <section class="hero-page-wrapper">
    <div class="hero-plain-container">
    </div>
    <div class="hero-image"></div>
      <div class="card-hero-outer">
        <div class="card-events-top">
          <div class="top-text">
            {{ informationHeader }}
            <span class="text-underline"> </span>
          </div>
        </div>
        <div class="card-hero-bottom">
          <div class="bottom-text">
            {{ informationText }}
          </div>
        </div>
      </div>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'hero-subpage',
    props: {
      informationHeader: String,
      informationText: String
    }
  }

</script>

<style scoped>

.hero-page-wrapper {
  background-color: #F0EFFF;
  height: 80vh;
  display: flex;
  position: relative;
}

.hero-plain-container {
  width: 40%;
}

.hero-image {
  width: 60%;
  background-image: url('https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-size: cover;
}

.card-hero-outer{
  position: absolute;
  top: calc(50% - 120px) ;
  left: 200px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px 60px;
  border-radius: 4px;
  max-width: 660px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 15px 35px rgba(126,87,88,.1),
  0 5px 15px rgba(0,0,0,.07);
}

.card-events-top {
  padding-bottom: 30px;
}

.top-text {
  position: relative;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
}


.text-underline {
  position: absolute;
  width: 33%;
  max-height: 1px;
  border: solid 1px #000;
  bottom: -7px;
  left: 33%;
}

.card-hero-bottom {
  display: flex;
  justify-content: space-between;
  align-items: middle;
}

.bottom-text {
  text-align: center;
}



</style>
