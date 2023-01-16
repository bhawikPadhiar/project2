<template>
    <div>
    <header>
<h1>TO DO LIST</h1>
<hr>
</header>
<!-- <button class="btn btn-danger" v-on:click="">ADD TASK</button>
<router-link></router-link> -->
<router-link to="/Add" tag="button" class="btn btn-warning rounded-2">Add Task</router-link>
    <div class="card-body" data-mdb-perfect-scrollbar="true" style="position: relative; height: 400px">
<!-- <div v-for="task in tasks" class="show"> -->
    <table class="table mb-0">
                <thead>
                  <tr>                   
                    <th scope="col">Task</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody >
                  <tr v-for="task in tasks" v-bind:key="task.id" class="fw-normal">
                    <th>
                      <span class="ms-2">{{task.taskname}}</span>
                    </th>
                    <td class="align-middle">
                      <span>{{ task.priority }}</span>
                      
                    </td>
                    <td class="align-middle">
                        <div>
                            <input type="checkbox"  v-model="task.toggle" true-value="done" false-value="undone" />
                           <label for="checkbox"> {{ task.toggle }}</label>
                            
                          </div>
                      <h6 class="mb-0"><span class="badge bg-danger"></span></h6>
                    </td>
                    <td class="align-middle">
                        <!-- <button>edit</button> -->
                        <router-link to="/edit" tag="button" class="btn btn-warning rounded-2">edit</router-link>
                        <button v-on:click="removeItem(task.id)">delete</button>
                        
                        <!-- <font-awesome-icon icon="fa-solid fa-trash" /> -->
                      <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i
                          class="fas fa-trash-alt text-danger"></i></a>
                          
                    </td>
                    
                  </tr>
                  
                  </tbody>
                  </table>
</div>

</div>

</template>

<script>
import axios from 'axios'


export default{
    // props: {
    //     task: {
    //         type: Array
    //     }
    // },
    data() {
        return {
            tasks: [],
            task:[]
        };
    },
    async created() {
    try {
      const res = await axios.get(`http://localhost:3000/task`);
      this.tasks = res.data;
      console.log(this.task)
    } catch (error) {
      console.log(error);
    }
  },
    methods: {
      removeItem(id) {
      axios.delete(`http://localhost:3000/task/${id}`);
      this.tasks = this.tasks.filter((task) => task.id !== id);
      console.log(id);
    },


    },
    // created() {
    //     this.$http.get("http://localhost:3000/task").then(function (data) {
    //         console.log(data);
    //         this.tasks = data.body;
    //     });
    // },
    
}
</script>
<style>
#checkboxes input{
display:inline-block;

}
</style>