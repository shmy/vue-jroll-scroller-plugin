import jrollScroller from "./jroll-scroller.vue";
const style = document.createElement("style");
style.type = "text/css";
style.textContent = "__CSS_CONTENT__";
document.head.appendChild(style);
export default {
  install (Vue) {
    Vue.component(jrollScroller.name, jrollScroller);
  }
};
