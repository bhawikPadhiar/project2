<template>
<div>
    <header>
        Sign Up page
    </header>
    <div>
        <input type="text" v-model="firstname" />
        <input type="text" v-model="lastname" />
        <input type="text" v-model="email" />
        <input type="password" v-model="pvtData" />
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
export default{
//     setup () {
//     return { v$: useVuelidate() }
//   },
    data(){
        return{
        task:[],
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    pvtData: "",
      secret: "123#$%",
      encData: "",
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
    //     signin(){
    //     let users = axios.post('http://localhost:3000/task/',{
    //      firstname:this.firstname,
    //      lastname:this.lastname,
    //      email:this.email,
    //      password:this.password
    //     });
    //   console.warn(users);
    //     }
    // },
    encryptData() {
      if (this.pvtData.length) {
        // hash the name with any algorithm
        const data = CryptoJS.AES.encrypt(this.pvtData, this.secret).toString();

        // store into localStorage
        localStorage.setItem("secretData", data);

        // display the encrypted data
        this.getEncryptedData();
      }
    },
}}
</script>