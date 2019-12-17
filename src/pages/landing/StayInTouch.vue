

<template>
  <div>
    <h1>Let’s keep in touch!</h1>
    <p>contact us if you would like to know more</p>
    <form>
      <input type="email" placeholder="productcoaching@mavericks.com" />
      <button class="contact-button">Get In Touch</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "stay-in-touch"
};
</script>


<style scoped>
div {
  padding: 40px 0px;
}
form {
  padding-top: 20px;
}
input {
  height: 60px;
  width: 300px;
  font-size: 16px;
  font-family: "Open Sans";
  border-radius: 3px 0px 0px 3px;
  border: solid 1px #f0efff;
  text-align: center;
  box-shadow: 0 15px 35px rgba(126, 87, 88, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
}

input:focus {
  outline: solid 1px #f0efff;
}

button {
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

@media (max-width: 570px) {
  input {
    width: 90%;
    font-size: 1rem;
  }

  button {
    width: 90%;
  }
}
</style>
