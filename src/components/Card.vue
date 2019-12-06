
<template>
  <div>
    <h2> {{ header }}</h2>
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

  div {
    width: 250px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    border-radius: 3px;
  }

  h2 {
    text-transform: uppercase;
  }

  img {
    height: 125px;
  }

</style>
