import usersApi from "@/api/usersApi.js";
import constants from '@/constants.js'

export default {
  namespaced: true,

  state: {
    list: [],
    loading: false,
    loaded: false,
    error: null
  },

  mutations: {
    SET_LOADING: (state, payload) => state.loading = payload,
    SET_LOADED: (state, payload) => state.loaded = payload,
    SET_ERROR: (state, payload) => state.error = payload,
    SET_LIST: (state, payload) => state.list = payload
  },

  actions: {
    async readUsers({ commit }) {
      commit('SET_LOADING', true)
      try {
        const result = await usersApi.read()
        commit('SET_LIST', result)
        commit('SET_LOADED', true)
      } catch (e) {
        commit('SET_ERROR', e)
      } finally {
        commit('SET_LOADING', false)
      }
    },

    findUser({ dispatch, state }, user) {
      const profile = state.list.find((item) => {
        const { ONLY_NUMBERS_REGEX } = constants
        const userPhoneNumber = item.phone.split(' ')[0].replace(ONLY_NUMBERS_REGEX, '')
        const inputPhoneNumber = user.phoneNumber.replace(ONLY_NUMBERS_REGEX, '')

        const usernameIsValid = item.username === user.username
        const phoneNumberIsValid = userPhoneNumber === inputPhoneNumber

        return usernameIsValid && phoneNumberIsValid
      })

      return profile
        ? { status: 200, profile }
        : { status: 404, message: 'User Not Found' }
    }
  }
}
