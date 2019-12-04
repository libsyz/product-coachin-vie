
<template>
  <div>
    <p>
    {{ label }}
    </p>
  </div>
</template>

<script>
  export default {
    name: "button",
    props: {
      label: String }
  }
</script>


<style scoped>

  div {
    cursor: pointer;
  }

  p {
    text-align: center;
    background-color: #6C63FF;
    padding: 10px 20px;
    border-radius: 4px
  }
</style>
