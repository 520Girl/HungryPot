<template>
  <div>
    <h1>Here will be output</h1>
    <ol>
      <li>
        <p>{{ num+a | addSymbol | addUnit |addWord}}</p> <!-- 这里设置的是使用的是filters过滤器选项 -->
      </li>
      <li>
        <p v-bind:style="demo">{{a|addStyle}}</p><!-- 这里可以什么过滤器在v-bind之前, -->
        <p v-bind:class="[demo,demo2]">这段文字了是对class的厕所</p><!-- 数组[name1,name2] 判断{style:isok} -->
      </li>
      <li>
        <p>v-model的使用</p>
        <div>
          <form action="" method="post">
            用户名:<input type="text" name="username" id="username" v-model.lazy.trim="username" />
            密码: <input type="password" name="password" id="password" />
            邮箱: <input type="email" name="email" id="email" />
            性别: <input type="radio" name="sex" id="boy" value="男" v-model="sex" />
            <label for="sex">男</label><!-- 通过name的值来判断单选还是多选 -->
            <input type="radio" name="sex" id="girl" value="女" v-model="sex" />
            <label for="sex">女</label>
            <input type="text" name="sex" id="sex" v-model="username">
          </form>
        </div>
      </li>
      <li>
        <p>构造标签通过Vue.extend构建全局</p>
        <span>
          <!-- 怎么使用Vue.extend 也就是全局命令 -->
          <ruan v-bind:name="name" v-bind:title="title" id="这里是哪里"></ruan>
        </span>
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ol>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 5,
      a: 50,
      b: 100,
      demo: {
        backgroundColor: 'yellow',
        textAlign: 'center',
      },
      demo2: 'demo2',
      sex: '男',
      username: "admin",
      name: 'tab',
      title: '标题',
    }
  },
  filters: {
    addSymbol: function (num) {
      return "$" + num
    },
    addUnit: function (num) {
      return num + "元"
    },
    addWord: function (num) {
      return `这里是在对filters过滤选项的使用======${num}`
    },
    addStyle: function (demo) {
      return `这里是test v-bind标签的使用行间样式`
    }
  },
  components: {
    "ruan": {
      template: `
                <div>
                  <h1 name="title">局部组件{{name}}{{title}}{{id}}</h1>
                  <p>component</p>
                </div>
      `,
      props: ['name', 'title', 'id']
    }
  }
}
// var ruan = Vue.extend({
//   template: `<h1 title="title">这是用构建的<h1>`,
//   data: function () {
//     title: "我"
//   }
// })
// new ruan().$mount('ruan');
</script>
<style lang="scss" scoped>
div {
  font-size: 24px;
  float: left;
}
.demo2 {
  // background-color: -webkit-linear-gradient( //为啥无法使用
  //   left,
  //   rgba(123, 33, 213, 0.5),
  //   rgba(123, 3, 33, 0.2)
  // );
  background: red;
}
</style>
