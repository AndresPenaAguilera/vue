<template>
    <div>

      <h1>Title:{{ title }}</h1>
      <button @click="onChangeTitle">onChangeTitle</button>

    </div>
</template>

<script>

import {
  ref,
onMounted,
onUpdated,
onUnmounted,
onBeforeMount,
onBeforeUpdate,
onBeforeUnmount,
onErrorCaptured,
onRenderTracked,
onRenderTriggered,
onActivated,
onDeactivated,
onServerPrefetch,
} from 'vue'

export default {

  setup(){

    const title = ref('title')
    
    onMounted(()=>{
      console.log('onMounted')
    }) 
    onUpdated(()=>{
      console.log('onUpdated')
    }) 
    onUnmounted(()=>{
      console.log('onUnmounted')
    }) 
    onBeforeMount(()=>{
      console.log('onBeforeMount')
    }) 
    onBeforeUpdate(()=>{
      console.log('onBeforeUpdate')
    }) 
    onBeforeUnmount(()=>{
      console.log('onBeforeUnmount')
    }) 
    onErrorCaptured(()=>{
      console.log('onErrorCaptured')
    }) 
    onRenderTracked(()=>{
      console.log('onRenderTracked')
    }) 
    onRenderTriggered(()=>{
      console.log('onRenderTriggered')
    }) 
    onActivated(()=>{
      console.log('onActivated')
    }) 
    onDeactivated(()=>{
      console.log('onDeactivated')
    }) 
    onServerPrefetch(()=>{
      console.log('onServerPrefetch')
    }) 

    return{
      title,
      onChangeTitle:()=> title.value = 'new title'
    }
  }
}
</script>

<style>

</style>
