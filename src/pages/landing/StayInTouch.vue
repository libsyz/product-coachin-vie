

<template>
  <div>
    <h1> Let’s keep in touch! </h1>
    <p> contact us if you would like to know more </p>
    <form>
      <input type="email" placeholder="productcoaching@mavericks.com">
      <button class="contact-button"> Get In Touch </button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "stay-in-touch"
  }

</script>


<style scoped>

  form {
    padding-top: 20px;
  }
  input {
    height: 60px;
    width: 300px;
    font-size: 16px;
    font-family: 'Open Sans';
    border-radius: 3px 0px 0px 3px;
    border: solid 1px #F0EFFF;
    text-align: center;
    box-shadow: 0 15px 35px rgba(126,87,88,.1),
                0 5px 15px rgba(0,0,0,.07);

  }

  button {
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
  }
</style>
