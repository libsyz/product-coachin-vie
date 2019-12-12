<template>

  <section>
    <h1 @click="rename()"> {{ namePlaceholder }}</h1>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'tryout',
    props: {
      name: {
        type: String,
        default: "Whatup"
      }
    },
    mounted () {
    },
    data () {
      return {
        activated: true,
        namePlaceholder: "Placeholdin",
        listen: "This is something important"
      }
    },
    methods: {
      rename() {
        if (this.activated) {
          this.namePlaceholder = this.listen
        }
        else {
          this.namePlaceholder = "Placeholdin "
        }
        this.activated = !this.activated

      }

    },
    computed: {
    }
}


</script>

<style scoped>
  .tryout {

  }
</style>
