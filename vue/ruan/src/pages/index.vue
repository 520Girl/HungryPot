<template>
    <div class="a">
        <div>我是一个标签</div>
        <ul>
            <li class="li" v-for="(article,index) in list" :key="index">
                <router-link :to="{ name : 'Content',params : { articleId : article.articleId } }">{{ article.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               title : 'shouye',
               list : [
                   {
                       title : 'vue 生命周期',
                       articleId  : '123',
                   },
                   {
                       title : '计算属性',
                       articleId  : '234',
                   },
                   {
                       title : 'watch模式',
                       articleId  : '32323',
                   },
                   {
                       title : 'Vue.prototype 原型链挂载全局属性/方法',
                       articleId  : '32323',
                   },
                   {
                       title : 'Vuex',
                       articleId  : '32323',
                   }
               ]
            }
        },
        created() {
            console.log(this.q);
        }
    }
</script>

<style lang="scss" scoped>
    ul{
        font-size:.24rem;
        .li{
           a{
               color:red;
           }
        }
    }

</style>