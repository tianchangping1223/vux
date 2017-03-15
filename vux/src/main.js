import Vue from 'vue'
//路由引入
import VueRouter from "vue-router"

import App from './App'

//加  引入
import ConfigRoute from './config_router'

//在vue里面挂载VueRouter
Vue.use(VueRouter)
//实例化路由
let router = new VueRouter();
//var router =new VueRouter();
//传实例化对象router
ConfigRoute(router)//接收方法,执行config_router.js

//入口
router.start(App,"#app")