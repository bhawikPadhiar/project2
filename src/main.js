import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueResource from 'vue-resource'
import Routes from './routes'

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

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
