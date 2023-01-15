<template>
  <div id="app">
   <home-page v-bind:task="task"></home-page>
   <!-- <router-view v-bind:task="task"></router-view> -->

  </div>
</template>

<script>
import Homepage from './components/Homepage.vue'


export default {
  name: 'App',
  components: {
    'home-page':Homepage,
    
  },
  data(){
    return{
    task:[]}
  }
}
</script>

<style>

</style>
