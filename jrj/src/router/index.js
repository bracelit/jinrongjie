import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home'
import Finance from '../components/pages/Finance'
import Stock from '../components/pages/Stock'
import Search from '../components/pages/Search'
import Login from '../components/pages/Login'
import Reg from '../components/pages/Reg'
import Rise from '../components/pages/Rise'
import Newest from '../components/pages/Newest'
import Read from '../components/pages/Read'
import Review from '../components/pages/Review'
import Detail from '../components/pages/Detail'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
    	path:'/detail',
    	name:'Detail',
    	component:Detail
    },
    {
    	path:'/',
    	redirect:'Home'
    },
    {
    	path:'/finance',
    	name:'Finance',
    	component:Finance
    },
    {
    	path:'/stock',
    	name:'Stock',
    	component:Stock
    },
    {
    	path:'/search',
    	name:'Search',
    	component:Search
    },
     {
    	path:'/login',
    	name:'Login',
    	component:Login
    },
     {
    	path:'/reg',
    	name:'Reg',
    	component:Reg
    },
    {
    	path:'/rise',
    	name:'Rise',
    	component:Rise,
    	redirect:'/Newest',
    	children:[
        {path:'/newest',name:'Newest',component:Newest},
        {path:'/read',name:'Read',component:Read},
        {path:'/review',name:'Review',component:Review}
      ]
    }
  ]
})
