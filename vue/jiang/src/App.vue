<template>
  <div id="app">
    <button class="button" v-on:click="goback">back</button>
    <button class="button" @click="goBefor">advance</button>
    <button class="button" @click="goHome">go Home</button>
    <br style="padding:20px">
    <router-link class="demo" to="/">home</router-link>
    <router-link class="demo" to="/home">alias home</router-link>
    <!-- 这里是在做导航，通常可做面包屑导航 -->
    <router-link class="demo1" to="/pagesOne">pagesOne</router-link>
    <router-link class="demo2" to="/pagesTwo">pagesTwo</router-link>
    <!-- 这里是在试着写子路由 -->
    <router-link class="demo" to="/pagesThree">pagesThree</router-link>
    <router-link class="demo1" to="/pagesThree/pagesThree1">pagesThree1</router-link>
    <router-link class="demo2" to="/pagesThree/pagesThree2">pagesThree2</router-link>
    <!-- 这里是传参 -->
    <router-link class="demo" :to="{name:'Params',params:{username:'软降',sex:'boy'}}">params 标签传</router-link>
    <router-link class="demo1" to="/params1/20/I am url ">params1 url传</router-link>
    <!-- 重定向到params1 -->
    <router-link class="demo1" to="/params2/25/I am url ">params2 重定向到params1</router-link>
    <router-link class="demo" to="/hookfunction">hookfunction</router-link>
    <br>
    <br>
    <hr>
    <hr>
    <h1 style="text-align:left;">页面内容:</h1>
    <!-- 这里是页面的分页，分别显示的是两个模块页 -->
    <transition name="fade" mode="out-in">
      <!-- 这里是设置动画 需要注意只能写到一个router-view标签 -->
      <router-view></router-view>
    </transition>
    <router-view
      name="left"
      style="float:left;width:50%;height:300px;background-color:red;"
    >me is left</router-view>
    <router-view
      name="right"
      style="float:right;width:50%;height:300px;background-color:yellow;"
    >me from right</router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goback() {
      this.$router.go(-1);
      console.log("我要返回上一页了再见了");
    },
    goBefor() {
      this.$router.go(1);
      console.log("对不起，我还是的进步");
    },
    goHome() {
      this.$router.push("/");
      console.log("还是家里安逸");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.demo {
  background: linear-gradient(rgba(225, 12, 4, 0.5), rgba(29, 211, 23, 0.5));
}
.demo1 {
  background: linear-gradient(rgba(220, 120, 4, 0.5), rgba(29, 211, 23, 0.5));
}
.demo2 {
  background: linear-gradient(
    right rgba(7, 210, 236, 0.1),
    rgba(44, 44, 44, 0.1)
  );
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
