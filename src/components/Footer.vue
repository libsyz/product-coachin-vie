<template lang="html">

  <div class="footer">
    <div class="footer-left">
      <div class="company-info">
        <div class="copyright"> Copyright 2019 Mavericks Consulting </div>
        <ul class="address">
          <li>1 Harbourfront Avenue, #13-03, </li>
          <li>Keppel Bay Tower, </li>
          <li>Singapore 098632 </li>
          <li> <strong>hello@mavericks-consulting.com </strong></li>
          <li>(65) 82998997 </li>
        </ul>
      </div>
      <ul class="company-social">
        <li class="company-social-logo">
          <font-awesome-icon :icon="['fab', 'facebook-square']"/> </li>
        <li class="company-social-logo">
          <font-awesome-icon :icon="['fab', 'linkedin']"/>
        </li>
        <li class="company-social-logo">
          <font-awesome-icon :icon="['fab', 'instagram']"/>
        </li>
      </ul>
    </div>

    <div class="footer-right">
      <ul class="website-sections">
        <li> <a href="#"> services </a></li> 
        <li>  <a href="/for-individuals">  For individuals </a> </li> 
        <li>  <a href="/for-companies"> for companies </a></li> 
        <li> <a href="#"> Blog </a></li> 
        <li> <a href="#"> About us </a></li> 
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: "footer"
};
</script>

<style scoped>
.footer {
  padding: 60px 250px;
  background-color: #141414;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: top;
  margin: 0px;
}

.company-info {
  text-align: left;
}

.copyright {
  font-weight: bold;
}

.address {
  list-style-type: none;
  padding-inline-start: 0px;
  line-height: 20px;
}

.footer-right {
  text-transform: uppercase;
  text-align: left;
  list-style-type: none;
}

.website-sections {
  list-style-type: none;
  padding-inline-start: 0px;
  line-height: 25px;
  cursor: pointer;
}

li > a {
  color: #fff;
  text-decoration: none;
}

.company-social {
  text-align: left;
  font-size: 25px;
  list-style-type: none;
  padding-inline-start: 0px;
}

.company-social-logo {
  display: inline;
  margin-right: 15px;
  cursor: pointer;
}

li:hover {
  text-decoration: underline;
}

@media (max-width: 576px) {
  .footer {
    padding: 60px 80px;
    flex-direction: column-reverse;
  }

  .footer-right {
    margin-bottom: 30px;
  }
  li {
    margin-bottom: 10px;
  }
}
</style>
