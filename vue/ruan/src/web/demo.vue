<template>
  <div>
    <p>{{mes}}</p>
    <num-option :title="'12456'"></num-option>
  </div>
</template>
<script>
import numOption from "@/web/demo1"
export default {
  name: "demo",
  data() {
    return {
      mes: "I am demo页面"
    };
  },
  conponents: {
    numOption
  }
};
</script>
<style>
</style>
