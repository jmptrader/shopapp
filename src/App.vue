<template>
  <div id="app">
    <div class="app-fix-head"  v-show="isShowHeader">
      <app-header></app-header>
    </div>
    <transition enter-active-class='animated fadeIn'>
      <router-view></router-view>
    </transition>
    <div class="app-fix-foot"  v-show="isShowFooter">
      <app-footer></app-footer>
    </div>
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
    }
  },
  created: function () {
    if (this.$router.name === undefined) {
      this.$router.push('/index')
    }
  },
  methods:{
    
  },
  watch: {

  },
  computed:{
    isShowHeader() {
      return this.$store.state.comm.indexConf.isHeader
    },
    isShowFooter() {
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
