import Vue from 'vue'
import Router from 'vue-router'
import Info from '@/components/Info'
import sendHRSM from '@/components/sendHRSM'


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
  ]
})
