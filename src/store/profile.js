export default {
  namespaced: true,

  state: {
    info: {}
  },

  mutations: {
    SET_INFO: (state, payload) => state.info = payload
  }
}
