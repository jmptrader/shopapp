<template>
	<div>
  	<app-banner></app-banner>	
  	<app-menu-list></app-menu-list>
	</div>
</template>


<script>
import Banner from '@/components/banner'
import menuList from '@/components/menulist'
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
		title: ''
	})
  },
  components:{
  	appBanner:Banner,
  	appMenuList:menuList,
  }
}
</script>

