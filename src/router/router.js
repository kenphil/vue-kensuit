/*
* Author: fengkun
* Create Time: 2020-03-2020/3/13 00:10:18
* */
import Vue from 'vue'
import VueRouter from 'vue-router'
import _ from 'lodash'
import {Loading} from 'element-ui'
import routes from './router.config'
import store from '../store/store'

Vue.use(VueRouter)

const router = new VueRouter({routes})

const PATH_LOGIN = '/login'

router.beforeEach((to, from, next) => {
  let loadingInstance = null

  if (to.name === 'home') {
    loadingInstance = Loading.service({fullscreen: true})
  }

  if (to.meta.requireAuth) {
    const keys = _.keys(store.state.user)
    if (keys.length === 0) next({path: PATH_LOGIN})
    else next()
  } else {
    next()
  }

  if (loadingInstance) loadingInstance.close()
})

export default router
