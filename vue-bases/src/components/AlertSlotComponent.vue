<template>

    <div class="alert">
      <slot name="header">Without content</slot>
      <hr>
      <slot name="body">Without content</slot>
      <hr>
      <slot name="footer">Without content</slot>
      <hr>
      <slot name="exposed" :aValue="value"></slot>

    </div>
  </template>
  <script>
  export default {
    
    setup(){
        
       

        return {
            value:"otherValue"
        }
    }
  };
  </script>
  <style>
  .alert {
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #f2f2f2;
    color: #333;
  }
  </style>