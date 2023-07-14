// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vuex);

Vue.prototype.axios = axios;

Vue.config.productionTip = false

// 路由跳转之前
router.beforeEach((to, from, next)=>{
  let isLogin = sessionStorage.getItem('isLogin');
// 注销
  if(to.path=='/logout'){
    // 清空
    sessionStorage.clear();
    // 跳转到登陆页面
    next({path:'/login'});
  } else if (to.path=='login'){
    // 判断是否为空 不为空 跳转至首页
    if (isLogin != null){
      next({path: '/main'});
    }
  } else if (isLogin==null){
    next({path: '/login'});
  }

  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
