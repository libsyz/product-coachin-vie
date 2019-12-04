
<template>
  <nav>
    <Logo/>
    <div class="nav-links">
      <p> For Companies </p>
      <p> For Individuals </p>
      <p> About us </p>
      <Button label="Contact"/>
    </div>

  </nav>
</template>

<script>

import Logo from './Logo.vue'
import Button from './Button.vue'

export default {
  name: 'navbar',
  components: {
    Logo,
    Button
  }
}
</script>

<style scoped>

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #282828;
  height: 85px;
}

.nav-links {
  width: 700px;
  font-weight: normal;
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: space-around;
  color: #fff;
}

p {
  cursor: pointer;
}

</style>
