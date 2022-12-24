import { createStore } from 'vuex'

export default createStore({
  state: {
    use: 'hjghgfjhgj'
  },
  getters: {
  },
  mutations: {
    loginMut(state, token){
      state.use = token;
    }
  },
  actions: {
    login(token){
      
    }
  },
  modules: {
  }
})
