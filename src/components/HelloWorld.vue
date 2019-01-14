<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li
        v-for="(item,index) in arr"
        :class="ind == index ? 'active' : '' "
        @click="changeBgc(index)"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { Indicator } from "mint-ui";//下拉加载更多
import { MessageBox } from "mint-ui";//弹窗
import { Actionsheet } from 'mint-ui';//点击上拉弹窗

Vue.component(Actionsheet.name, Actionsheet);
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Mint-UI",
      arr: [
        "加载中",
        "下拉加载更多",
        "点击弹窗",
        "点击上弹窗",
        "banner图",
        "图片懒加载"
      ],
      ind: ""
    };
  },
  methods: {
    changeBgc: function(index) {
      this.ind = index;
      // 点击加载中事件 loading
      if (index == 0) {
        Indicator.open({
          text: "拼命为您加载中...",
          spinnerType: "fading-triangle"
        });
        setTimeout(function() {
          Indicator.close();
        }, 2000);
      }
      // 上拉加载更多
      else if (index == 1) {
        this.$router.push({ path: "/loadingMore" });
      } else if (index == 2) {
        MessageBox({
          title: "提示",
          message: "确定执行此操作?",
          showCancelButton: true
        });
      }else if (index == 5) {
        this.$router.push({ path: "/lazyLoad" });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
h1 {
  padding: 20px 0;
}
ul li {
  list-style: none;
  padding: 20px 0;
  width: 100%;
}
/* 单数li */
ul li:nth-child(2n + 1) {
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
}
.active {
  background-color: pink;
}
</style>
