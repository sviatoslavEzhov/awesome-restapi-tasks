import { createStore } from "vuex";
import users from "@/store/users.js";
import profile from "@/store/profile.js";
import todos from '@/store/todos.js';

const store = createStore({
  modules: {
    users,
    profile,
    todos
  }
})

export default store
