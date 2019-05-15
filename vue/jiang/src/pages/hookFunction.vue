<template>
  <div>
    <p v-html="message">{{message}}</p>
    <p>hook function</p>
  </div>
</template>
<script>
export default {
  name: "pagesOne",
  data() {
    return {
      message: "<h1>恭喜你进入了带有钩子函数的页面对你将进行折磨页面</h1>"
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("我准备进入模块了");
    console.log(to);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("我准备离开模块了");
    next();
  }
};
</script>
<style>
</style>
