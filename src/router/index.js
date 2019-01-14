import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home/home'
import homePage from '@/components/home/homePage'
import search from '@/components/home/search'

Vue.use(Router)

export default new Router({
  routes: [
      // {path: '/',name: 'HelloWorld',component:HelloWorld},
      // {path: '/home',
      //     component: home,
      //     children: [
      //         {path: '/', redirect: '/home/homePage'},
      //         {path: '/home/homePage', component: homePage},
      //         {path: '/home/search', component: search}
      //     ]
      // },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
