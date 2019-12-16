

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
          <label class="inputLabel" for="name">Name: 
            <input class="inputForm" id="name" name="name" placeholder="What your Mom calls you" />
          </label>
        </fieldset>

        <!-- <fieldset class="pure-group">
          <label for="message">Message: </label>
          <textarea id="message" name="message" rows="10"
          placeholder="Tell us what's on your mind..."></textarea>
        </fieldset> -->

        <fieldset class="pure-group">
          <label class="inputLabel" for="email">Email Address: 
            <input class="inputForm" id="email" name="email" type="email" value=""
          required placeholder="your.name@email.com"/>
          </label>
        </fieldset>

        <!-- <fieldset class="pure-group">
          <label for="color">Favourite Color: </label>
          <input id="color" name="color" placeholder="green" />
        </fieldset>

        <fieldset class="pure-group honeypot-field">
          <label for="honeypot">To help avoid spam, utilize a Honeypot technique with a hidden text field; must be empty to submit the form! Otherwise, we assume the user is a spam bot.</label>
          <input id="honeypot" type="text" name="honeypot" value="" />
        </fieldset> -->

        <!-- <button class="button-success pure-button button-xlarge">
          <i class="fa fa-paper-plane"></i>&nbsp;Send</button> -->
      </div>

    <!-- Customise the Thankyou Message People See when they submit the form: -->
      <div class="thankyou_message" style="display:none;">
        <h2><em>Thanks</em> for contacting us!
        We will get back to you soon!</h2>
      </div>
  <!-- Submit the Form to Google Using "AJAX" -->
      <!-- <script data-cfasync="false" src="form-submission-handler.js"></script> -->
  <!-- <script data-cfasync="false" src="form-submission-handler.js"></script> -->
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
  div {
    padding: 80px 0px;
  }

  form {
    padding-top: 20px;
    box-shadow: 0 15px 35px rgba(126,87,88,.1),
                0 5px 15px rgba(0,0,0,.07);
  }

  input {
    height: 60px;
    width: 300px;
    font-size: 16px;
    font-family: 'Open Sans';
    border-radius: 3px 0px 0px 3px;
    border: solid 1px #F0EFFF;
    text-align: center;

  }

  .contact-button {
    padding: 10px 15px;
    height: 60px;
    text-align: center;
    background-color: #6C63FF;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 0px 3px 3px 0px;
    font-size: 16px;
    font-family: 'Open Sans';
     box-shadow: 0 15px 35px rgba(126,87,88,.1),
                0 5px 15px rgba(0,0,0,.07);
  }
  .form-elements {
    margin:0 auto;
    width: 100%;
    display:block;
    text-align: center;
    justify-content: center; 
    
  }
  
  .inputLabel {
    margin:0px auto;
    display: inline-block;
    width: 270px;
    text-align: left;
    font-size: 20px;
    font-family: 'Open Sans';
    font-weight: "bold";
    padding: 2px;
  }
  .inputForm {
    display: inline-block;
  }
  .inputForm {
    top: 0px;
    border: 1px solid #ccc;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    -moz-box-shadow: 2px 2px 3px #666;
    -webkit-box-shadow: 2px 2px 3px #666;
    box-shadow: 2px 2px 3px #666;
    font-size: 20px;
    padding: 4px 7px;
    outline: 0;
    -webkit-appearance: none;
  }

</style>
