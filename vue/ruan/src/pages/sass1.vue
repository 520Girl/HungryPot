<template>
  <ul>
    <com-test :title="'111'"></com-test>
    <from-nei :title="'add'"></from-nei>
    <li>标签</li>
    <li>内容</li>
    <li>
      <a>
        <span>堵头{{message}}</span>
      </a>
    </li>
    <li>
      <a>
        <span>组件</span>
      </a>
    </li>
    <div class="demo">
      <a>这是sass的表情</a>
    </div>
    <div></div>
  </ul>
</template>

<script>
import comTest from "@/components/test";
import fromNei from "@/components/nei";
export default {
  data() {
    return {
      message: "这里是sass1"
    };
  },
  components: {
    comTest,
    fromNei
  },
  created() { },
  mounted() { }
};
</script>
<style lang="scss" >
/* css ------ star css */
</style>