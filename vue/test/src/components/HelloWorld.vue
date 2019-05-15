<template>
  <div>
    <h1 class="h1">我要使你继承a的样式</h1>
    <ul>
      <li>
        <a href="" title="">
          <span>家</span>的感觉
        </a>
      </li>
      <li>
        <a href="" title="">
          <span>祝</span>你幸福
        </a>
      </li>
      <li>
        <a href="" title="">
          <span>你</span>快乐嘛
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.h1 {
  color: red;
  // @extend a;
}
$none: none;
ul,
li,
ol {
  list-style: $none;
  font-size: 14px;
}

$nav-color: #cccc;
$highlight-color: rgb(233, 24, 24);
$highlight-border: 1px solid $highlight-color;
ul {
  display: inline-block;
  $width: 100px;
  li {
    border-left: {
      style: solid;
      width: 1px;
      color: yellow;
    }
    border-right: $highlight-border;
    border: 2px solid blue {
      bottom: 5px;
      top: 2px;
    }
    width: $width;
  }
}
</style>
