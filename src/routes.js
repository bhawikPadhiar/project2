
import Hometask from './components/HomeTask';
import Addtask from './components/AddTask';
import TaskEdit from './components/TaskEdit';
import SignUp from './components/SignUp';
import Login from './components/LoginPage'
export default[
 
    { path:'/', component:Hometask },
    { path:'/Add', component:Addtask },
    { path:'/edit/:id', component:TaskEdit },
    { path:'/sign', component:SignUp },
    { path:'/login', component:Login }
    
  ]