

<template>
  <div class="stay-in-touch">
    <h1> {{ header }} </h1>
    <p> {{ body }} </p>

      <!-- <input class="gform" method="POST" type="email" data-email="example@email.net" placeholder="productcoaching@mavericks.com"
      action="https://script.google.com/macros/s/AKfycbwIlXn0XYXoXHQl0nGVts7m-pHg-ROp6Gsg3eShqrc1XDdpCQ/exec"> -->
    <form class="gform" method="POST" data-email="example@email.net"
  action="https://script.google.com/macros/s/AKfycbwIlXn0XYXoXHQl0nGVts7m-pHg-ROp6Gsg3eShqrc1XDdpCQ/exec">
    <!-- change the form action to your script url -->

      <div class="form-elements">


        <fieldset class="pure-group">
          <label class="input-label" for="email">
            <input class="input-form" id="email" name="email" type="email" value=""
          required placeholder="your.name@email.com"/>
          </label>
        </fieldset>

      </div>

    <!-- Customise the Thankyou Message People See when they submit the form: -->

      <div class="thankyou_message" style="display:none;">
        <h2>Thanks for contacting us!
        We will get back to you soon!</h2>
      </div>

      <button class="contact-button"> {{ cta }} </button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "stay-in-touch",
    props: {
      header: String,
      body: String,
      cta: String
    }
  }

</script>


<style scoped>
  .stay-in-touch {
    padding: 80px 0px;
  }

  .stay-in-touch > p {
    padding-bottom: 40px;
  }

  .gform {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    height: 60px;
    width: 300px;
    font-size: 16px;
    font-family: 'Open Sans';
    border-radius: 2px 0px 0px 3px;
    border: solid 1px #F0EFFF;
    text-align: center;

  }

  .contact-button {
    padding: 10px 15px;
    height: 60px;
    text-align: center;
    background-color: #6c63ff;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 0px 3px 3px 0px;
    font-size: 16px;
    font-family: "Open Sans";
  }
  .form-elements {
    text-align: center;
    justify-content: center;

  }

  .input-label {
    display: inline-block;
    width: 100%;
    text-align: left;
    font-size: 20px;
    font-family: 'Open Sans';
    font-weight: "bold";
    margin-bottom: 0px;
  }

  .input-form {
    display: inline-block;
    border-radius: 3px;
    font-size: 20px;
    outline: 0;
    height: 60px;
    font-size: 16px;
    font-family: "Open Sans";
    border-radius: 3px 0px 0px 3px;
    border: solid 1px #f0efff;
    text-align: center;
    box-shadow: 0 15px 35px rgba(126, 87, 88, 0.1),
                0 5px 15px rgba(0, 0, 0, 0.07);
  }

</style>
