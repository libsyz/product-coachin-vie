<template lang="html">

  <div class="footer">
    <div class="footer-left">
      <div class="company-info">
        <div class="copyright"> Copyright 2019 Mavericks Consulting </div>
        <ul class="address">
          <li>1 Harbourfront Avenue, #13-03, </li>
          <li>Keppel Bay Tower, </li>
          <li>Singapore 098632 </li>
          <li>hello@mavericks-consulting.com </li>
          <li>(65) 82998997 </li>
        </ul>
      </div>
      <div class="company-social">
        <li> Facebook </li>
        <li> LinkedIn </li>
        <li> Instagram </li>
      </div>
    </div>

    <div class="footer-right">
      <ul class="website-sections">
        <li>services</li>
        <li>for individuals</li>
        <li> for companies </li>
        <li> blog </li>
        <li> about us </li>
      </ul>
    </div>
  </div>

</template>

<script>

  export default  {
    name: 'footer'
  }


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

</style>
