<template>
  <div>
    <table border="1" cellpadding="14px" cellspacing="0">
      <tr>
        <td>
          id:<input type="text" v-model="id" />
        </td>
        <td>
          name:<input type="text" v-model="name" />
        </td>
        <td>
          <button @click="add()" style="width:200px">添加</button>
        </td>
        <td>
          搜索关键字:
          <input type="text" placeholder="请输入关键字" v-model="keyWords" />
        </td>
      </tr>
      <tr>
        <td>id</td>
        <td>name</td>
        <td>时间</td>
        <td>操作</td>
      </tr><!-- list 是一个指令可以拿到任何data里的任何一个数据 -->
      <tr v-for="item in search(keyWords)" :key="item.id">
        <td>{{item.id}}</td>
        <td v-text="item.name"></td>
        <td>{{item.ctime | timeFilter()}}</td><!-- timeFilter('yyyy-mm-ss') -->
        <td>
          <button @click.prevent="del(item.id)">删除</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>

// Vue.filter('datee', function () {

// })
export default {
  data() {
    return {
      id: '',
      name: '',
      operate: '',
      keyWords: '',
      list: [
        { id: '1', name: '马小跳', ctime: new Date() },
        { id: '2', name: '熊大', ctime: new Date() },
        { id: '3', name: '熊二', ctime: new Date() }
      ]
    }
  },

  methods: {
    add: function () {
      var arr = { id: this.id, name: this.name, ctime: new Date() };
      console.log(this.list)
      this.list.findIndex(item => {
        if (this.id != item.id) {
          this.list.push(arr);
          this.id = this.name = ""
          return true
        } else {
          alert("对不起id重复")
          this.id = this.name = ""
          return true

        }
      })



    },
    del: function (id) {//这里使用some有个弊端就是不能删除最后一项,因为他返回的是true or flase 
      //findIndex返回的是元素所在的位置   
      var index = this.list.findIndex(item => {
        if (item.id == id) {
          return true
        }
      })
      this.list.splice(index, 1);
    },
    search: function (keyWords) {
      return this.list.filter(item => {
        if (item.name.includes(keyWords)) {
          return item
        }
      })
    }
  },
  watch: {
    id: function (newVal, oldVal) {
      this.list.findIndex(item => {
        if (newVal === item.id) {

        }
      })
    }
  },

  filters: { //这里是局部变量,过滤器调用采用的是就近原则,如果私有过滤器和全局过滤器名称一致的情况下,首先调用私有过滤器
    timeFilter: function (dateStr, exact = "") {
      let dates = new Date(dateStr);
      let YY = dates.getFullYear();
      let MM = dates.getMonth() + 1;
      let DD = dates.getDay();
      let hh = dates.getHours();
      let mm = dates.getMinutes();
      let ss = dates.getSeconds();
      if (exact.toLowerCase() === "yyyy-mm-ss") {
        return `${YY}-${MM}-${DD}`
      } else {
        return `${YY}-${MM}-${DD} ${hh}:${mm}:${ss}`
      }

    }
  }

}
</script>
<style lang="scss">
* {
  font-size: 24px;
}
</style>
