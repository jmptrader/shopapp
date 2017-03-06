<template>
	<footer class="ui-footer ui-footer-stable ui-border-t foot-bg">
	    <ul class="ui-tiled icon-lists" >
	        <li v-bind:class="{actived:isActive}" 
	        @click="toggle()"
	        v-for="item in items">
	        	<router-link :to=item.toRouter>
		        	<i :class="item.iconClass"></i>
		        	<span class="foot-text">{{ item.iconName }}</span>
	        	</router-link>
        	</li>
	    </ul>
	</footer>
</template>

<script>
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
  methods:{
	  toggle:function (isActive) {

	  	// this.isActive = !this.isActive;
	  }
  }
}
</script>

<style lang='scss'>
	@import '../../static/frozenui/css/frozen.css';
	@import '../../static/css/foot.scss';
</style>
