<template>
	<div class="app-index">
	<app-banner></app-banner>	

		<!-- 菜谱列表 -->
		<ul class="ui-list ui-list-link ui-border-tb">
		    <li class="ui-border-t">
		        <div class="ui-list-img">
		            <span style="background-image:url(http://placeholder.qiniudn.com/200x136)"></span>
		        </div>
		        <div class="ui-list-info">
		            <h4 class="ui-nowrap">这是标题，加ui-nowrap可以超出长度截断</h4>
		            <p class="ui-nowrap">这是内容，加ui-nowrap可以超出长度截断</p>
		        </div>
		    </li>
		    <li class="ui-border-t">
		        <div class="ui-list-img">
		            <span style="background-image:url(http://placeholder.qiniudn.com/200x136)"></span>
		        </div>
		        <div class="ui-list-info">
		            <h4 class="ui-nowrap">这是标题，加ui-nowrap可以超出长度截断</h4>
		            <p class="ui-nowrap">这是内容，加ui-nowrap可以超出长度截断</p>
		        </div>
		    </li>
		</ul>
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
