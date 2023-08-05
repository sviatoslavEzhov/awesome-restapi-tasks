import { createStore } from "vuex";
import users from "@/store/users.js";

const store = createStore({
  modules: {
    users
  }
})

export default store
