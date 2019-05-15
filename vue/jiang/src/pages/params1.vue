<template>
  <div>
    <p>{{message}}</p>
    <p>params1 url传递</p>
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
      message: "params1 url传递"
    };
  }
};
</script>
<style>
</style>


