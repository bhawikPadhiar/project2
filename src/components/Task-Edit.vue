<template>
    <div>
        <router-link to="/" tag="button" class="btn btn-warning">home</router-link>
<input type="text" placeholder="taskname"  v-model="task.taskname" />
<button v-on:click="editTask">Add Task</button>
</div>
</template>

<script>
export default{
    //props:['task'],
    data(){
        return{
            newTask:"",
            task:[]
        }
    },
    methods: {
    editTask() {
        this.task.push({ text: this.taskname })
      this.taskname = '';
    }
  }


}
</script>