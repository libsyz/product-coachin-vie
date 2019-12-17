
<template>
  <div class="card-events-outer">
    <div class="card-events-top">
      <div class="top-text">
        {{ informationHeader }}
        <span class="text-underline"></span>
      </div>
    </div>
    <div class="card-events-bottom">
      <div class="bottom-text">{{ informationText }}</div>
      <div class="bottom-cta">{{ cta }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "join-our-events",
  data() {
    return {
      informationHeader: "join our community!",
      informationText:
        "We want to engage with all product-minded people out there. Learn, experiment and connect in our meetups.",
      cta: "See Open Events"
    };
  }
};
</script>


<style scoped>
.card-events-outer {
  margin: 0 auto;
  background-color: #fff;
  padding: 20px 60px;
  border-radius: 4px;
  max-width: 750px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 15px 35px rgba(126, 87, 88, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
}

.card-events-top {
  padding-bottom: 30px;
}

.top-text {
  position: relative;
  text-align: left;
  text-transform: uppercase;
  font-weight: bold;
  max-width: 200px;
}

.text-underline {
  position: absolute;
  width: 75%;
  max-height: 1px;
  border: solid 1px #000;
  bottom: -7px;
  left: 10%;
}

.card-events-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bottom-text {
  max-width: 60%;
  text-align: left;
}

.bottom-cta {
  text-align: left;
  padding: 10px 15px;
  background-color: #6c63ff;
  color: #fff;
  cursor: pointer;
  border-radius: 3px;
}

@media (max-width: 570px) {
  .card-events-outer {
    text-align: center;
    padding: 0px 10px;
  }

  .top-text {
    max-width: none;
    padding-top: 20px;
    text-align: center;
  }

  .text-underline {
    left: 25%;
    width: 50%;
  }

  .card-events-bottom {
    flex-direction: column;
  }

  .bottom-text {
    max-width: 85%;
    text-align: justify;
    margin-bottom: 20px;
  }

  .bottom-cta {
    margin-bottom: 20px;
  }
}
</style>
