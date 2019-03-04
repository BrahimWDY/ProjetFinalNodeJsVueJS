import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Customers from './views/Customers.vue'
import Employees from './views/Employees.vue'
import AddProject from './views/AddProject.vue'
import EditProject from './views/ProjectUpdate.vue'
import DetailProjet from './views/DetailProjet.vue'
import AddCustomer from './views/AddCustomer.vue'
import EditCustomer from './views/CustomerUpdate.vue'
import AddEmployee from './views/AddEmployee.vue'
import EditEmployee from './views/EmployeeUpdate.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/employees',
      name: 'Employees',
      component: Employees
    },
    {
      path: '/addproject',
      name: 'AddProject',
      component: AddProject
    },
    {
      path: '/editproject/:id',
      name: 'EditProject',
      component: EditProject
    },
    {
      path: '/detailprojet/:id',
      name: 'DetailProjet',
      component: DetailProjet
    },
    {
        path: '/addcustomer',
        name: 'AddCustomer',
        component: AddCustomer
    },
    {
        path: '/editcustomer/:id',
        name: 'EditCustomer',
        component: EditCustomer
    },
    {
        path: '/addemployee',
        name: 'AddEmployee',
        component: AddEmployee
    },
    {
      path: '/editemployee/:id',
      name: 'EditEmployee',
      component: EditEmployee
    },
  ]
})
