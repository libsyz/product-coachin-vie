
<template>
  <div class="card-outer">
    <div class="card-header">
      <img class="header-icon" :src="iconUrl" alt="image">
      <div class="header-text"> {{ headerText }}
        <span class="header-underline"> </span>
      </div>
    </div>

    <div class="card-body">
      <div class="body-text"> {{ bodyText }}</div>
      <div class="body-cta"> {{ bodyCta }}</div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'card-modality',
    props: {
      headerText: String,
      iconUrl: String,
      bodyText: String,
      bodyCta: String,
    }

  }

</script>

<style scoped>

.card-outer {
  background-color: #fff;
  max-height: 240px;
  max-width: 444px;
  width: 544px;
  border-radius: 4px;
  box-shadow: 0 15px 35px rgba(126,87,88,.1),
              0 5px 15px rgba(0,0,0,.07);

  padding: 40px 40px;
}

.card-header {
  display: flex;
  justify-content: left;
  align-items: middle;
  padding-bottom: 40px;
}

.header-icon {
  height: 40px;
  margin-right: 20px;
}

.header-text {
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
}

.header-underline {
  position: absolute;
  width: 200px;
  max-height: 1px;
  border: solid 1px #000;
  bottom: 5px;
  left: 10%;
  width: 80%;
}

.body-text {
  text-align: left;
  padding-bottom: 40px;
}

.body-cta {
  color: #fff;
  padding: 10px 15px;
  max-width: 100px;
  border-radius: 3px;
  background-color: #6C63FF;
  cursor: pointer;
}

</style>
