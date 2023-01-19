import Hometask from './components/HomeTask';
import Addtask from './components/AddTask';
import TaskEdit from './components/TaskEdit';
export default[

    { path:'/', component:Hometask },
    { path:'/Add', component:Addtask },
    { path:'/edit/:id', component:TaskEdit }
    
  ]