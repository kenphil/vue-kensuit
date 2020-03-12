/*
* Author: fengkun
* Create Time: 2020-03-2020/3/13 00:40:51
* */
import router from '../router/router'

const UPDATE_USER = 'UPDATE_USER'
const LOGOUT = 'LOGOUT'

export default {
  [UPDATE_USER](state, newUser) {
    state.user = Object.assign(state.user, newUser)
  },
  [LOGOUT](state) {
    state.user = {}
    router.replace('/login')
  }
}
