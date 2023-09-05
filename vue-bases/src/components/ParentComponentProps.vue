<template>
    <div>
      <h1>Parent Component</h1><br/>
      <p>Message from Parent: {{ message }}</p>
      <ChildComponent :propMessage="message" />
      <button @click="updateMessage">Update Message</button>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import ChildComponent from './ChildComponentProps.vue';
  
  export default defineComponent({
    components: {
      ChildComponent,
    },
    data() {
      return {
        message: 'Hi from Parent!',
      };
    },
    methods: {
      updateMessage() {
        this.message = 'Updated Message from Parent!';
      },
    },
  });
  </script>
  