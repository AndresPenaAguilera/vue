<template>
  <h1>Number View</h1>
  <h2>{{ number }}</h2>

  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
  
</template>

<script>
import useCounter from '@/composables/useCounter'

export default {
    name: 'Composable',
    props: {},
    emits: [],
    setup() {

        const { number, increase, decrease } = useCounter(25)
       

        return {
            number, increase, decrease
        }
    },
}
</script>

<style>

</style>