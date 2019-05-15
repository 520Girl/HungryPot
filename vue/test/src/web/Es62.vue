<template>
  <div>
    <button type="button" @click="demo()">数组命名法</button>
    <button type="radio" @click='objectFu("我","好像")'>对象扩展符</button>
  </div>

</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    demo: function () {
      let [a, b, c, d] = "Doyou need me?"
      console.log('数组命名方法:' + a + b + c + d);
      let { e, f } = { e: "对象", f: "命名" };
      console.log('对象命名方法:' + 'e:' + e + 'f:' + f);

    },
    objectFu: function (...arr) {
      console.log(`${arr[0]}+是+${arr[1]}+${arr[2]}`)
      let num = Array.of("one", "two", "three")
      console.log(`Array.of方法的使用${num[1]}`);
      let jsons = { "name": "玉梅", "sex": "boy" };
      console.log(`json数据的输出${jsons.name}`);
    }
  },
  computed: {

  },
  watch: {

  },
  beforeCreate() { },//初始化完成
  created() { },//创建完成
  beforemount() { },//挂载之前
  mounted() { }, //挂载完成,dome元素加载完成
  beforeUpdate() { },//数据更新之前
  updated() { },//数据更新完成
  //....
  beforeDestroy() { }, //销毁之前
  destroyed() { },//销毁之后

}
</script>

<style>
</style>

