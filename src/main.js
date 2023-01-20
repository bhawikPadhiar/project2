// const bcrypt = require('bcrypt');

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueResource from 'vue-resource'
import Routes from './routes'
export const bus = new Vue();
// import bcrypt from 'bcrypt'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false



Vue.use(VueResource);
// Vue.directive('theme', {
//   bind(el, binding, vnode) {
//     if (binding.value == 'done') {
//       el.style.color = "red"
//     } else {
//       el.style.textDecoration
//     }
//   }
// })

Vue.use(VueRouter);
//routes
// SignUp.post('/signup',(req,res,next)=>{
//   const newUser = new User({
//     email:req.body.email,
//     password:bcrypt.hashSync(req.body.password,10)
//   })
// })
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
