import Vue from 'vue'
import Router from 'vue-router'
import BottomNav from '@/components/common/Bottomnav'
import TopNav from '@/components/common/Topnav'
import shouye from '@/components/page/shouye'
import Member from '@/components/page/Member'
import Vip from '@/components/page/Vip'
import Youhui from '@/components/page/Youhui'
import { Step, Steps, Icon} from 'vant'

Vue.use(Router)
Vue.use(Step).use(Steps)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/Mainnav', component: BottomNav},
    {path: '/Topnav', component: TopNav},
    {path: '/', component: shouye},
    {
      path: '/shouye',
      component: shouye,
      meta: {index: 2, title: '<img src="/static/topnav/logo.png " alt="logo">'}
    },
    {
      path: '/Youhui',
      component: Youhui,
      meta: {index: 2, title: '<p>优惠专区</p>'}
    },
    {
      path: '/Vip',
      component: Vip,
      meta: {index: 2, title: '<p>VIP权益</p>'}
    },
    {
      path: '/Member',
      component: Member,
      meta: {index: 2, title: '<p>个人中心</p>'}
    }
  ]
})
