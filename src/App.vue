<template>
  <div id="app">
    <Navbar/>
      <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');

#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
}

.value-props {
  padding: 0px 100px;
}


.for-companies-for-individuals {
  padding: 60px 100px;
  background-color: #F0EFFF;
  display: flex;
  justify-content: space-between;
}

.join-our-events {
  padding: 60px 100px;
  background-color: #F0EFFF;
}

.benefits {
  padding: 60px 100px;
  background-color: #fff;
}

.mavericks-team {
  padding: 60px 100px;
  background-color: #F0EFFF;
}

.stay-in-touch {
  padding: 60px 100px;
}
</style>
