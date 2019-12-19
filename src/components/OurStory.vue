<template lang="html">

  <section class="our-story">
    <div class="story-background">
    </div>
    <div class="story-content">
      <h1 class="story-header"> Our Story </h1>
      <p class="story-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quae, ex molestias ea, aspernatur sapiente id. Quis corrupti aliquid explicabo itaque ducimus quibusdam atque velit maiores similique deleniti expedita iure dolores rem, voluptas voluptate.</p>
      <p class="story-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti sequi veniam, reprehenderit magni, odit et. Perferendis esse quod ipsum modi nulla nam asperiores aliquam dicta tempora vero excepturi distinctio adipisci, aspernatur molestias eum dignissimos, minima sunt aperiam accusamus ea omnis soluta dolorem. Reiciendis, ipsam!</p>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'our-story',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped>
  .our-story {
    display: flex;
    justify-content: space-around;
    height: 100vh;
  }

  .story-background {
    width: 50%;
    background-image: url('https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-size: cover;
    background-position: 10% 10%;
    flex-grow: 1 50%;
  }

  .story-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    background-color: #F0EFFF;
    color: #000;
  }

  .story-header {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.5rem;
  }

  .story-content {
    padding: 10px 80px;
    font-size: 1.25rem
  }
</style>
