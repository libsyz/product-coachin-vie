<template lang="html">
  <section class="section-blockquote">
    <blockquote>{{ quote }}</blockquote>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'block-quote',
    props: {
      quote: String
    }

}


</script>

<style scoped>

  .section-blockquote {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 23rem;
    /* width: 100%; */
    color: #fff;
    background-color: #6C63FF;
  }

  blockquote {
    font-size: 25px;
    max-width: 60%;
    line-height: 35px;
    text-align: left;
    border-left: solid 3px #fff;
    padding-left: 30px;

  }

</style>
