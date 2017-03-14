<template>
  <div id="app">
    <div class="app-fix-head"  v-show="isShowHeader">
      <app-header></app-header>
    </div>
    <transition enter-class='animated fadeInLeft' leave-class="animated fadeOutLeft">
      <router-view></router-view>
    </transition>
    <div class="app-fix-foot"  v-show="isShowFooter">
      <app-footer></app-footer>
    </div>
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
  watch: {

  },
  computed:{
    isShowHeader:function () {
      return this.$store.state.comm.indexConf.isHeader
    },
    isShowFooter:function () {
      return this.$store.state.comm.indexConf.isFooter
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
  @import '../static/animate/animate.css';
  @import '../static/css/app.scss';
</style>
