<template>
	<div class="index-wrap">
	<!-- 轮播 -->
	<div class="ui-slider" id="slider1">
	    <ul class="ui-slider-content" style="width: 100%">
	        <li><span style="background-image:url(http://placeholder.qiniudn.com/640x200)"></span></li>
	    </ul>
	</div>
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
	<!-- 热销商品 -->
	<ul class="ui-grid-trisect ui-border-b">
		<h2 class="ui-arrowlink">热销商品<span class="ui-panel-subtitle">1328条</span></h2>
	    <li>
	        <div class="ui-grid-trisect-img">
	            <span style="background-image:url(http://placeholder.qiniudn.com/190x284)"></span>
	        </div>
	        <h4>高尔夫 <span>2.3M</span></h4>
	        <button class="ui-btn-s ui-btn-progress">免费</button>
	    </li>
	    <li>
	        <div class="ui-grid-trisect-img">
	            <span style="background-image:url(http://placeholder.qiniudn.com/190x284)"></span>
	        </div>
	        <h4>高尔夫 <span>2.3M</span></h4>
	        <button class="ui-btn-s ui-btn-progress">免费</button>
	    </li>
	    <li>
	        <div class="ui-grid-trisect-img">
	            <span style="background-image:url(http://placeholder.qiniudn.com/190x284)"></span>
	        </div>
	        <h4>高尔夫 <span>2.3M</span></h4>
	        <button class="ui-btn-s ui-btn-progress">免费</button>
	    </li>
	    <li>
	        <div class="ui-grid-trisect-img">
	            <span style="background-image:url(http://placeholder.qiniudn.com/190x284)"></span>
	        </div>
	        <h4>高尔夫 <span>2.3M</span></h4>
	        <button class="ui-btn-s ui-btn-progress">免费</button>
	    </li>
	</ul>
	</div>
</template>


<script>
export default {
  data () {
    return {
      msg: 'index'
    }
  }
}
</script>

