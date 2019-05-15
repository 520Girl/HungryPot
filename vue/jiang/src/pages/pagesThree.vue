<template>
  <div>
    <p>{{message}}</p>
    <p>pagesThree 老大boss/p></p>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "pagesOne",
  data() {
    return {
      message: "pages Three 小弟模块的老大"
    };
  }
};
</script>
<style>
</style>


