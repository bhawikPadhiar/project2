<template>
  
  <div>
    <header>
      <h1><i class="fas fa-tasks me-2"></i>TO DO LIST</h1>
      <hr>
    </header>
    
    <!-- <button class="btn btn-danger" v-on:click="">ADD TASK</button>
<router-link></router-link> -->
    <router-link to="/Add" tag="button" class="btn btn-primary">Add Task</router-link>
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
        <tbody>
          <tr v-for="task in tasks" v-bind:key="task.id" class="fw-normal">
            <th>
              <span v-bind:class="task.checked ? 'isclicked' : ''">{{ task.taskname }}</span>
            </th>
            <td class="align-middle">
              <span>{{ task.priority }}</span>

            </td>
            <td class="align-middle">
              <div>
                <!-- <input type="checkbox"    />
                           <label for="checkbox">{{ task.status}}</label> -->
                <input type="checkbox"  v-model="task.checked"
                  v-on:click="checkTask(task)" />
                <label for="checkbox">{{ task.checked ? 'done' : 'undone' }}</label>


              </div>
              <h6 class="mb-0"><span class="badge bg-danger"></span></h6>
            </td>
            <td class="align-middle">
              <!-- <button>edit</button> -->
              <router-link v-bind:to="'/edit/' + task.id" tag="button"
                class="btn btn-warning rounded-2">edit</router-link>
              <button v-on:click="removeItem(task.id)" class="btn btn-warning rounded-2">delete</button>

              <!-- <font-awesome-icon icon="fa-solid fa-trash" /> -->


            </td>

          </tr>

        </tbody>
      </table>
    </div>

  </div>

</template>

<script>
import axios from 'axios'


export default {
  // props: {
  //     msg: {
  //         type: Array
  //     }
  // },
  data() {
    return {
      tasks: [],
     task: [],
      // isclicked:false
     
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

    checkTask: function (task) {
      if (task.checked == false) {
        axios.put('http://localhost:3000/task/' + task.id,
          {
            taskname: task.taskname,
            priority: task.priority,
            checked: true,
            id: task.id,

          }).then(function () {
            // this.isclicked = true
            //this.cut.push('cut')
          });
      }
      else {
        axios.put('http://localhost:3000/task/' + task.id,
          {
            taskname: task.taskname,
            priority: task.priority,
            checked: false,
            id: task.id,

          }).then(function () {
            // this.isclicked = false
            //this.cut.push('cut')
          });

      }

    }
  }
}
</script>
<style>
*,
h1,
button {
  font-family: 'Nunito', sans-serif;
}

#checkboxes input {
  display: inline-block;
}

.isclicked {
  text-decoration: line-through;
}
</style>