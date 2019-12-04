
<template>
  <div>
    <h1> {{ header }} </h1>
    <p> {{ subtitle }} </p>

    <ul>
      <li v-for='card in cards' :key="card"> {{ cards }} </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'section-header',
    props: {
      header: String,
      subtitle: String
    },
    data: function() {
            cards: [
              "what up",
              "my man"
            ]
      }
    }

</script>


<style scoped>

  h1 {
    font-weight: bold;
    font-size: 45px;
    line-height: 61px;
    margin-top: 40px;
    margin-bottom: 0px;
  }

  p {
    margin-top: 10px;
    font-size: 30px;
    line-height: 41px;
  }
</style>
