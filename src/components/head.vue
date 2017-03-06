<template>
	<header class="ui-header ui-header-stable ui-border-b" v-show="isShowHeader">
		<div v-show='isShowSearch'>
			<div class="ui-row">
				<div class="ui-col ui-col-10">
					<i class="ui-icon-scan " ></i>
				</div>
				<div class="ui-col ui-col-80">
					<app-search></app-search>
				</div>
				<div class="ui-col ui-col-10">
					<i class="ui-icon-add-group "></i>
				</div>
			</div>
		</div>
		<div v-show="!isShowSearch" class='ui-whitespace'>
			<i class="ui-icon-return " 
      v-show="isBack" 
      onclick="history.back()"></i>
      <h1 class="">{{title}}</h1>
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
      },
      isShowHeader:function () {
        return this.$store.state.comm.indexConf.isHeader
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
.ui-header{
	background: #FED000;
}
</style>

