<template>
	<div class="app-index">
	<app-banner></app-banner>	
	<!-- 热门推荐 -->
	<ul class="ui-grid-halve">
	    <li>
	        <div class="ui-grid-halve-img">
	            <span style="background-image:url(http://placeholder.qiniudn.com/290x160)" class="ui-tag-new"></span>
	        </div>
	    </li>
	    <li>
	        <div class="ui-grid-halve-img">
	            <span style="background-image:url(http://placeholder.qiniudn.com/290x160)" class="ui-tag-s-hot"></span>
	        </div>
	    </li>
	</ul>
	<!-- 猜你喜欢 -->
	<section class="ui-panel">
	    <h2 class="ui-arrowlink">猜你喜欢<span class="ui-panel-subtitle">1328条</span></h2>
	    <ul class="ui-grid-trisect">
	        <li>
	            <div class="ui-border">
	                <div class="ui-grid-trisect-img">
	                    <span style="background-image:url(http://placeholder.qiniudn.com/190x284)"></span>
	                </div>
	                <div>
	                    <h4 class="ui-nowrap-multi">长书名长书名长书名长书名长书名长书名长书名</h4>
	                    <h5 class="ui-nowrap">小仙</h5>
	                </div>
	            </div>
	        </li>
	        
	    </ul>
	</section>
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
