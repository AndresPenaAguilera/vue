<template>
  <h1>Counter</h1>
  <h2>{{ counter }}</h2>
  <button @click="increase">+1</button>
   <button  @click="decrease">-1</button>
</template>

<script>

import useCounter from '@/composables/useCounter'

export default {
    name:"Counter",
    props:{ },
    emits:[],
    setup(){
       const { increase, decrease, counter } = useCounter( 0 )
        
       return {
            increase, decrease, counter
       }
    }
}

</script>

<style>

</style>