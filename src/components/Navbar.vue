
<template>
  <b-navbar toggleable="lg" class="navbar-main">
    <b-navbar-brand href="/">
      <Logo />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" class="mx-5"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="mx-5">
          <router-link class="nav-link" to="/for-companies">For Companies</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="nav-link" to="/for-individuals">For Individuals</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="nav-link" to="/landing-page">About us</router-link>
        </b-nav-item>
        <b-button class="contact mx-5">Contact</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  name: "navbar",
  components: {
    Logo
  }
};
</script>

<style scoped>
.navbar-main {
  background-color: #282828;
  min-height: 85px;
}

.nav-link {
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

.contact {
  margin-bottom: 0px;
  color: #fff;
  padding: 0px 20px;
  background-color: #6c63ff;
  border: none;
}
</style>


