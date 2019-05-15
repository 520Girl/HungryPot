<template>
  <div>
    <p>{{message}}</p>
    <p>params2 url传递重定向 重定向到params1</p>
    <p>url接收newId：{{$route.params.newId}}</p>
    <p>url接收newId：{{$route.params.newTitle}}</p>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "pagesOne",
  data() {
    return {
      message: "params2 url传递"
    };
  }
};
</script>
<style>
</style>


