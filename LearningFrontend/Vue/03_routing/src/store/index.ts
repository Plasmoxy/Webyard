import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    notes: [
      { id: "1", text: "yes" },
      { id: "2", text: "no"  },
    ],
  },
  getters: {
    yesNotes: (s, getters) => s.notes.filter(n => n.text === "yes"),
  },
  mutations: {
    
    increment (state) {
      state.count++
    }
    
  },
  actions: {
    
    async increment({dispatch, commit, state}, payload) {
      commit('increment')
    },
    
    async incrementDelay({dispatch, commit, state}, payload) {
      await dispatch('increment')
      await new Promise(res => setTimeout(res, payload.delay))
      commit('increment')
    } 
  },
  modules: {
    
  },
});
