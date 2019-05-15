<template>
  <div>{{ title }}</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "123"
    }
  }
};
</script>
<style>
</style>
