<template>
  <div id="app">
    
    <!-- <home-page v-bind:task="task"></home-page> -->
    <!-- <home-page v-bind:msg="task"></home-page> -->
    <router-view></router-view>
<SignUp></SignUp>
    <!-- <add-task v-bind:msg="task" @messageChanged="message = $event"></add-task> -->
    <!-- <task-edit v-bind:task="task"></task-edit> -->
    <!-- <Addtask v-bind:task="task"></Addtask> -->
  
  </div>
</template>

<script>
import SignUp from './components/SignUp.vue';
// import Homepage from './components/HomeTask.vue'
// import Addtask from './components/AddTask.vue';
//import TaskEdit from './components/Task-Edit.vue';
export default {
  // name: 'App',
  //  props:{
  //     task:{
  //         type:Array
  //     }
  // },
  components: {
    SignUp
    // 'home-page':Homepage,
    // 'add-task':Addtask,
   // 'task-edit':TaskEdit

  },
  data() {
    return {
      task: [],
  

    }
  },


}
</script>

<style>

</style>
