<template>
  <div >
    <h1>{{ msg }}</h1>
    <hr>
    <p>{{ getNumber() }}</p>
    <p>{{ getNumber() }}</p>
    <p>{{ getNumberComputed }}</p>
    <p>{{ getNumberComputed }}</p>
   
  </div>
</template>

<script>
export default {
  name: 'Compute',
  props: {
    msg: String
  },

  data(){
    return {
      number : 5
    }
  }, 
  methods: {
    getNumber()
    {
      console.log("call method getNumber")
      return this.number * this.number
    }
  }, 
  computed:{
    getNumberComputed(){
      console.log("call computed property getNumberComputed")
      return this.number * this.number
    }
    
  }
}
</script>


<style scoped>

</style>
