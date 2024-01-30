import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
    },
    getters: {
        getToken(state) {
            return state.token
        },
        isLogin(state) {
            return state.token == null ? false : true
        }
    },
    mutations: {
        initToken(state) {
            state.token = null
        },
        setToken(state, newToken) {
            state.token = newToken
        }
    },
    actions: {
        setToken: function({commit}, newToken) {
            commit('setToken', newToken)
        }
    },
})