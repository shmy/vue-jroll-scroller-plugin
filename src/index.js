import Jroll from "jroll";
import jrollScroller from "./jroll-scroller.vue";

export default {
  install (Vue) {
    Vue.component(jrollScroller.name, jrollScroller);
    Vue.jroll = Vue.prototype.$jroll = Jroll;
  }
};
