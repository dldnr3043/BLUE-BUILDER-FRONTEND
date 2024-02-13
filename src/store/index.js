import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {},
    },
    getters: {
        isLogin(state) {
            return state.token == null ? false : true
        },
        userInfo(state) {
            return state.userInfo
        },
    },
    mutations: {
        initToken(state) {
            state.token = null
        },
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo
        },
    },
    actions: {
        initToken: function({commit}) {
            commit('initToken')
        },
        setUserInfo: function({commit}, userInfo) {
            commit('setUserInfo', userInfo)
        },
    },
})