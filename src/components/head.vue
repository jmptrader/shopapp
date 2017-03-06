<template>
	<div class="ui-searchbar-wrap ui-border-b">
	    <div class="ui-searchbar ui-border-radius">
	        <i class="ui-icon-search"></i>
	        <div class="ui-searchbar-text">搜索号码（2-10位）</div>
	        <div class="ui-searchbar-input"><input value="" type="tel" placeholder="搜索号码（2-10位）" autocapitalize="off"></div>
	        <i class="ui-icon-close"></i>
	    </div>
	    <button class="ui-searchbar-cancel">取消</button>
	</div>
</template>

<script>
export default {


	// $('.ui-searchbar').tap(function(){
 //        $('.ui-searchbar-wrap').addClass('focus');
 //        $('.ui-searchbar-input input').focus();
 //    });
 //    $('.ui-searchbar-cancel').tap(function(){
 //        $('.ui-searchbar-wrap').removeClass('focus');
 //    });
  name: 'hello',
  data () {
    return {
      msg: 'header'
    }
  }
}
</script>
<style>
  @import "../../static/frozenui/css/frozen.css";
</style>

