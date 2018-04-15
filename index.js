import common from "./common.js"
import excel from "./excel.js"
export default {
  install : function (Vue, options) {
    Vue.prototype._util = common;
    Vue.prototype._excel = excel
  }
}
