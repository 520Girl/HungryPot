<template>
  <!--必须写一个大的标签包裹 v2.0规定 -->
  <div id="app">
    <div>
      <router-link to="/home">home1</router-link>|
      <router-link to="/goHome">goHome</router-link>|
      <router-link to="/goParams/1/I like">goParams</router-link>|
      <router-link to="/">首页</router-link>|
      <router-link to="/hi">hi页面</router-link>|
      <router-link :to="{name:'Hi1',params:{username:'jsPang',id:'888'}}">h1页面</router-link>|
      <router-link to="/hi/hi2">h2页面</router-link>|
      <router-link to="/params/1/ruan is very good">params通过url传参数</router-link>|
      <router-link to="/text1">text1</router-link>|
      <router-link to="/456">404</router-link>|
      <br>
      <br>
      <br>
      <br>
      <br>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <router-link class="demo" to="/demo">demo</router-link>
      <router-link class="demo1" to="/demo1">demo1</router-link>
      <router-link class="demo2" to="/demo2">demo2</router-link>
    </div>
    <p>{{$route.name}}</p>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view name="left" style="float:left;width:50%;height:300px;background-color:red;"></router-view>
    <router-view name="right" style="float:left;width:50%;height:300px;background-color:yellow;"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "全局的"
    };
  }
};
</script>
/* 使用style scoped 就是对当前页面起作用 */
<style>
* {
  margin: 0;
  padding: 0;
  font-size: 24px;
}
ul,
ol,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 1s;
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
</style>
