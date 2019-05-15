<template>
  <div>
    <p>{{message}}</p>
    <p>params 传递参数url-----通过$route.name接收这是name传值--{{$route.name}}</p>
    <h6>通过$route.params.username接收这是标签传值--我叫{{$route.params.username}}性别{{$route.params.sex}}</h6>
  </div>
</template>
<script>
export default {
  name: "pagesOne",
  data() {
    return {
      message: "params 传递参数url"
    };
  }
};
</script>
<style>
</style>


