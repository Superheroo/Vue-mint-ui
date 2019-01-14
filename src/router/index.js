import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import loadingMore from '@/components/loadingMore'
import lazyLoad from '@/components/lazyLoad'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/loadingMore',
      name:'loadingMore',
      component:loadingMore
    },
    {
      path:'/lazyLoad',
      name:'lazyLoad',
      component:lazyLoad
    }
  ]
})
// import后面的from指定模块文件的位置，可以是相对路径，也可以是绝对路径。如果是模块名，不带有路径，那么必须有配置文件，告诉js引擎该模块的位置。
