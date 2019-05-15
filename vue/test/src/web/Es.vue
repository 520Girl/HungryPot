<template>
  <div>
    <p><button @click="className()">symbol的输出</button></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    }
  },
  created: function () {

    let a = new String;
    let b = new Number;
    var f = Symbol();
    var z = Symbol("ruanjiang");
    console.log(f);
    console.log(typeof (b))
    console.log(`声明数字类型${b}`)
    console.log(z);
    console.log(z.toString());

    let obj = { name: 'jspang', skill: 'web' };
    let age = Symbol();
    obj[age] = 18;
    for (let item in obj) {
      console.log(obj[item]);
    }
    console.log(obj);

    let name = "jsruan";
    let skill = "computer game";
    let objs = { name, skill }
    console.log(objs);
    var objss = {
      [name]: "web"
    }
    console.log(objss.jsruan);

  }

}
</script>

<style>
</style>
