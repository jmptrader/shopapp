<template>
	<div class="ui-poptips ui-poptips-success" v-show="tipshow">
        <div class="ui-poptips-cnt"><i></i>{{ msg }}</div>
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

