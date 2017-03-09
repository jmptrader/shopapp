<template>
	<div class="app-index">
	<app-banner></app-banner>	
	
	</div>
</template>


<script>
import Banner from '@/components/banner'
export default {
  data () {
    return {
      msg: 'index'
    }
  },
  created:function () {
  	// head的修改
	this.$store.commit('changeIndexConf', {
		isFooter: true,
		isSearch: true,
		isHeader:true,
		isBack: false,
		title: ''
	})
  },
  components:{
  	appBanner:Banner,
  }
}
</script>
<style>
	.app-index{
		margin-top: 45px;
	}
</style>
