<template>
<div>
	<div class="ui-poptips ui-poptips-success">
	    <div class="ui-poptips-cnt"><i></i>{{message}}</div>
	</div>
	<!-- <div class="ui-poptips ui-poptips-info">
	    <div class="ui-poptips-cnt"><i></i>{{msg}}</div>
	</div>
	<div class="ui-poptips ui-poptips-warn">
	    <div class="ui-poptips-cnt"><i></i>{{msg}}</div>
	</div> -->
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props:[
  	'message',
  ],
}
</script>

