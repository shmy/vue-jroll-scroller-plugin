<template>
  <div ref="container">
    <div>
      <slot></slot>
      <div v-if="config.loadmore" class="jroll-infinite-tip" ref="tip" style="height: 44px; line-height: 44px; text-align: center;">
        {{ tip }}
      </div>
    </div>
  </div>
</template>

<script>
  import JRoll from "./jroll-pulldown";
  // const toKebabCase = src => src.replace(/([A-Z]){1}|([0-9]){1}/g, $0 => "-" + $0.toLowerCase());
  // const events = ["scrollStart", "scroll", "scrollEnd", "touchEnd", "zoomStart", "zoom", "zoomEnd", "refresh"];
  const defaultOpts = {
    scrollBarY: true,
    scrollBarFade: true
  };
  export default {
    name: "jroll-scroller",
    props: {
      // 配置参数 参考: http://www.chjtx.com/JRoll/#options
      config: {
        type: Object,
        default () {
          return {};
        }
      },
      pulldown: {
        type: Function
      }
    },
    data () {
      return {
        jroll: null,
        loadmoreOpts: {
          loading: "正在加载中",
          failed: "加载失败 上拉重试",
          completed: "全部加载完成"
        },
        tip: "",
        loading: false
      };
    },
    mounted () {
      const self = this;
      const opts = Object.assign({}, defaultOpts, this.config);
      this.jroll = new JRoll(this.$refs.container, opts);
      // 下拉刷新
      opts.pulldown && this.jroll.pulldown({
        refresh: args => {
          this.$emit("pulldown", args);
        }
      });
      // 上拉加载更多
      opts.loadmore && this.jroll.on("scrollEnd", function () {
        if (Math.abs(this.maxScrollY) >= self.$refs.container.clientHeight && this.y <= this.maxScrollY + self.$refs.tip.offsetHeight * 2 && !self.loading) {
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
    beforeDestroy () {
      this.jroll.destroy();
    },
    beforeUpdate () {
      this.refresh();
    },
    methods: {
      triggerPullDown () {
        this.jroll.trigger();
      },
      triggerLoadMore () {
        this.tip = this.loadmoreOpts.loading;
        this.loading = true;
        this.$emit("loadmore", {
          failed: () => {
            this.tip = this.loadmoreOpts.failed;
            this.loading = false;
          },
          completed: flag => {
            flag && (this.tip = this.loadmoreOpts.completed);
            this.loading = false;
          }
        });
      },
      // 当scroller或wrapper的高度发生变化时，需要用此方法对JRoll对象进行刷新
      refresh () {
        this.$nextTick(() => this.jroll.refresh());
      },
      // 该方法用于移动scroller，共五个参数，第一个参数是x偏移量（必填），第二个是y偏移量（必填），第三个是滑动时间（可选，单位ms)，第四个是是否允许超出边界（可选，true/false），第五个回调方法（可选）。如果想获取当前x,y偏移量，可直接输出jroll.x和jroll.y
      scrollTo (...args) {
        this.jroll.scrollTo.apply(this.jroll, args);
      },
      // 使能滑动，使用disable禁止滑动后可用该方法重新开启
      enable () {
        this.jroll.enable();
      },
      // 使不能滑动
      disable () {
        this.jroll.disable();
      },
      // 缩放，只接受一个整型/浮点型参数
      scale (level) {
        this.jroll.scale(level);
      }
    }
  };

</script>
<style>
  .body
    display: flex

</style>
