import { ready, append } from "./iconfont";
import jrollScroller from "./jroll-scroller.vue";
const style = document.createElement("style");
style.type = "text/css";
style.textContent = "__CSS_CONTENT__";
ready(() => append(style, document.head));
export default {
  install (Vue) {
    Vue.component(jrollScroller.name, jrollScroller);
  }
};
