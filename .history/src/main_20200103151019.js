// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {Cell, CellGroup, Tabbar, TabbarItem, PullRefresh, Stepper, Tab, Tabs, Button, Row, Col, Swipe, SwipeItem, Lazyload, List, Field, NavBar} from 'vant'
import '../src/assets/css/common.css'
import '../src/assets/css/index.css'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import BScroll from 'better-scroll'

// Vue.use(BScroll)
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.use(Cell).use(CellGroup).use(Tabbar).use(TabbarItem).use(Stepper).use(PullRefresh).use(Tab).use(Tabs).use(Field).use(NavBar).use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  console.log(to.meta.title)
  let i = document.getElementById('top-logo-change').innerHTML
  if (to.meta.title) {
    document.getElementById('top-logo-change').innerHTML = to.meta.title
    if (i === to.meta.title) {
      document.getElementById('top-nav-right').innerHTML = '<img src="/static/topnav/cd.png" alt="搜索">'
    }
    // document.title = to.meta.title
  }
  next()
})
