

<template>
  <div>
    <h1> {{ header }} </h1>
    <p> {{ body }} </p>
    <form>
      <input type="email" placeholder="productcoaching@mavericks.com">
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
  }

</style>
