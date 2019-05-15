<template>
  <div>
    <ul>
      <li style="order:1">one</li>
      <li style="order:3">two中文网你</li>
      <li style="order:2">中文</li>
      <li style="order:4">frou</li>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
ul {
  display: flex;
  //flex-direction: column-reverse;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-content: flex-end;

  padding: 0;
  li {
    height: 2rem;
    width: 2rem;
    font-size: 0.28rem;
    border: 1px solid red;
    list-style: none;
    background-color: #42e610;
  }
}
ul li:nth-child(3) {
  flex-shrink: 5;
  height: 1.2rem;
  order: 2;
}
ul li:nth-child(1) {
  flex-shrink: 5;
  height: 1.4rem;
  align-self: flex-end;
  order: 3;
}
ul li:nth-child(2) {
  flex-shrink: 5;
  height: 1.1rem;

  order: 4;
}
</style>
