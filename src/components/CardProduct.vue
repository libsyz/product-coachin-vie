<template>
  <b-col >
    <div class="card-product @media"  >
      <div class="card-header"> {{ headerText }}
        <span class="header-underline"> </span>
      </div>
      <img :src="imgUrl" alt="">
      <p class="card-body"> {{ bodyText }}</p>
    </div>
  </b-col>
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
  height: 30rem;
  width: 23rem;
  
  margin: 0.5rem 0rem; 
  border-radius: 0.4rem;
  box-shadow: 0 15px 35px rgba(126,87,88,.1),
              0 5px 15px rgba(0,0,0,.07);
  
  padding: 40px 40px;
  }

.card-header {
  background-color: #fff; 
  border-bottom: none;
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
  bottom: .4rem;
  left: 33%;
  width: 30%;
  /* padding-bottom: 1rem; */
}

  img {
    height: 5rem;
    width: 5rem;
    
  }

  .card-body {
    font-size: 1.25rem;
  }

  
</style>
