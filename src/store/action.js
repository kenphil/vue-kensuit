/*
* Author: fengkun
* Create Time: 2020-03-2020/3/13 00:39:28
* */
export default {
  updateUser({commit}, newUser) {
    commit('UPDATE_USER', newUser)
  },
  logout({commit}) {
    commit('LOGOUT')
  }
}
