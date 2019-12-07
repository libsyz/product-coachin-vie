
<template>
  <div class="benefit-wrapper">
    <div class="content">
      <div class="content-header">
        {{ headerText }}
        <span class="text-underline"></span>
      </div>

      <div class="content-body">
        {{ bodyText }}
      </div>
    </div>
    <div class="image">
      <div class="image-background">
        <img :src="imageUrl" alt="">
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    name: "benefit-left",
    props: {
      headerText: String,
      bodyText: String,
      imageUrl: String
    }
  }

</script>


<style scoped>

 .benefit-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 60px 40px;
 }


 .image-background {
  width: 400px;
  background: #F0EFFF;
  border-radius: 4px;
 }

 .content {
  display: flex;
  flex-direction: column;
  width: 400px;
 }

 .content-header {
  position: relative;
  padding-bottom: 10px;
  text-transform: uppercase;
  font-weight: bold;
 }

 .text-underline {
  position: absolute;
  width: 20%;
  max-height: 1px;
  border: solid 1px #000;
  bottom: 1px;
  left: 40%;
}

.content-body {
  padding-top: 20px;
}

 img {
  height: 400px;
 }

</style>
