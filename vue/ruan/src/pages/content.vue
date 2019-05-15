<template>
  <div>
    <div id="demo">新闻内容{{articleId}}</div>
    <router-link to="/sass">Hi页面</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleId: this.$route.params.articleId
    };
  },
  //组件创建完毕
  created() {
    console.log(this);
  },
  //dom加载 完毕
  mounted() {
    console.log(2222);
  }
};
</script>

<style scoped>
</style>