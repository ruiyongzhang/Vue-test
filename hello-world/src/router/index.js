import Vue from 'vue'
import Router from 'vue-router'
import Content from '../components/Content'


Vue.use(Router);

export default new Router({
  routers:[{
    // 路由跳转路径
    path:'/content',
    // 路由名称
    name:'Content',
    // 路由跳转组件
    component: Content
  }]
})