import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Main from '../views/Main'
import MemberList from '../views/Member/MemberList'
import MemberLevel from '../views/Member/MemberLevel'
import NotFound from '../views/NotFound'

Vue.use(Router);

export default new Router({
  routes:[
  {
    // 首页
    path: '/main',
    name: 'Main',
    component: Main,
    children: [
      {
        // 会员列表
        path: '/member/List',
        name: 'MemberList',
        component: MemberList
      },
      {
        // 会员等级
        path: '/member/level/:id',
        name: 'MemberLevel',
        component: MemberLevel,
        props: true
      },
      {
        path: '/goMain/:name',
        redirect: '/main/:name'
      },
      {
        path: '*',
        component: NotFound
      }
    ]
    
  },{
    path:'/login',
    name:'login',
    component:Login
  }]
  
})