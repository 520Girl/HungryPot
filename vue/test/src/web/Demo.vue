<template>
  <div>七鬼五二三
    <p class="demo" v-html="title"></p>
    <p>
      <button @click="add()">执行</button>
      <button @click="count(1,2,3)">放弃</button>
      <button @click="extendOperator()">扩展运算符</button>
      <button @click="numberOperation()">数字操作</button>
      <button @click="arrayFormatConvarstion()">数组转换格式</button>
      <button @click="add1()">测试</button>
    </p>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '<h1 style="text-align:content;">论怎么提不起学习的兴趣了</h1>',
      one: true,
      two: false,
      list: [
        { id: 1, name: '奔驰', ctime: new Date() },
        { id: 2, name: '宝马', ctime: new Date() }
      ]
    }
  },
  created: function () {
    this.arrTest();
    this.EsFind()
    this.changeColor(this.list)
  },
  methods: {
    add: function () {
      let a = 2;
      let [e, b, c] = [1, 2, 3]
      let [k, [g, h], f] = [55, [44, 580], 5568]
      console.log(h)
    },

    count: function (...arr) {
      for (let i = 1; i < 2; i++) {
        console.log("循环中的" + i)
      }
      let [a, foo = "100"] = [10044];
      let [c, bf, g = "canio"] = ["技术", 55, undefined]
      console.log(c + g);
      console.log(bf);
      console.log(g)
      console.log(arr[0]);
      console.log(arr[1]);
    },
    extendOperator: function () {
      let arr1 = [255, 265, 275];
      let a = 2;
      let b = 5;

      console.log(`对了我是arr1的原值${arr1}`)
      let arr2 = [];
      arr2 = [...arr1];
      arr2.push("我是小学生");
      console.log(`I am ${arr2}`)
      console.log(`I am change ${arr1}`)
      console.log(`输出a+b的值${a % b}`)
      let data = "起来";
      let name = "孔子曰:学而四西子起来不一起来"
      console.log(`查找data所在的位置${name.indexOf(data)}`)
      console.log(`判断开头是否存在${name.startsWith(data)}`)
      console.log(`判断结尾是否存在${name.endsWith(data)}`)
      console.log(`这里是重复的值${'阮江|'.repeat(3)}`)

    },
    numberOperation: function () {
      let bilary = 0b01010;//二进制数
      let Octal = 0o2231;//十进制数
      console.log(bilary);
      console.log(Octal);
      //数字的判断
      console.log(Number.isFinite("22"));
      console.log(Number.isFinite("七鬼五二三"));
      //对NaN的验证
      console.log(Number.isNaN(NaN));
      //判断是否为整数
      let a = "2.50";
      let b = "20";
      console.log(Number.isInteger(a));
      console.log(Number.isInteger(b));
      //转换为整型,浮点型
      console.log(Number.parseInt(a) + "" + "" + Number.parseInt(b));//220
      console.log(Number.parseFloat(a)) //2.5
      //最大安全数,最小安全数
      console.log(`最大安全数${Number.MAX_SAFE_INTEGER}`)
      console.log(`最小安全数${Number.MIN_SAFE_INTEGER}`)
      console.log(Number.isSafeInteger(a));//判断是否在安全整数范围

    },
    arrayFormatConvarstion: function () {
      let student = {
        '0': 'like computer game',
        '1': 'is from SiChuan',
        '2': 'a little cule',
        length: 3
      }
      //将json数据装换为数组
      console.log(Array.from(student))
      //Array.of()可以将数字或者字符串转换为组,需要注意这里直接在of后面添加变量
      let meArr = Array.of(1, 2, 3, 4, 5, 9, 60)
      let meString = Array.of('小鸟', '小鬼', '小狗');
      console.log(meString)
      console.log(meArr)
      //fand实例方法
      let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      console.log(arr.find(function (value, index, arr) {
        return value > 5;
        //return index = 2
      }))
      console.log(`<br/>`)
      //fill()可以对数组进行填充包括2 不包括4
      let arry = ['小布', '烈焰魔王', '圣剑骑士', '裁决审判', 'json', '顽梗世家', 'striat']
      for (let [item, value] of arry.entries()) {
        console.log(`输出${item + ':' + value}`);
      }
      let number = arry.entries();
      console.log('使用' + number.next().value)
      arry.fill('我要进去', 2, 4)
      console.log(arry)
    },
    add1: function () {
      let foo;
      ({ foo } = { foo: "菜鸟" })
      console.log(foo);
      //document.write('jspan'.repeat(3));
      let num = "100";
      console.log(Number.isNaN());
    },
    arrTest: function () {
      let json = [
        { 'name': "冯小刚", email: "123@qq.com", state: "200ok" },
        { name: "李玉刚", email: "1234@qq.com", state: "304ok" },
        { name: "李冰冰", email: "12345@qq.com", state: "304ok" },
        { name: "李进文", email: "1234556@qq.com", state: "304ok" },
        { name: "冯马跳", email: "1234567@qq.com", state: "304ok" }
      ]
      let jsons = [1, 2, 3, 4]
      console.log(json[0].name)
      console.log(JSON.stringify(json))
      console.log(json)
      var index = json.some(function (item, index, arr) {
        console.log(index)
        console.log(arr)
        return item.state == "304ok"
      }, 0)
      console.log(index)
    },
    EsFind: function () {
      let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      console.log(arr.find(function (value, index, arr) {
        //throw new Error('this is error')
        return value > 5;
      }))
    },
    changeColor: function ([{ id, name, ctime }]) {
      console.log(id, name, ctime)
    }


  }

}
</script>
<style lang="scss" scoped>
[class] {
  font-size: 24px;
}
</style>
