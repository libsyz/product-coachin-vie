<template>

  <section>
    <h1> {{ name }}</h1>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'tryout',
    props: {
      name: String
    },
    mounted () {
      this.name = this.hello;
    },
    data () {
      return {
      }
    },
    methods: {
      calculate() {
        return this.data();
      }

    },
    computed: {
      hello: function(){
        return "hello!"
      }

    }
}


</script>

<style scoped>
  .tryout {

  }
</style>
