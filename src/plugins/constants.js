import constants from "@/constants.js";

export default {
  install: (app) => {
    app.config.globalProperties.$constants = constants
  }
}
