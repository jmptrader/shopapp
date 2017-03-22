<template>
	<div class="ui-loading-block show">
	    <div class="ui-loading-cnt">
	    	<i :class="[
	    	{'ui-loading-bright':isloading,
	    	'ui-icon-success':isok,
	    	'ui-icon-warn':iswarning,
	    	},'app-color-white']"></i>
	        <p>{{text}}</p>
	    </div>
	</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed:{
    text:function () {
      return this.$store.state.comm.dialog.text
    },
    type:function () {
      return this.$store.state.comm.dialog.type
    },
    isloading:function () {
      return this.type === 'loading'
    },
    isok:function () {
      return this.type === 'ok';
    },
    iswarning:function () {
      return this.type === 'warning'
    }
  }
}
</script>

