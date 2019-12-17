
<template>
  <div class="modality-card-outer">
    <div class="modality-card-header">
      <img class="header-icon" :src="iconUrl" alt="image" />
      <div class="header-text">
        {{ headerText }}
        <span class="header-underline"></span>
      </div>
    </div>

    <div class="modality-card-body">
      <div class="card-body-text">{{ bodyText }}</div>
      <div class="card-body-cta">
        <a :href="goToUrl">{{ bodyCta }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-modality",
  props: {
    headerText: String,
    iconUrl: String,
    bodyText: String,
    bodyCta: String,
    goToUrl: {
      type: String,
      default: "#"
    }
  }
};
</script>

<style scoped>
.modality-card-outer {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 15px 35px rgba(126, 87, 88, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);

  padding: 40px 40px;
}

.modality-card-header {
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

.card-body-text {
  text-align: left;
  padding-bottom: 40px;
}

.card-body-cta {
  color: #fff;
  padding: 10px 15px;
  max-width: 150px;
  border-radius: 3px;
  background-color: #6c63ff;
  cursor: pointer;
  transition: all 0.2s ease;
}

.card-body-cta:hover {
  background-color: var(--indigo);
}

a,
a:hover {
  text-decoration: none;
  color: #fff;
}

@media (max-width: 576px) {
  .modality-card-outer {
    margin-bottom: 30px;
  }
}
</style>
