<template>
  <div class=''>
    <div class="app-relative app-bottom-margin  app-bbox app-padding app-bg-white">
      <textarea name="" id="" class="app-textarea app-color-dark " placeholder="输入文字" v-model='message' ></textarea>
      <span class="app-absolute app-r-b app-color-main">{{ message.length }}／100</span>
    </div>
    <div class="app-upload-img app-ccenter app-bottom-margin">
      <p>点击上传图片</p>
    </div>
    <div class="app-padding">
      <button class="ui-btn-lg app-bg-main app-color-dark  app-top-padding" @click="publish">
          确定
      </button>
    </div>
  </div>
</template>
<script>
import router from '../router'
import MenuLsit from '@/components/menulist'
export default {
  data () {
    return {
      message:''
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
  },
  components:{
    appMenuList: MenuLsit,
  }
}
</script>

