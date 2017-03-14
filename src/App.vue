<template>
  <div id="app">
    <app-header></app-header>
    <div class="app-content">
      <router-view></router-view> 
    </div>
    <app-footer></app-footer>
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
  @import "../static/frozenui/css/frozen.css";
  @import '../static/css/app.scss';
</style>
