/*
* Author: fengkun
* Create Time: 2020-03-2020/3/13 00:36:26
* */
import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
import actions from './action'
import mutations from './mutation'

Vue.use(Vuex)

let state = {
  user: {}
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  plugins: [persistedState()] // vuex持久化
})
