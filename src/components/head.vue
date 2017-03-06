<template>
<header class="ui-header ui-header-stable ui-border-b">
	<div class="app-header" v-show="!isShowSearch">
    	<i class="ui-icon-return" onclick="history.back()"></i><h1>layout</h1>
    </div>
    <div class="ui-searchbar-wrap ui-border-b" v-show="isShowSearch">
	    <app-serach></app-serach>
	</div>    
</header>
	
</template>

<script>
import Search from '@/components/search'
export default {
  data () {
    return {
    }
  },
  computed: {
      isShowSearch: function () {
        return this.$store.state.comm.indexConf.isSearch
      },
      title: function () {
        return this.$store.state.comm.indexConf.title
      },
      isBack: function () {
        return this.$store.state.comm.indexConf.isBack
      }
    },
    methods: {
      goBack: function () {
        history.go(-1)
      },
      add: function () {
      }
    },
    components:{
	   appSearch:Search,
	}
}
</script>
<style>
  @import "../../static/frozenui/css/frozen.css";
</style>

