<template>
  <ul>
    <router-link to="/index">this is index page</router-link>
    <router-link to="/sass">this is sass page</router-link>
    <router-link to="/content/22">this is content</router-link>
    <router-link to="/text">text</router-link>
    <router-link to="/test">test</router-link>
    <router-link to="/sas">indexpage</router-link>
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
      message: "输出的消息是"
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
<style lang="scss">
/* css ------ star css */
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: goldenrod;
}
ul,
li,
ol {
  list-style: none;
}
ul > li {
  padding-left: 0.5rem;
  font-size: 0.5rem;
  float: left;
}
/* css ------ end css  */

/* sass ----- start sass  */
$blue: yellow;
$fontSize: 0.6rem;
$flet: top;
ul .demo {
  //允许使用变量，以$开头。。可以将变量骧嵌到字符串中得加#{}
  clear: both;
  border: 0.1rem red solid;
  font-size: $fontSize;
  background-color: $blue;
  border-#{$flet}-color: black;
  border-top-width: 0.5rem;
}
$range: 0.1rem;
ul > li {
  //允许使用算数
  margin-right: (0.5rem/2);
  margin-top: 0.1rem + 0.1rem;
  margin-bottom: $range * 0.1; //注意这里不能有两个长度单位(px rem em等)做乘法
}
ul {
  //允许选择器嵌套
  li {
    font-weight: 800;
  }
  a {
    vertical-align: middle;
  }
}
a {
  //可以使用&符号来引用父元素,三种注释方法1.// 2./*！ */3.//
  &:hover {
    color: salmon;
  }
}
.li {
  //可以继承属性使用@extend,
  box-shadow: 0.1rem 0.1rem 0.1rem 0.01rem;
}
a {
  @extend .li;
  font-style: italic;
}
@mixin left {
  //这里定义了一个left代码块,可以通过@include引用达到代码重用,还有一个强大的地方可以指定参数和缺省值
  //这里需要注意的是参数带值得必须写在最后面
  //调用方法也有两种
  box-sizing: border-box;
  height: 2rem;
}
ul > li {
  @include left;
}
@mixin right($webkit, $left, $horz, $vert, $value: 20rem, $name: 10px) {
  border-#{$left}-color: red;
  height: $value;
  -webkit-border-#{$vert}-#{$horz}-radius: $radius;
  -moz-border-#{$vert}-#{$horz}-radius: $value;
}
//css中的import有三种导入方式不支持局部导入，而sass支持局部导入.但注意后缀名
// @import url(gulp.css);
// @import url('gulp.css');
// @inport 'glup.css';
// .blue-theme { @import "blue-themes" ;}

// /生成的结果跟你直接在.blue-theme选择器内写_blue-theme.scss文件的内容完全一样。
// .blue-theme {
// aside {
//     background: blue;
//     color: #fff;
// }
// }
/*！.li { @includerounded(right, left, 5px); } 这个语法待验证------------------------*/
// 还支持if else for while 自定义函数等 感觉就像媒体查询@media一样
//     $color:yellow;
//     @if lightness($color) > 30% {
//         background-color: #000;
// 　　} @else {
// 　　　　background-color: #fff;
// 　　}
//     @for $i from 1 to 10 {
// 　　　　.border-#{$i} {
// 　　　　　　border: #{$i}px solid blue;
// 　　　　}
// 　　}
//     @function double($n) {
// 　　　　@return $n * 2;
// 　　}

// 　　#sidebar {
// 　　　　width: double(5px);
// 　　}
/* sass ----- end sass  */
</style>
