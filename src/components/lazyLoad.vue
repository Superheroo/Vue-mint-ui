<template>
  <div class="lazyLoad">
    <img>
  </div>
</template>
<script>
import axios from "axios";
import Vue from "vue";
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
export default {
  name: "lazyLoad",
  created: function() {
    var that = this;
    axios
      .get(
        "https://www.9ikandian.com/jitvui/action/tv/selectNewRecommendByPoltId.action?poltId=81db97c32d9a4cbd97d6fc2cc9883be8&pageIndex=0",
        {
          params: {
            pageSum: 10,
            page: 3
          }
        }
      )
      .then(function(res) {
        //外层list
        console.log(res);
        // 内层list
        for (var i = 0; i < res.data.list.length; i++) {
          var imgCoverList = res.data.list[i].list;
          console.log(imgCoverList)
          for (var j = 0; j < imgCoverList.length; j++) {
              var aa=imgCoverList[j];
              that.imgCoverList.push(aa);
            // console.log(imgCover[j]);
          }
          console.log(imgCoverList)
        }
      });
  },
  data() {
    return {
      imgCoverList: []
      // imgList: [
      //   "http://img26.gz-lodihair.com/lyc.superheroo.com/images/0912haishen/1.jpg",
      //   "http://img26.gz-lodihair.com/lyc.superheroo.com/images/0912haishen/2.jpg",
      //   "http://img26.gz-lodihair.com/lyc.superheroo.com/images/0912haishen/3.jpg",
      //   "http://img26.gz-lodihair.com/lyc.superheroo.com/images/0912haishen/4.jpg"
      // ]
    };
  }
};
</script>
<style>
.lazyLoad img{
  height: 250px;
  width: 75%
}
/* 《恋恋笔记本》《甜心先生》《泰坦尼克号》《当哈利遇上莎莉》《落跑新娘》《电子情书》《卡萨兰布卡》《乱世佳人》 */
/* 一开头就甜。男女主周五晚上约会看电影。

看什么电影随你挑，有你相伴看什么都好

你爱的浪漫喜剧片，一起看18次都不会嫌

看你幸福的笑靥，是我见过最美的诗篇

你信电影里的浪漫情节，那我与你一一实现

只要你成为我的女主角 */
</style>
