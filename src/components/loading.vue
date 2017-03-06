<template>
	<div class="ui-loading-block show">
	    <div class="ui-loading-cnt">
	        <i class="ui-loading-bright"></i>
	        <p v-text="msg"></p>
	    </div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      msg: '马上就来'
    }
  }
}
</script>

