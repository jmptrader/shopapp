<template>
	<header class="ui-header ui-header-stable ui-border-b">
		<div v-show='isShowSearch'>
			<div class="ui-row">
				<div class="ui-col ui-col-10">
					<i class="ui-icon-scan ui-txt-white"></i>
				</div>
				<div class="ui-col ui-col-80">
					<app-search></app-search>
				</div>
				<div class="ui-col ui-col-10">
					<i class="ui-icon-add-group ui-txt-white"></i>
				</div>
			</div>
		</div>
		<div v-show="!isShowSearch" class='ui-whitespace'>
			<i class="ui-icon-return ui-txt-white" onclick="history.back()"></i><h1 class="ui-txt-white">{{title}}</h1>
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
.ui-header{
	background: #E4B401;
}
</style>

