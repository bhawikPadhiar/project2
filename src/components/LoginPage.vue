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
       
    async checkUser(password) {
    //... fetch user from a db etc.
   const res = axios.get(`http://localhost:3000/task/`)
   this.task = res.data;
    //hash=this.task.hash
   const match = await bcrypt.compare(password,this.task.hash);
   console.warn
   //if (bcrypt.compareSync(password,hash)) {
        // authentication failed
    //     return false;
    // } else {
    //     // authentication successful
    //     return true;
    // }
    // async function checkUser(password) {
    //... fetch user from a db etc.

   // const match = await bcrypt.compare(password, user.passwordHash);

    if(match) {
        //login
    }

    //...
}
  // bcrypt.compare(password,hash => {
   // const match =  bcrypt.compare(this.password,this.task.hash);
  // const verified = bcrypt.compareSync('password', this.task.hash);
   //const match = bcrypt.compareSync(password,hash);
   //console.warn(verified);
  // if (verified) {
  //   console.warn("succes")
  //   return
  // }
  // console.log("lost") //true or false
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

  
    

</script>