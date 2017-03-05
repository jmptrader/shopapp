<template>
  <div id="app">
	<app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/head'
import Footer from '@/components/footer'
export default {
  components:{
  	appHeader:Header,
  	appFooter:Footer,
  }
}
</script>
<style lang="scss">
  @import "../static/css/app.scss";
</style>
