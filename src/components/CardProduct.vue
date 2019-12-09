<template>

  <div class="card-product">
    <div class="card-header"> {{ headerText }}
     <span class="header-underline"> </span>
   </div>
    <img :src="imgUrl" alt="">
    <p class="card-body"> {{ bodyText }}</p>
  </div>

</template>

<script>

  export default  {
    name: 'card-product',
    props: {
      imgUrl: String,
      headerText: String,
      bodyText: String
    }
}


</script>

<style scoped>

.card-product {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  height: 400px;
  width: 340px;
  border-radius: 4px;
  box-shadow: 0 15px 35px rgba(126,87,88,.1),
              0 5px 15px rgba(0,0,0,.07);

  padding: 40px 40px;
  }

.card-header {
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
}

.header-underline {
  position: absolute;
  max-height: 1px;
  border: solid 1px #000;
  bottom: -5px;
  left: 33%;
  width: 33%;
}

  img {
    height: 80px;
    width: 80px;
  }

  .card-body {
    font-size: 20px;
  }
</style>
