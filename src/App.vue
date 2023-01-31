<template>
  <div id="app">
    
    <!-- <home-page v-bind:task="task"></home-page> -->
    <home-page v-bind:task="task" ></home-page>
    <!-- <router-view></router-view> -->
<!-- <SignUp></SignUp>
<LoginPage></LoginPage> -->

    <!-- <add-task v-bind:task="task" v-on:changename="updateSite($event)"></add-task> -->
    <!-- <task-edit v-bind:task="task"></task-edit> -->
    <!-- <Addtask v-bind:task="task"></Addtask> -->
  
  </div>
</template>

<script>
// import SignUp from './components/SignUp.vue';
// import LoginPage from './components/LoginPage.vue';
//import axios from 'axios';
//import SingluarModal from './components/SingluarModal.vue';
import Homepage from './components/HomeTask.vue'
//import Addtask from './components/AddTask.vue';
//import TaskEdit from './components/Task-Edit.vue';
export default {
  // name: 'App',
  //  props:{
  //     task:{
  //         type:Array
  //     }
  // },
  components: {
    // SignUp,
    // LoginPage,
//SingluarModal,
    'home-page':Homepage,
   //'add-task':Addtask,
   // 'task-edit':TaskEdit

  },
  data() {
    return {
      task: [],
    visible:false

    }
  },
  methods:{ 
  
  }


}


</script>

<style>

</style>
