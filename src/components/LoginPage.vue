<template>
    <div>
        <header>
            Login page
        </header>
        <div>
            <input type="text" v-model="task.email" />
            <input type="password" v-model="password" />
            <button v-on:click="checkUser">SignIn</button>
            
        </div>
  
    
    </div>
    
    </template>

    <script>
    import axios from 'axios';
    import bcrypt from 'bcryptjs';

    export default{
       
        data(){
        return{
        task:[],
            tasks:[],
          password:'',
    }},
    async created() {
    try {
      const res = await axios.get(`http://localhost:3000/task/`);
      this.task = res.data;
      console.log(this.value)
    } catch (error) {
      console.log(error);
    }
  },
    methods:{
       
     checkUser(password,hash) {
    //... fetch user from a db etc.
 //   axios.get(`http://localhost:3000/task/`)
   // bcrypt.compare(password,hash, (err, res) => {
   const match = bcrypt.compareSync(password, hash);
  if (match) {
    console.warn("succes")
    return
  }
  console.log("lost") //true or false
}
//     const match = await bcrypt.compare(this.password,this.task.hash);
   
//     if(match) {
//         //login
//         console.warn("sucess");

//     }else
//     console.warn("failed")

//     //...
// }

       
    
    }

    }
    
    
</script>