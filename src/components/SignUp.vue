<template>
<div>
    <header>
        Sign Up page
    </header>
    <div>
        <input type="text" v-model="task.email" />
        <input type="password" v-model="password" />
        <button v-on:click="signin">SignIn</button>
        
    </div>
<footer>
    already a customer?<button>log in</button>
</footer>

</div>

</template>

<script>
// import { useVuelidate } from '@vuelidate/core'
// import { required, email } from '@vuelidate/validators'
import axios from 'axios'
//import { isCryptoKey } from 'util/types';
import bcrypt from 'bcryptjs'

//const bcrypt = require("bcrypt")


export default{
  //  
  
//     setup () {
//     return { v$: useVuelidate() }
//   },


    data(){
        return{
        task:[],
      password:''


    // password:bcrypt.hashSync(this.password,10),
    // pvtData: "",
    //   secret: "123#$%",
    //   encData: "",

}
    },
// vue version 3 required
//     validations(){
//         return {
//       firstName: { required }, // Matches this.firstName
//       lastName: { required }, // Matches this.lastName
    
//         email: { required, email } // Matches this.contact.email
      
//     }
//   }
    methods:{
        
       async signin(){
       {
        let users = await axios.post('http://localhost:3000/task/',{ 
         email:this.task.email,
         hash:bcrypt.hashSync(this.password,10)
         
        });console.warn(users);
    //     if(users.status==201)
    //     {
    //         localStorage.setItem("user-info",JSON.stringify(users.data))
    //         this.$router.push({name:'login'})
    //     }}
     }}
        // mounted(){
        //     let user = localStorage.getItem('user-info');
        //     if(user)
        //     {
        //         this.$router.push({name:'login'})
        //     }
        // }}
       // const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
//        bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//         // Store hash in your password DB.
//         console.warn(hash)
        
//     });
// })
        
    // encryptData() {
    //   if (this.pvtData.length) {
    //     // hash the name with any algorithm
    //     const data = CryptoJS.AES.encrypt(this.pvtData, this.secret).toString();

    //     // store into localStorage
    //     localStorage.setItem("secretData", data);

    //     // display the encrypted data
    //     this.getEncryptedData();
    //   }
    // },
}}
</script>