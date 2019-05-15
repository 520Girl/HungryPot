<template>
  <div class="jd_container">
    <!-- header -->
    <header>
      <div class="jd_header_box">
        <a href="" title="logo" class=" icon_logo"></a>
        <form action="#">
          <span class="icon_jd"></span>
          <span class="icon_search"></span>
          <input type="text" placeholder="占位符搜索的内容">
        </form>
        <a href="#" class="login">登录</a>
      </div>
    </header>
    <!-- 轮播图 -->
    <div class="jd_banner">
      <ul>
        <li><a href="#" title=""><img src="../assets/images/l8.jpg" alt=""></a></li>
        <li><a href="#" title=""><img src="../assets/images/l1.jpg" alt=""></a></li>
        <li><a href="#" title=""><img src="../assets/images/l2.jpg" alt=""></a></li>
        <li><a href="#" title=""><img src="../assets/images/l3.jpg" alt=""></a></li>
        <li><a href="#" title=""><img src="../assets/images/l4.jpg" alt=""></a></li>
        <li><a href="#" title=""><img src="../assets/images/l5.jpg" alt=""></a></li>
        <li><a href="#" title=""><img src="../assets/images/l6.jpg" alt=""></a></li>
        <li><a href="#" title=""><img src="../assets/images/l7.jpg" alt=""></a></li>
        <li><a href="#" title=""><img src="../assets/images/l8.jpg" alt=""></a></li>
        <li><a href="#" title=""><img src="../assets/images/l1.jpg" alt=""></a></li>
      </ul>
      <ul class="clearFix">
        <li class="now"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <!--提示 tips  -->
    <div class="jd_tips">
      <a href="#" title="" el="nofollow">
        <img src="../assets/images/banner.gif" alt="">
      </a>
    </div>
    <!-- 产品区块 -->
    <div class="">

    </div>
  </div>
</template>
<script>
export default {
  name: 'Jdm',
  data() {
    return {

    }
  },
}
</script>
<style lang="scss" scoped>
.jd_container {
  min-width: 320px;
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
  header {
    height: 40px;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    .jd_header_box {
      height: 40px;
      width: 100%;
      min-width: 320px;
      max-width: 640px;
      margin: 0 auto;
      //background: rgba(201, 21, 35, 0.85);
      position: relative;
      .icon_logo {
        position: absolute;
        left: 10px;
        top: 4px;
        width: 60px;
        height: 36px;
        background: url("../assets/images/sprites.png") no-repeat 0 -103px/200px
          200px;
      }
      form {
        width: 100%;
        padding-left: 70px;
        padding-right: 50px;
        position: absolute;
        .icon_search {
          width: 20px;
          height: 20px;
          position: absolute;
          top: 10px;
          left: 111px;
          background: url("../assets/images/sprites.png") -60px -109px /200px 200px;
        }
        .icon_search::before {
          content: "";
          height: 20px;
          width: 1px;
          background: #cccccc;
          position: absolute;
          right: 25px;
        }
        .icon_jd {
          width: 20px;
          height: 20px;
          position: absolute;
          top: 10px;
          left: 81px;
          background: url("../assets/images/sprites.png") 0 2px /200px 200px;
        }
        input {
          width: 100%;
          height: 30px;
          margin-top: 5px;
          border-radius: 15px;
          padding-left: 61px;
          color: #cccccc;
        }
      }
      .login {
        position: absolute;
        right: 0;
        width: 50px;
        height: 40px;
        text-align: center;
        color: #fff;
        font-weight: 700;
        line-height: 40px;
      }
    }
  }
  // 轮播图 jd_banner
  .jd_banner {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    font-size: 0; //解决图片 文字大小占据位置有三种方法，img中其余两种
    ul:first-child {
      width: 1000%;
      transform: translateX(-10%);
      -webkit-transform: translateX(-10%);
      //-moz-transform: translateX(-11%);
      //-ms-transform: translateX(-11%);
      //-o-transform: translateX(-11%);

      li {
        width: 10%;
        float: left;
        a {
          display: block;
          width: 100%;
          img {
            display: block;
            //vertical-align: middle;
            width: 100%;
          }
        }
      }
    }
    ul:last-child {
      position: absolute;
      width: 150px;
      height: 3px;
      left: 50%;
      margin-left: -100px;
      bottom: 15px;
      li {
        width: 6px;
        height: 6px;
        border: 1px solid #000000;
        border-radius: 3px;
        margin-left: 10px;
        float: left;
      }
      li:last-child {
        margin-right: 0;
      }
      .now {
        background: #fff;
      }
    }
  }
  // 提示 tips
  .jd_tips {
    width: 100%;
    margin: 0 auto;
    position: relative;
    a {
      width: 100%;
      position: absolute;
      top: -10px;
      img {
        width: 100%;
        //border: 1px solid red;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
      }
    }
  }
  //
}
</style>

