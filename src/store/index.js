import Vue from 'vue'
import Vuex from 'vuex'
import vSelect from 'vue-select'

Vue.use(Vuex)
Vue.component('v-select', vSelect)

export default new Vuex.Store({
  state: {
    currentUser: null,
    tasks: []
  },
  mutations: {
    change_tasks(state, tasks) {
      state.tasks = tasks;
    },
    login(state, user) {
      localStorage.setItem('current_user_id', user.id);
      state.currentUser = user;
    },
    logout(state) {
      localStorage.removeItem('current_user_id');
      state.currentUser = null;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    tasks: state => state.tasks,
    current_user: state => state.currentUser,
    user_tasks: state => {
      return state.currentUser ? state.tasks.filter(el => el.author_id === state.currentUser.id) : [];
    },
    in_progress_tasks: state => {
      return state.currentUser ? state.tasks.filter(el => el.responsible_id === state.currentUser.id && el.status === "В работе") : [];
    }
  }
})
