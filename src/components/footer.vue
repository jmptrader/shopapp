<template>
	<footer class="ui-footer ui-footer-stable ui-border-t app-bg-dark" >
	    <ul class="ui-tiled icon-lists" >
	        <li v-for="(item,$index) in items">
	        	<router-link
            active-class='current'
            :to=item.toRouter>
		        	<i :class="[item.iconClass,'app-line20','app-color-white','app-top-margin']" ></i>
		        	<span class="app-font-middle app-color-white" v-text='item.iconName'></span>
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
    			iconClass:'ui-icon-add-group',
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
  },
  methods:{
  }
}
</script>

