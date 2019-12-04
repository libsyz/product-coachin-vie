<template>
  <div id="app">
    <Navbar/>
    <section class="hero">
      <Hero/>
    </section>
    <section class="value-props">
      <SectionHeader
              header= "How can we help?"
              subtitle= "We represent Product Management" />

    </section>
  </div>
</template>

<script>

import SectionHeader from './pages/landing/SectionHeader.vue'

import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Hero,
    SectionHeader
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
</style>
