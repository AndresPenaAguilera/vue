<!-- App.vue -->

<template>
   <button @click="openModal">Open alert</button>
    <div id="app">
      <Alert v-if="isOpen">
       <template v-slot:header>
            This is a header
       </template>
       <template v-slot:footer>
            This is a footer
            <button @click="closeModal">  Bye bye</button>
       </template>  
       <template v-slot:body>
            This is a body
       </template>   
       <!-- destructuring -->
       <template v-slot:exposed="slotProps"> 
            <h2>{{ slotProps }}</h2>
        </template>
    </Alert>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import Alert from './AlertSlotComponent.vue';
  
  export default {
    components: {
      Alert,
    },
    setup(){
        
        const isOpen = ref(false)

        return {
            isOpen,

            openModal : () => isOpen.value = true,
            closeModal: () => isOpen.value = false,
        }
    }
  };





  </script>
  