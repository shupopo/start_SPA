import Vue from 'vue'
import Router from 'vue-router'
import Info from '@/components/Info'
import sendHRSM from '@/components/sendHRSM'
import sended from '@/components/sended'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Info',
      component: Info
    },
    {
      path: '/sendHRSM',
      name: 'sendHRSM',
      component: sendHRSM
    },
    {
      path: '/sended',
      name: 'sended',
      component: sended
    },
  ]
})
