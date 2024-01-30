import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        userInfo: {},
    },
    getters: {
        getToken(state) {
            return state.token
        },
        isLogin(state) {
            return state.token == null ? false : true
        },
        getUserInfo(state) {
            return state.userInfo
        },
    },
    mutations: {
        initToken(state) {
            state.token = null
        },
        setToken(state, newToken) {
            state.token = newToken
        },
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo
        },
    },
    actions: {
        initToken: function({commit}) {
            commit('initToken')
        },
        setToken: function({commit}, newToken) {
            commit('setToken', newToken)
        },
        setUserInfo: function({commit}, userInfo) {
            commit('setUserInfo', userInfo)
        },
    },
})