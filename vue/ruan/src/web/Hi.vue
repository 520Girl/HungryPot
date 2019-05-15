<template>
  <div>
    <h2>{{msg}}</h2>
    <router-view></router-view>
    <!-- 这里是显示页面内容 -->
  </div>
</template>
<script>
export default {
  name: "hi",
  data() {
    return {
      msg: ",I am Hi page!"
    };
  }
};
</script>
<style>
</style>
