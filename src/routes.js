import Hometask from './components/Home-task';
import Addtask from './components/Add-task';
import TaskEdit from './components/Task-Edit';
export default[

    { path:'/', component:Hometask },
    { path:'/Add', component:Addtask },
    { path:'/edit/:id', component:TaskEdit }
    
  ]