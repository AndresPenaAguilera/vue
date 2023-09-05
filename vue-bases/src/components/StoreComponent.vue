
<template>
    <div>
      <p>Couter store: {{ counter }}</p>
      <button @click="incrementCounter">Increment</button>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      counter() {
        return this.$store.state.counter;
      },
    },
    methods: {
      incrementCounter() {
        this.$store.commit('increment');
      },
    },
  };
  </script>
  