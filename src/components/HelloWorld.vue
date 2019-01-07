<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(item,index) in arr" :class="ind == index ? 'active' : '' " @click="changeBgc(index)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { Indicator } from 'mint-ui';
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Mint-UI",
      arr: ["加载中","上来加载更多","下拉加载更多","点击上弹窗","banner图", "图片懒加载"],
      ind:''
    };
  },
  methods:{
    changeBgc:function(index){
      this.ind = index 
       // 点击加载中事件 loading
      if(index==0){
       Indicator.open({
       text: '拼命为您加载中...',
       spinnerType: 'fading-triangle'
       });
       setTimeout(function(){
         Indicator.close();
       },2000)
      }
      // 上拉加载更多
      if(index==1){
        this.$router.push({path: '/loadingMore'})
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
.active{
  background-color: pink
}
</style>
