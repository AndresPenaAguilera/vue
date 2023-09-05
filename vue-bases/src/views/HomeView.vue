<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Compute msg="Welcome to compute example"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Compute from '@/components/Compute.vue'

export default {
  name: 'HomeView',
  components: {
    Compute
  }
}
</script>
