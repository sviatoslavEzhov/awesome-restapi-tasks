import usersApi from "@/api/usersApi.js";

export default {
  namespaced: true,

  state: {
    list: [],
    loading: false,
    loaded: false
  },



  actions: {
    async readUsers() {
      const result = await usersApi.read()
    }
  }
}
