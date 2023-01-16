<template>
    <div>
        <router-link to="/" tag="button"  class="btn btn-warning">home</router-link>
<input type="text"  value="task.taskname" v-model="task.taskname" />
<button >Add Task</button>

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
export default{
    //props:['task'],
    data(){
        return{
            task:[],
            tasks:{},
            id:this.$route.params.id,
        }
    },
   
    method:{
//         editTask:function(){
//      axios.put(`http://localhost:3000/task/`+this.id, {
//     taskname: '',
//     priority: ''
// });
// const res =  axios({
//     method: 'put',
//     url: 'http://localhost:3000/task/`+this.id,
//     data: {
//         title: 'Making PUT Requests with Axios',
//         status: 'published'
//     }
// });
        
   

    async created() {
    try {
      const res = await axios.get(`http://localhost:3000/task/`+this.id);
      this.task = res.data;
      console.log(this.task)
    } catch (error) {
      console.log(error);
    }
  },



}
}
</script>