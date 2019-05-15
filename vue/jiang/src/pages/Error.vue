<template>
  <div>
    <p v-html="message">{{message}}</p>
    <p>面包屑导航</p>
  </div>
</template>
<script>
export default {
  name: "pagesOne",
  data() {
    return {
      message: "<h1>恭喜你进入了404页面</h1>"
    };
  }
};
</script>
<style>
</style>


