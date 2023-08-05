import { createStore } from "vuex";
import users from "@/store/users.js";
import profile from "@/store/profile.js";

const store = createStore({
  modules: {
    users,
    profile
  }
})

export default store
