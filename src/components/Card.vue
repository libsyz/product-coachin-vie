
<template>
  <div class='standard-card'>
    <h2 class="standard-card-header"> {{ header }}</h2>
    <img :src="imgUrl" alt="Why not rendering">
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

  .standard-card {
    width: 250px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    border-radius: 3px;
  }

  .standard-card-header {
    text-transform: uppercase;
    font-weight: bold;
    padding-bottom: 30px;
  }

  img {
    height: 125px;
    padding-bottom: 30px
  }

</style>
