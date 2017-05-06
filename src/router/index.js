/**
 * Created by lizixiang on 2017/5/6.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '../pages/index.vue'
import DetailPage from '../pages/detail.vue'
import OrderListPage from '../pages/orderList.vue'
import DetailAnaPage from '../pages/detail/analysis.vue'
import DetailCouPage from '../pages/detail/count.vue'
import DetailForPage from '../pages/detail/forecast.vue'
import DetailPubPage from '../pages/detail/publish.vue'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/orderList',
      component: OrderListPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          component: DetailAnaPage
        },
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        }
      ]
    }
  ]
})
