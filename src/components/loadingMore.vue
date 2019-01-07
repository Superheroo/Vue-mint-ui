<template>
  <div class="loadingMore">
    <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
    <!-- 
        infinite-scroll-distance : 指定滚动条距离底部多高时触发v-infinite-scroll指向的方法 
        infinite-scroll-disabled : 等于true时代表正在执行加载，这时禁用滚动触发。
    -->
      <li v-for="item in list">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";
import { Indicator } from "mint-ui";
// import { infiniteScroll } from "vue-infinite-scroll";
// Vue.use(InfiniteScroll);
export default {
  name: "loadingMore",
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      loading: false
    };
  },
  methods: {
    loadMore() {
      this.loading = true;
      //   加载中
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading"
      });
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        console.log('list长度'+this.list.length)
        console.log(last);
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
        // 关闭加载
        Indicator.close();
      }, 1500);
    }
  }
};
</script>

<style>
ul li {
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-top: 1px dashed gray;
}
</style>
