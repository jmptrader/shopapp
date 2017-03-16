<template>
	<div>
  	<app-banner></app-banner>	
  	<app-menu-list></app-menu-list>
	</div>
</template>


<script>
import Banner from '@/components/banner'
import MenuList from '@/components/menulist'
export default {
  data () {
    return {
      msg: 'index'
    }
  },
  created () {
  	// head的修改
	this.$store.commit('changeIndexConf', {
		isFooter: true,
		isSearch: true,
		isHeader:true,
		title: ''
	})
  },
  methods:{
  },
  components:{
  	appBanner:Banner,
  	appMenuList:MenuList,
  }
}
</script>

