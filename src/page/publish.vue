<template>
  <div class='app-padding'>
    <div class="ui-form-item ui-form-item-textarea ui-border-b">
        <label>
            编辑文字
        </label>
        <textarea placeholder="input text"></textarea>
    </div>
    <div class="app-upload-img">
      <div class="app-upload-btn">
        <i class="ui-icon-thumb"></i>
      </div>
    </div>
    <button class="ui-btn-lg app-bg-main app-color-dark " @click="publish">
        确定
    </button>
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

