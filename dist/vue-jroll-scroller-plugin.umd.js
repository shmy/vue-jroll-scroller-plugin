(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jroll')) :
	typeof define === 'function' && define.amd ? define(['jroll'], factory) :
	(global.vueJrollScrollerPlugin = factory(global.JRoll));
}(this, (function (JRoll) { 'use strict';

JRoll = 'default' in JRoll ? JRoll['default'] : JRoll;

var svgSprite = "\n<svg><symbol id=\"icon-error\" viewBox=\"0 0 1024 1024\"><path d=\"M511.999488 959.290145c-247.027386 0-447.290656-200.221314-447.290656-447.290656 0-247.014083 200.262246-447.289633 447.290656-447.289633s447.290656 200.275549 447.290656 447.289633C959.290145 759.06883 759.027898 959.290145 511.999488 959.290145zM511.999488 148.577045c-200.712502 0-363.423466 162.710965-363.423466 363.423466 0 200.713525 162.710965 363.423466 363.423466 363.423466 200.713525 0 363.423466-162.710965 363.423466-363.423466C875.422955 311.28801 712.713013 148.577045 511.999488 148.577045zM665.755492 707.689598c-11.575651 0-22.05841-4.695957-29.64828-12.284803l0 0-124.107723-124.107723-124.1067 124.107723 0 0c-7.58987 7.588846-18.073652 12.284803-29.649303 12.284803-23.164606 0-41.934107-18.755175-41.934107-41.934107 0-11.575651 4.695957-22.05841 12.285826-29.64828l0 0 124.107723-124.107723-124.107723-124.1067 0 0c-7.58987-7.58987-12.285826-18.072629-12.285826-29.649303 0-23.150279 18.769501-41.934107 41.934107-41.934107 11.575651 0 22.059434 4.695957 29.649303 12.285826l0 0 124.1067 124.107723L636.108235 328.596228l0 0c7.58987-7.58987 18.072629-12.285826 29.64828-12.285826 23.151303 0 41.934107 18.782804 41.934107 41.934107 0 11.576675-4.695957 22.059434-12.284803 29.649303l0 0-124.107723 124.1067 124.107723 124.107723 0 0c7.588846 7.58987 12.284803 18.072629 12.284803 29.64828C707.689598 688.934423 688.906794 707.689598 665.755492 707.689598z\" ></path></symbol><symbol id=\"icon-shuaxin\" viewBox=\"0 0 1024 1024\"><path d=\"M512 170.666667C385.749333 170.666667 275.754667 239.402667 216.704 341.333333L121.088 341.333333C186.922667 190.677333 337.066667 85.333333 512 85.333333s325.034667 105.344 390.912 256l-95.616 0C748.245333 239.402667 638.250667 170.666667 512 170.666667zM170.624 511.829333l-128-170.197333 256 0L170.624 511.829333zM853.376 512.128l128 170.197333-256 0L853.376 512.128zM512 853.333333c126.250667 0 236.245333-68.736 295.296-170.666667l95.616 0C837.034667 833.237333 686.933333 938.666667 512 938.666667s-325.077333-105.429333-390.912-256l95.616 0C275.754667 784.597333 385.749333 853.333333 512 853.333333z\" ></path></symbol><symbol id=\"icon-wancheng\" viewBox=\"0 0 1024 1024\"><path d=\"M512.750083 960.175369c-247.24715 0-447.712835-200.463638-447.712835-447.712835 0-247.24715 200.466708-447.712835 447.712835-447.712835s447.712835 200.466708 447.712835 447.712835C960.462918 759.711731 759.996211 960.175369 512.750083 960.175369zM512.750083 148.69867c-200.575178 0-363.766934 163.188686-363.766934 363.763864S312.173882 876.229468 512.750083 876.229468 876.517017 713.037712 876.517017 512.462534 713.325261 148.69867 512.750083 148.69867zM500.45199 668.057265c-8.195659 8.198729-18.935258 12.298094-29.674856 12.298094s-21.479197-4.099365-29.674856-12.298094L301.19176 528.146749c-8.635681-8.632611-12.435217-20.054755-11.970636-31.342846 0.411369-10.165524 4.208858-20.24509 11.970636-28.004821 7.759731-7.764847 17.841344-11.562337 28.006867-11.973706 11.288091-0.461511 22.710234 3.334955 31.342846 11.973706l110.23566 110.22952L664.958694 384.850112c8.632611-8.635681 20.057825-12.435217 31.342846-11.970636 10.165524 0.414439 20.24816 4.208858 28.006867 11.970636 7.761778 7.759731 11.559267 17.844413 11.970636 28.006867 0.464581 11.288091-3.334955 22.710234-11.970636 31.345915L500.45199 668.057265z\" ></path></symbol><symbol id=\"icon-rise\" viewBox=\"0 0 1024 1024\"><path d=\"M473.968 78.443v733.558l-180.328-187.319c-4.796-4.795-12.57-4.795-17.367 0l-37.627 37.627c-4.795 4.796-4.795 12.57 0 17.367l227.011 235.807c0.229 0.272 0.465 0.541 0.721 0.797l1.259 1.259 35.009 36.367c2.568 2.567 5.99 3.746 9.352 3.564 3.369 0.188 6.8-0.991 9.372-3.562l36.267-37.627c0.241-0.243 0.463-0.496 0.68-0.752l227.050-235.852c4.797-4.796 4.797-12.57 0-17.367l-37.627-37.627c-4.795-4.795-12.569-4.795-17.367 0l-178.637 185.562v-731.8c0-6.783-5.498-12.28-12.28-12.28h-53.213c-6.781 0-12.28 5.497-12.28 12.28z\" ></path></symbol></svg>\n";

/**
 * document ready
 */
var ready = function (fn) {
  var loadFn = function () {
    document.removeEventListener("DOMContentLoaded", loadFn, false);
    fn();
  };
  document.addEventListener("DOMContentLoaded", loadFn, false);
};

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var append = function (el, target) {
  target.appendChild(el);
};

function appendSvg () {
  var div, svg;

  div = document.createElement("div");
  div.innerHTML = svgSprite;
  svgSprite = null;
  svg = div.getElementsByTagName("svg")[0];
  if (svg) {
    svg.setAttribute("aria-hidden", "true");
    svg.style.position = "absolute";
    svg.style.width = 0;
    svg.style.height = 0;
    svg.style.overflow = "hidden";
    append(svg, document.body);
    var style = document.createElement("style");
    style.textContent = ".svgfont{display:inline-block;width:1em;height:1em;fill:currentColor;vertical-align:-0.1em;font-size:16px;}";
    append(style, document.head);
  }
}

ready(appendSvg);

var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (callback) {
  setTimeout(callback, 17);
};
var TSF = JRoll.utils.TSF;
var moveTo = JRoll.utils.moveTo;

JRoll.prototype.pulldown = function (params) {
  var me = this;
  var keys = Object.keys(params || {});

  var boxDiv;
  var iconSpan;
  var textSpan;
  var loading;
  var rotating;
  var angle = 0;
  var getSvg = function (name) { return ("<svg class=\"icon\" aria-hidden=\"true\"><use xlink:href=\"#icon-" + name + "\"></use></svg>"); };
  // 默认选项
  var options = {
    iconArrow: getSvg("rise"),
    iconLoading: getSvg("shuaxin"),
    iconFinish: getSvg("wancheng"),
    iconError: getSvg("error"),
    textPull: "下拉刷新",
    textRelease: "释放刷新",
    textLoading: "正在加载",
    textFinish: "刷新成功",
    textError: "刷新失败",
    spinning: true, // 应网友要求添加一个选项控制loading时是否旋转icon
    refresh: null // 刷新自定义执行的函数
  };

  for (var k in keys) {
    options[keys[k]] = params[keys[k]];
  }

  // 创建下拉的div
  boxDiv = document.createElement("div");
  boxDiv.className = "jroll-plugin-pulldown";

  iconSpan = document.createElement("span");
  iconSpan.className = "jroll-plugin-pulldown-icon";
  iconSpan.innerHTML = options.iconArrow;
  boxDiv.appendChild(iconSpan);

  textSpan = document.createElement("span");
  textSpan.className = "jroll-plugin-pulldown-text";
  textSpan.innerHTML = options.textPull;
  boxDiv.appendChild(textSpan);

  me.wrapper.appendChild(boxDiv);
  function onScroll () {
    boxDiv.style[TSF] = me.scroller.style[TSF];

    // 达到一定位置显示释放刷新
    if (!loading) {
      if (me.y > 44) {
        iconSpan.style[TSF] = "rotateZ(180deg)";
        textSpan.innerHTML = options.textRelease;
      } else {
        iconSpan.style[TSF] = "rotateZ(0deg)";
        textSpan.innerHTML = options.textPull;
      }
    }
  }
  // 监听滑动事件
  me.on("scroll", function () {
    if (me.y >= 0 && me.s === "scrollY") {
      onScroll();
    }
  });
  me.on("touchEnd", function () {
    if (me.y >= 44) {
      // 超过44px禁止回弹
      me.y = 0;
      me.options.momentum = false;

      // 刷新
      iconSpan.style[TSF] = "rotateZ(0deg)";
      iconSpan.innerHTML = options.iconLoading;
      textSpan.innerHTML = options.textLoading;
      setTimeout(function () {
        me.scrollTo(0, 44, 200, true, doRefresh).minScrollY = 44;
        moveTo(boxDiv, 0, 44, 200);

        me.options.momentum = true;
      }, 10);
    } else if (!loading) {
      moveTo(boxDiv, 0, 0, 200);
    }
  });

  // 执行刷新
  function doRefresh () {
    if (!loading) {
      loading = true;
      rotating = true;
      angle = 0;
      if (options.spinning) {
        makeRotate();
      }
      setTimeout(function () {
        if (typeof options.refresh === "function") {
          options.refresh({
            failed: function () {
              // 停止旋转
              rotating = false;
              iconSpan.innerHTML = options.iconError;
              textSpan.innerHTML = options.textError;
              setTimeout(function () {
                reset();
              }, 1500);
            },
            completed: function () {
              iconSpan.innerHTML = options.iconFinish;
              textSpan.innerHTML = options.textFinish;
              reset();
            }
          });
        } else {
          console.warn("没有设置触发函数。");
          reset();
        }
      }, 200);
    }
  }
  function reset () {
    // 停止旋转
    rotating = false;
    // 收起刷新栏
    setTimeout(function () {
      moveTo(boxDiv, 0, 0, 200);
      me.scrollTo(0, 0, 200, true, function () {
        loading = false;
        iconSpan.innerHTML = options.iconArrow;
        textSpan.innerHTML = options.textPull;
      }).minScrollY = 0;
    }, 500);
  }
  // 使iconSpan旋转下来
  function makeRotate () {
    angle = angle + 6 >= 360 ? 0 : angle + 6;
    iconSpan.style[TSF] = "rotateZ(-" + angle + "deg)";

    if (rotating) {
      rAF(makeRotate);
    } else {
      iconSpan.style[TSF] = "rotateZ(0deg)";
    }
  }
  // 主动触发
  me.trigger = function () {
    me.y = 0;
    me.options.momentum = false;

    // 刷新
    iconSpan.style[TSF] = "rotateZ(0deg)";
    iconSpan.innerHTML = options.iconLoading;
    textSpan.innerHTML = options.textLoading;
    setTimeout(function () {
      me.scrollTo(0, 44, 200, true, doRefresh).minScrollY = 44;
      moveTo(boxDiv, 0, 44, 200);

      me.options.momentum = true;
    }, 10);
  };
  return me;
};

// const toKebabCase = src => src.replace(/([A-Z]){1}|([0-9]){1}/g, $0 => "-" + $0.toLowerCase());
  // const events = ["scrollStart", "scroll", "scrollEnd", "touchEnd", "zoomStart", "zoom", "zoomEnd", "refresh"];
  var defaultOpts = {
    scrollBarY: true,
    scrollBarFade: true
  };
  var jrollScroller = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container"},[_c('div',{ref:"wrapper"},[_vm._t("default"),_vm._v(" "),(_vm.loadmore)?_c('div',{ref:"tip",staticClass:"jroll-infinite-tip"},[_vm._v("\n      "+_vm._s(_vm.tip)+"\n    ")]):_vm._e()],2)])},
staticRenderFns: [],
    name: "jroll-scroller",
    props: {
      // 配置参数 参考: http://www.chjtx.com/JRoll/#options
      config: {
        type: Object,
        default: function default$1 () {
          return {};
        }
      },
      pulldown: {
        type: Function
      },
      loadmore: {
        type: Function
      }
    },
    data: function data () {
      return {
        jroll: null,
        text: {
          loading: "正在加载中",
          failed: "加载失败 上拉重试",
          completed: "全部加载完成"
        },
        tip: "",
        loading: false
      };
    },
    mounted: function mounted () {
      var this$1 = this;

      var self = this;
      this.jroll = new JRoll(this.$refs.container, Object.assign({}, defaultOpts, this.config));
      // 下拉刷新
      this.pulldown && this.jroll.pulldown({
        refresh: function (args) {
          // this.$emit("pulldown", args);
          this$1.pulldown(args);
        }
      });
      // 上拉加载更多
      this.loadmore && this.jroll.on("scrollEnd", function () {
        if (
            this.s === "scrollY" &&
            this.y !== 0 &&
            this.maxScrollY !== 0 &&
            this.y === this.maxScrollY &&
            this.y <= this.maxScrollY + self.$refs.tip.offsetHeight * 2 &&
            !self.loading
          ) {
          self.triggerLoadMore();
        }
      });
      // 绑定事件
      // events.forEach(function (e) {
      //   return self.jroll.on(e, function () {
      //     return self.$emit(toKebabCase(e), this);
      //   });
      // });
    },
    beforeDestroy: function beforeDestroy () {
      this.jroll.destroy();
    },
    updated: function updated () {
      this.refresh();
    },
    methods: {
      triggerPullDown: function triggerPullDown () {
        this.jroll.trigger();
      },
      triggerLoadMore: function triggerLoadMore () {
        var this$1 = this;

        this.tip = this.text.loading;
        this.loading = true;
        this.loadmore({
          failed: function () {
            this$1.tip = this$1.text.failed;
            this$1.loading = false;
          },
          completed: function (flag) {
            flag && (this$1.tip = this$1.text.completed);
            this$1.loading = false;
          }
        });
        // this.$emit("loadmore", {
        //   failed: () => {
        //     this.tip = this.text.failed;
        //     this.loading = false;
        //   },
        //   completed: flag => {
        //     flag && (this.tip = this.text.completed);
        //     this.loading = false;
        //   }
        // });
      },
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

var style = document.createElement("style");
style.type = "text/css";
style.textContent = ".jroll-plugin-pulldown{position:absolute;top:-44px;left:0;width:100%;height:44px;line-height:44px;font-size:16px;text-align:center}.jroll-plugin-pulldown-icon{display:inline-block;width:24px;height:24px;position:absolute;top:10px;left:0;left:25%}.jroll-plugin-pulldown-icon img,.jroll-plugin-pulldown-icon svg{display:block;height:24px;width:24px}.jroll-plugin-pulldown-text{color:#000}.jroll-infinite-tip{height:44px;line-height:44px;text-align:center}";
ready(function () { return append(style, document.head); });
var index = {
  install: function install (Vue) {
    Vue.component(jrollScroller.name, jrollScroller);
  }
};

return index;

})));
