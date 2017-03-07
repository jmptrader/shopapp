<template>
  <div id="app">
   <app-header></app-header>
    <!-- 渲染路径匹配到的组件，在created方法中定义默认路径 -->
    <router-view></router-view> 
    <app-footer></app-footer>
    <!-- <app-loading></app-loading> -->
  </div>
</template>

<script>
import Header from '@/components/head'
import Footer from '@/components/footer'
import Index from '@/page/index'
import Loading from '@/components/loading'
export default {
  data:function () {
    return {
      name :'ever'
    }
  },
  created: function () {
    if (this.$route.name === undefined) {
      this.$router.push('/index')
    }
  },
  components:{
  	appHeader:Header,
    appFooter:Footer,
    appIndex:Index,
  	appLoading:Loading,
  }
}
</script>
<style lang='scss'>
  @import '../static/css/app.scss'
</style>
