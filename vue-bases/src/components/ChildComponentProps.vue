<template>
    <div>
      <h2>Child Component</h2>
      <p>Prop Message from Parent: {{ propMessage }}</p>
      <p>Local Data Message: {{ localMessage }}</p>
      <button @click="updateLocalMessage">Update Local Message</button>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref, props } from 'vue';
  
  export default defineComponent({
    props: {
      propMessage: String,
    },
    data() {
      return {
        localMessage: 'Hi from Child!',
      };
    },
    methods: {
      updateLocalMessage() {
        this.localMessage = 'Updated Local Message from Child!';
      },
    },
  });
  </script>
  