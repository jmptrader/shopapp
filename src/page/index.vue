<template>
	<div>
  	<app-banner :banner='bannerInfo'></app-banner>	
  	<app-menu-list></app-menu-list>
	</div>
</template>


<script>
import Banner from '@/components/banner'
import MenuList from '@/components/menulist'
export default {
  data () {
    return {
      bannerInfo:[{
        src:this.$store.state.comm.imgUrl + '/banner/1.jpeg'
      },{
        src:this.$store.state.comm.imgUrl + '/banner/2.jpeg'
      },{
        src:this.$store.state.comm.imgUrl + '/banner/3.jpeg'
      }]
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

