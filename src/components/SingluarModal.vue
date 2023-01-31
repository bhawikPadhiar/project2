<template>
    <div class="container">
      <!-- <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="openmodel"
      >
        Launch demo modal
      </button> -->
      <!-- Modal -->
      <div
        v-if="OpenClose"
        class="modal fade show"
        style="display: block"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Edit To Do List</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                @click="CloseFun"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input type="text" class="form-control" v-model="editododatalists.taskname" />
    <!-- <button v-on:click="editTask()">Edit Task</button> -->
    <select class="form-select" v-model="editododatalists.priority">
      <option class="badge bg-success">Low</option>
      <option class="badge bg-warning">Medium</option>
      <option class="badge bg-danger">High</option>
    </select>
             
              <!-- <li v-for="data in editlistdata">{{ data }}</li> -->
            </div>
            <div class="modal-footer">
              <button
                type="button"
                data-bs-dismiss="modal"
                @click="CloseFun"
                :class="'btn btn-' + variant"
              >
                Close
              </button>
              <button
                type="button"
                @click="editTask(editododatalists)"
                class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios";
  export default {
    name: "EditToDoModel",
    props: {
      task: Array,
      visible: Boolean,
      variant: String,
      editododatalist: Object,
    },
    data() {
      return {
        OpenClose: this.visible,
        editododatalists:this.editododatalist
      };
    },
     
    methods: {
      openmodel() {
        this.OpenClose = !this.OpenClose;
      },
      editTask: function (editododatalists) {
      axios.put('http://localhost:3000/task/' + editododatalists.id,
        {
          taskname: this.editododatalists.taskname,
          priority: this.editododatalists.priority,     
          checked: editododatalists.checked  
        },
        {
          // Config
        }
      );this.OpenClose = !this.OpenClose;
        this.$emit("close-modal-event");
    },
    //   async OpenCloseFun(editdata) {
    //     // console.log(editdata);
    //     try {
    //       const user = await axios.put(
    //         "http://localhost:3000/todos/" + editdata.id,
    //         {
    //           taskName: this.editdata.taskName,
    //           addpriority: this.editdata.addpriority,
    //           status: editdata.status,
    //         }
    //       );
    //       console.log(user.data);
    //       this.OpenClose = !this.OpenClose;
    //       this.$emit("close-modal-event");
    //       // this.$router.push("/");
    //       // alert("User updated!");
    //     } catch (e) {
    //       console.log(e);
    //     }
    //     this.OpenClose = !this.OpenClose;
    //     this.$emit("close-modal-event");
    //   },
      CloseFun() {
        this.OpenClose = !this.OpenClose;
        this.$emit("close-modal-event");
      },
    },
    watch: {
      visible: function (newVal) {
        this.OpenClose = newVal;
        //   this.OpenClose = oldVal;
      },
    },
  };
  </script>