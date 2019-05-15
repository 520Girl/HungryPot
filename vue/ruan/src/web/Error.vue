<template>
  <div>
    <h2>{{msg}}</h2>
    <p>对不起页面不存在！</p>
  </div>
</template>
<script>
export default {
  name: "h2",
  data() {
    return {
      msg: "Error 404!"
    };
  }
};
</script>
<style>
</style>
