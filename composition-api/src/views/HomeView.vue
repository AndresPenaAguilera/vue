<template>
  <div class="home">
    <h1>Reactive Vs Ref</h1>
    <h2>Ref: {{ refExample }}</h2>
    <h2>Reactive:{{ reactiveExample }}</h2>
    <button @click="changeRef">changeRef</button>
    <button @click="changeReactive"> changeReactive</button>

    <h2>Ref: {{ refExampleBool }}</h2>
    <h2>Reactive:{{ reactiveExampleBool }}</h2>
    <button @click="changeStatus">changeStatus</button>
  </div>
</template>

<script>

import { ref, reactive} from 'vue'
export default {
  name: 'HomeView',

  setup(){

    const refExample = ref({ name:'Example', age:10})
    const reactiveExample = reactive({ name:'Example reactive', age:10})

    const refExampleBool = ref(false)
    const reactiveExampleBool = reactive(true)

    const changeStatus =()=>{
      refExampleBool.value = !refExampleBool.value
      //reactive only can read objects
       //reactiveExampleBool = !reactiveExampleBool
    }

    return {
      refExample,
      reactiveExample,
      refExampleBool,
      reactiveExampleBool,

      changeRef: ()=>{
        refExample.value.name ='Example changed'
      },
      changeReactive: ()=>{
        reactiveExample.name ='Example changed too'
      },
      changeStatus
    }

  }
}
</script>
