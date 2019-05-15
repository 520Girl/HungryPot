<template>
  <div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
ul {
  padding: 0;
  height: 5rem;
  width: 100%;
  border: 1px solid red;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  //justify-content: space-between;
  align-content: space-between;
  //align-items: center;

  li {
    list-style: none;
    width: 1rem;
    height: 1rem;
    margin-top: 0.2rem;
    background: orangered;
    border: 1px solid black;
    font-size: 0.14rem;
    text-align: center;
    line-height: 1rem;
    font-weight: 800;
  }
}
li:nth-child(5) {
  align-self: center;
}
</style>

