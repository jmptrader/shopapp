<template>
	<footer class="ui-footer ui-footer-stable ui-border-t foot-bg" v-show="isShowFooter">
	    <ul class="ui-tiled icon-lists" >
	        <li v-bind:class="{actived:item.isActive}" 
	        @click="toggle(item,$index)"
	        v-for="(item,$index) in items">
	        	<router-link :to=item.toRouter>
		        	<i :class="item.iconClass"></i>
		        	<span class="foot-text" v-text='item.iconName'></span>
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
    			iconClass:'ui-icon-add',
    			iconName:'发布',
    			toRouter:'/publish',
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
      // 数据修改后，立刻生效
  		this.$nextTick(function () {
  			this.items.forEach(function (item) {
  				Vue.set(item,'isActive',false);
  			})
  			Vue.set(item,'isActive',true);
  		})
	  }
  }
}
</script>

