<template>
  <div>
    {{ title }}
    <p>从这里开始</p>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "测试"
    }
  },
  components: {},
  created() { },
  mounted() { },
  methods: {}
};
</script>
<style lang="scss">
</style>
