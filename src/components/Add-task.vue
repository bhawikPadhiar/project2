<template>


  <div>
    <router-link to="/" tag="button" class="btn btn-warning">home</router-link>

    <input type="text" v-model="task.taskname" />
    <button v-on:click="addTask">ADDTask</button>
    <div>Selected: {{ task.priority }}</div>

    <select v-model="task.priority">
      <option disabled value="">Please select one</option>
      <option>Low</option>
      <option>Medium</option>
      <option>High</option>
    </select>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  // props:{
  //     task:{
  //         type:Array
  //     }
  // },
  data() {
    return {
      //  mutate:this.task,
      task: [],

    }
  },
  methods: {
    async addTask() {
      const res = await axios.post(`http://localhost:3000/task`, {
        taskname: this.task.taskname,
        priority: this.task.priority,
        checked: false,
       // done: false
      });
      this.task = [this.task, res.data];
      this.taskname = "",
        this.priority = ""
    },


    // post:function(){
    //     this.$http.post('http://localhost:3000/task',{
    //         taskname:this.task.taskname,
    //         priority:this.task.priority
    //     }).then(function(data){

    //     })
    // }
  }

}
</script>