
<template>
  <div class='card'>
    <img :src="imgUrl" alt="Why not rendering">
    <h2> {{ header }}
      <span class="text-underline"> </span>
    </h2>
    
    <p> {{ content }}</p>
  </div>
</template>


<script>
  export default {
    name: 'card-product',
    props: {
      header: String,
      content: String,
      imgUrl: String
    }
  }
</script>


<style scoped>

  .card {
    width: 40%;
    height: 40%;
    display: inline-block;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
    margin: 25px;
    border-radius: 4px;
    box-shadow: 0 15px 35px rgba(126,87,88,.1),
              0 5px 15px rgba(0,0,0,.07);
  }
  .text-underline {
  position: absolute;
  width: 33%;
  max-height: 1px;
  border: solid 1px #000;
  bottom: 25px;
  left: 33%;
  }

  h2 {
    text-transform: uppercase;
    padding-bottom: 30px;
    position: relative;
  }

  img {
    height: 125px;
    padding-bottom: 30px
  }
  

</style>
