<template>
	<footer class="ui-footer ui-footer-stable ui-border-t foot-bg" v-show="isShowFooter">
	    <ul class="ui-tiled icon-lists" >
	        <li v-bind:class="{actived:item.isActive}" 
	        @click="toggle(item,$index)"
	        v-for="(item,$index) in items">
	        	<router-link :to=item.toRouter>
		        	<i :class="item.iconClass"></i>
		        	<span class="foot-text">{{ item.iconName }}</span>
	        	</router-link>
        	</li>
	    </ul>
	</footer>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
    	items:[
    		{
    			iconClass:'ui-icon-hall',
    			iconName:'首页',
    			toRouter:'/index',
    			isActive:true
    		},
    		{
    			iconClass:'ui-icon-cart',
    			iconName:'购物车',
    			toRouter:'/cart',
    			isActive:false
    		},
    		{
    			iconClass:'ui-icon-personal',
    			iconName:'我的',
    			toRouter:'/user',
    			isActive:false
    		}
    	]

    }
  },
  computed:{
    isShowFooter:function () {
        return this.$store.state.comm.indexConf.isFooter
      }
  },
  methods:{
	  toggle:function (item,index) {
		this.$nextTick(function () {
			this.items.forEach(function (item) {
				// 设置对象的属性
				Vue.set(item,'isActive',false);
			})
			Vue.set(item,'isActive',true);
		})
	  }
  }
}
</script>

<style lang='scss'>
	@import '../../static/frozenui/css/frozen.css';
  $color:#E4B401;

a{color:#000;}
.icon-lists [class^="ui-icon-"]{
  color:#000;
  line-height:32px;
}
.icon-lists .actived [class^="ui-icon-"]{
  color:#C9A521;
}
.foot-bg{
  li.actived{
    a{
      color:#C9A521;
    }
  }
}
.foot-text{
  font-size:10px;
}
</style>
