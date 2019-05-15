<template>
  <div>
    <ul class="title">
      <li>
        <a title="home" v-for="(item,index) in title" @click="cur=index" v-bind:class="{active:cur==index}">{{item}}</a>
      </li>
    </ul>
    <ul class="content">
      <li v-for="(item,index) in data" v-show="cur==index">{{item}}</li>
      <li v-show="cur==1">
        <div class="login-title">
          <div @click="num=0" :click="{active:num==0}">
            <span>登录</span>
          </div>
          <div @click="num=1" :click="{active:num==1}">注册</div>
          <div @click="num=2" :click="{active:num==2}">二维码</div>
        </div>
        <div class="login-content">
          <div v-show="num==0">
            <ul>
              <li>
                <i class="iconfont icon-Baby-2"></i>
                <input type="text" value="" placeholder="手机号">
              </li>
              <li>
                <i class="iconfont icon-Baby-2"></i>
                <input type="text" value="" placeholder="手机号">
              </li>
              <li>
                <i class="iconfont icon-Baby-2"></i>
                <input type="text" value="" placeholder="手机号">
              </li>
              <li>
                <button type="submit">提交</button>
              </li>
              <li></li>
            </ul>
          </div>
          <div v-show="num==1">11</div>
          <div v-show="num==2">111</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  data() {
    return {
      title: ['Home', 'Login', 'User', 'Advert', 'Advert', 'Advert', 'Advert', 'Advert', 'Advert', 'Advert'],
      data: ['home content', '', 'User content', 'Advert content', 'Advert content', 'Advert content', 'Advert content', 'Advert content', 'Advert content'],
      cur: 0,
      num: 0
    }
  },
  created() {
    var oBoy = document.body;
    console.log(oBoy);
    oBoy.style.backgroundImage = 'url(../assets/boss.jpg)';
    //oBoy.style.backgroundColor = "red";
    oBoy.style.color = "red";
  }
}
</script>
<style lang="scss" scoped>
/* 全局 start */
* {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li,
ol,
a,
tr,
td,
table,
body,
form,
dl,
dt,
dd {
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-weight: normal;
}

a {
  text-decoration: none;
  color: #cccccc;
}

ul,
li,
ol {
  list-style: none;
}
/* 全局 end */
</style>
