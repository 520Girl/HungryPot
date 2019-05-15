<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style >
/* ==============reset css start ============== */
h1,
h2,
h3,
h4,
h5,
h6,
tr,
td,
table,
body,
form,
dl,
dt,
dd,
input,
button {
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-family: "Courier New", Courier, monospace;
  color: #333333;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  /* 点击高亮效果清除 */
  tap-highlight-color: transparent;
  -webkit-tap-highlight-color: transparent;
  -moz-tap-highlight-color: transparent;
  -ms-tap-highlight-color: transparent;
  -o-tap-highlight-color: transparent;
}
a {
  text-decoration: none;
  color: #333333;
}
input,
textarea {
  border: none;
  outline: none;
  /* 不允许改变任何尺寸 */
  resize: none;
  /* 元素的外观 没有任何样式 */
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  -ms-appearance: none;
  appearance: none;
}
ul,
li,
ol {
  list-style: none;
  color: #333333;
}
/* ========= reset css end============= */
/* ========= common css start=========== */
.clearFix::before,
.clearFix::after {
  content: "";
  height: 0;
  display: block;
  visibility: hidden;
  line-height: 0;
  clear: both;
}
</style>
