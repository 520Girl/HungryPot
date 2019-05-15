<template>
  <section>
    <ul>
      <li>{{date}}</li>
      <li>{{time}}</li>
      <li><a>This is clock</a></li>
      <li>
        <button @click="updateTime()">按钮</button>
      </li>
    </ul>
    <router-view></router-view>
  </section>
</template>
<script>
export default {
  data() {
    return {
      date: "",
      time: "",
      num: 1,
    };
  },
  watch: {
    time: function (newVal, oldVal) {
      if (newVal != oldVal) {
        setInterval(this.updateTime, 1000);
      }
    }
  },
  mounted() {
    this.updateTime();
  },
  methods: {
    updateTime: function () {
      var week = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"];
      var dates = new Date();
      this.time = removeZero(dates.getHours(), 2) + ":" + removeZero(dates.getMinutes(), 2) + ":" + removeZero(dates.getSeconds(), 2);
      this.date = removeZero(dates.getFullYear(), 4) + "-" + removeZero(dates.getMonth() + 1, 2) + "-" + removeZero(dates.getDate(), 2) + " " + week[dates.getDay()]
      function removeZero(num, nums) {
        var zero = " ";
        for (var i = 0; i < nums; i++) {
          zero += "0";
        }
        return (zero + num).slice(-nums);
      }
    }
  },
  created() {
    var oBoy = document.body;
    oBoy.style.backgroundColor = "#0f3854"
    oBoy.style.backgroundImage = "-webkit-radial-gradient(center ellipse, #0a2e38 0%, #000000 70%)";
    oBoy.style.backgroundImage = "radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%)";
    oBoy.style.backgroundSize = "100%";
  },
  destroyed() {
    var oBoy = document.body;
  }
};

//var timeId = setInterval(fd(), 1000);
function updateTime() {
  var dates = new Date();
}
function removeZero(num, nums) {
  var zero = " ";
  for (var i = 0; i < nums; i++) {
    zero += "0";
  }
  return (zero + num).slice(-nums);
}
</script>
<style lang="scss" scoped="" type="text/css">
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: cadetblue;
  &:hover {
    color: aqua;
  }
}
ul,
li,
ol {
  list-style: none;
  color: aliceblue;
}
ul {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  li:nth-child(1) {
    letter-spacing: 0.1em;
    font-size: 24px;
    color: rgb(76, 106, 107);
  }
  li:nth-child(2) {
    letter-spacing: 0.01rem;
    font-size: 0.8rem;
    padding: 0.05rem 0.05rem;
  }
  li:nth-child(4) {
    button {
      height: 0.4rem;
      width: 1.5rem;
      border: none;
      border-radius: 0.25rem;
      outline: 0;
      background: rgba(119, 138, 120, 0.5);
      &:hover {
        background: aqua;
      }
    }
  }
}
</style>
