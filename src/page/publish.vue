<template>
	<div class="app-publish">
		<div class="ui-form ui-border-t">
		    <form >
		        
		        <div class="ui-form-item ui-form-item-textarea ui-border-b">
		            <label>
		                发表文字
		            </label>
		            <textarea placeholder="input text"></textarea>
		        </div>
		    </form>

		    <div class="ui-btn-wrap">
			    <button class="ui-btn-lg" @click="publish">
			        确定
			    </button>
			</div>
		</div>
	</div>
</template>
<script>
import router from '../router'
export default {
  data () {
    return {
      avatar:'',
      uname:'',
    }
  },
  created: function () {
      this.$store.commit('changeIndexConf', {
        isFooter: true,
        isHeader: true,
        isSearch: false,
        title: '发布'
      })
  },
  methods:{
  	publish:function () {
  		
  	}
  }
}
</script>
<style lang='scss'>
.app-publish{
	margin-top:45px;
}
</style>
