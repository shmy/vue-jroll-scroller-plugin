import JRoll from "jroll";
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
  var getSvg = name => `<svg class="icon" aria-hidden="true"><use xlink:href="#icon-${name}"></use></svg>`;
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
  };
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
            failed: () => {
              // 停止旋转
              rotating = false;
              iconSpan.innerHTML = options.iconError;
              textSpan.innerHTML = options.textError;
              setTimeout(() => {
                reset();
              }, 1500);
            },
            completed: () => {
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

export default JRoll;
