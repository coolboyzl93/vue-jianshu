import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// practices
import Veevalidate from '@/components/practices/veevalidate'
import Echart from '@/components/practices/echarts'

// jianshu
import Jianshu from '@/components/jianshu/JianShu'
import follow from '@/components/jianshu/LLRC_C'
import Find from '@/components/jianshu/find'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'JianShu',
      component: Jianshu,
      children: [
        {
          path: 'follow',
          name: 'LLRC_C',
          component: follow
        },
        {
          path: '/',
          name: 'find',
          component: Find
        }
      ]
    },
    // one try!! add a router yeah!! successful!!
    {
      path: '/Veevalidate',
      name: 'Veevalidate',
      component: Veevalidate
    },
    {
      path: '/Echart',
      name: 'Echart',
      component: Echart
    }
  ]
})
