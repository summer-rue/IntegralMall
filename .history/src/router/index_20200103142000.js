import Vue from 'vue'
import Router from 'vue-router'
import BottomNav from '@/components/common/Bottomnav'
import TopNav from '@/components/common/Topnav'
import shouye from '@/components/page/shouye'
import Member from '@/components/page/Member'
import Vip from '@/components/page/Vip'
import Youhui from '@/components/page/Youhui'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/Mainnav', component: BottomNav},
    {path: '/Topnav', component: TopNav},
    {path: '/', component: shouye},
    {path: '/shouye', component: shouye},
    {
      path: '/Youhui',
      component: Youhui,
      meta: {index: 2, title: '<img src="../../assets/images/topnav/yh-logo.png" alt="logo">'}
    },
    {path: '/Vip', component: Vip},
    {path: '/Member', component: Member}
  ]
})
