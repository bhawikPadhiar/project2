import Vue from 'vue'
// import VueRouter from 'vue-router'
import App from './App.vue'
import VueResource from 'vue-resource'
// import Routes from './routes.js'




 Vue.config.productionTip = false


Vue.use(VueResource);
// Vue.use(VueRouter);

// const router = new VueRouter({
// routes:Routes,

// });
new Vue({
  render: h => h(App),
 // router:router
}).$mount('#app')
