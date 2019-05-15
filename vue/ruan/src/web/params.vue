<template>
  <div>
    <h2>{{msg}}</h2>
    <router-view></router-view>
    <p>newsId:{{$route.params.newsId}}</p>
    <p>newsTitle:{{$route.params.newsTitle}}</p>
    <!-- 这里是显示页面内容 -->
  </div>
</template>
<script>
export default {
  name: "hi",
  data() {
    return {
      msg: "params pages"
    };
  },
  beforeRouteEnter: (to, from, next) => {
    console.log("我要进入params页面");
    //next(true);
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("我要离开params页面");
    next(true);
  }
};
</script>
<style>
</style>
