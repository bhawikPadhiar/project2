<template>
    <div>
        <router-link to="/" tag="button"  class="btn btn-warning">home</router-link>
<input type="text"  value="task.taskname" v-model="task.taskname" />
<button v-on:click="editTask">Add Task</button>

<div>Selected:{{ task.priority }}</div>
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
export default{
    //props:['task'],
    data(){
        return{
            task:[],
            tasks:[],
            id:this.$route.params.id,
        }
    },
    async created() {
    try {
      const res = await axios.get(`http://localhost:3000/task/`+this.id);
      this.task = res.data;
      console.log(this.task)
    } catch (error) {
      console.log(error);
    }
  },
   
    methods:{
      editTask:function(){
      axios.put('http://localhost:3000/task/'+this.$route.params.id, 
	{ 
    taskname: this.task.taskname,
        priority: this.task.priority,
		// taskname:"", 
		// priority:""
	}, 
	{
		// Config
	}
);}
// const res =  axios({
//     method: 'put',
//     url: 'http://localhost:3000/task/`+this.id,
//     data: {
//         title: 'Making PUT Requests with Axios',
//         status: 'published'
//     }
// });
        


  //   async created() {
  //   try {
  //     const res = await axios.get(`http://localhost:3000/task/`+this.id);
  //     this.tasks = res.data;
  //     console.log(this.task)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },



}
}
</script>