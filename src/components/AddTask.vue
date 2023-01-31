<template>
  <div>
    <!-- <router-link to="/" tag="button" class="btn btn-warning">home</router-link> -->

    <input type="text" v-model="taskss.taskname" />
    <button v-on:click="change">ADDTask</button>
    <div>Selected: {{}}</div>

    <select v-model="taskss.priority">
      <option disabled value="">Please select one</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  </div>

</template>
<script>
//import axios from 'axios'

export default {
  props: ['task'],
  data() {
    return {
      taskss: {
        priority: '',
        //mutate:this.task,
        //task: [],
        // mutableList: this.task,
        taskname: ''

      }

    }
  },
  methods: {
    change() {
      this.$emit("changename", this.taskss)
      // console.warn(this.taskname)
      //  this.$emit("prio",this.priority)
      // console.warn(this.priority)
    },
    // addname(){
    //   this.$emit("changename",this.taskname)
    // }
    //  priority(){
    //   this.$emit("prio",this.priority)
    //   console.warn(this.priority)
    //  }

  }
  // async addTask() { 
  //   this.$emit('prioselect',this.priority),
  //   this.$emit('taskname',this.taskname)
  //   const res = await axios.post(`http://localhost:3000/task`, {
  //     taskname: this.taskname,
  //     priority: this.priority,
  //     checked: false,

  //    // done: false
  //   });
  //   this.task = [this.task, res.data];
  //   this.taskname = "",
  //     this.priority = ""
  //  }


}


    // post:function(){
    //     this.$http.post('http://localhost:3000/task',{
    //         taskname:this.task.taskname,
    //         priority:this.task.priority
    //     }).then(function(data){

    //     })
    // }



</script>