<template>
  <div>
    <ul class="tap-title">
      <li v-for="(item,index) in title" @click="cur=index" v-bind:class="{active:cur==index}">{{item}}</li>
    </ul>
    <div class="tab-content">
      <div v-for="(item,index) in data" v-show="cur==index">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: ["内容一", "内容二", "内容三", "聂荣四"],
      title: ["标题一", "标题四", '标题3', "标题四"],
      cur: 0,
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
