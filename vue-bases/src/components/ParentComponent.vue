<template>
    <div>
      <p>{{ message }}</p>
      <ChildComponent @childButtonClick="parentMethod" />
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import ChildComponent from './ChildComponent.vue';
  
  export default defineComponent({
    components: {
      ChildComponent,
    },
    data() {
      return {
        message: 'Hello from ParentComponent!',
      };
    },
    methods: {
      parentMethod() {
        this.message = 'Parent method called from ChildComponent!';
      },
    },
  });
  </script>
  