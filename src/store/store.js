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
  user: {},
  /* todos: [
    { id: 1, text: '...1', done: true },
    { id: 2, text: '...2', done: false },
    { id: 3, text: '...3', done: true },
    { id: 4, text: '...4', done: false },
    { id: 5, text: '...5', done: true },
  ] */
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  /* getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  }, */
  plugins: [persistedState()] // vuex持久化
})
