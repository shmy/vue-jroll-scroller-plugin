'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Jroll = _interopDefault(require('jroll'));

var toKebabCase = function (src) { return src.replace(/([A-Z]){1}|([0-9]){1}/g, function ($0) { return "-" + $0.toLowerCase(); }); };
  var events = ["scrollStart", "scroll", "scrollEnd", "touchEnd", "zoomStart", "zoom", "zoomEnd", "refresh"];
  var jrollScroller = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container"},[_c('div',[_vm._t("default")],2)])},
staticRenderFns: [],
    name: "jroll-scroller",
    props: {
      // 配置参数 参考: http://www.chjtx.com/JRoll/#options
      config: {
        type: Object,
        default: function default$1() {
          return {
            scrollBarY: true,
            scrollBarFade: true
          }
        }
      }
    },
    data: function data() {
      return {
        jroll: null
      }
    },
    mounted: function mounted() {
      this.jroll = new this.$jroll(this.$refs.container, this.config);
      var self = this;
      // 绑定事件
      events.forEach(function (e) {
        return self.jroll.on(e, function () {
          return self.$emit(toKebabCase(e), this);
        })
      });
    },
    beforeDestroy: function beforeDestroy() {
      this.jroll.destroy();
    },
    methods: {
      // 当scroller或wrapper的高度发生变化时，需要用此方法对JRoll对象进行刷新
      refresh: function refresh () {
        var this$1 = this;

        this.$nextTick(function () { return this$1.jroll.refresh(); });
      },
      // 该方法用于移动scroller，共五个参数，第一个参数是x偏移量（必填），第二个是y偏移量（必填），第三个是滑动时间（可选，单位ms)，第四个是是否允许超出边界（可选，true/false），第五个回调方法（可选）。如果想获取当前x,y偏移量，可直接输出jroll.x和jroll.y
      scrollTo: function scrollTo () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        this.jroll.scrollTo.apply(this.jroll, args);
      },
      // 使能滑动，使用disable禁止滑动后可用该方法重新开启
      enable: function enable () {
        this.jroll.enable();
      },
      // 使不能滑动
      disable: function disable () {
        this.jroll.disable();
      },
      // 缩放，只接受一个整型/浮点型参数
      scale: function scale (level) {
        this.jroll.scale(level);
      }
    }
  };

var index = {
  install: function install (Vue) {
    Vue.component(jrollScroller.name, jrollScroller);
    Vue.jroll = Vue.prototype.$jroll = Jroll;
  }
};

module.exports = index;
