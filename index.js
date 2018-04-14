import common from "./common.js"

export default {
  ...common,
  install : function (Vue, options) {
    Vue.prototype._util = common
  }
}
