<template>
    <div>
      <button @click="childButtonClick">Call Parent Method</button>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    emits: ['childButtonClick'],
    methods: {
      childButtonClick() {
        // Emit an event to call the parent method
        this.$emit('childButtonClick');
      },
    },
  });
  </script>
  