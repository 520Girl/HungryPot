<template>
  <div>
    <p>{{mes}}</p>
    <num-option>{{title}}</num-option>
    <ul>111</ul>
    <ul>
      <li>11</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {
      mes: "I am demo1 one 页面"
    };
  },
  props: {
    title: {
      type: String,
      default: "全局传值 从demo1传的"
    }
  }
};
</script>
<style>
</style>
