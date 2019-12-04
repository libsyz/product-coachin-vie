
<template>
  <div class="main">
    <div class="shader">
      <h1> Product Coaching Done Right </h1>
      <h3> We bring the cutting edge product management practices, tools and frameworks to your organization </h3>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'hero'
}

</script>

<style scoped>

.main {
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1191&q=80');
  background-size: cover;
  color: #fff;
}

.shader {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: middle;
}

h1 {
  font-weight: bold;
  font-size: 65px;
  line-height: 89px;
  margin-top: 0px;
  margin-bottom: 10px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

h3 {
  font-style: normal;
  font-weight: normal;
  margin-top: 0px;
  font-size: 30px;
  padding: 0px 300px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

</style>
