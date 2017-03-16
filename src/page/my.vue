<template>
  <div class='app-padding'>
    <app-menu-list :pathType="typeVal"></app-menu-list>
  </div>
</template>
<script>
import router from '../router'
import MenuLsit from '@/components/menulist'
export default {
  data () {
    return {
      avatar:'',
      uname:'',
      typeVal:''
    }
  },
  created: function () {
      this.$store.commit('changeIndexConf', {
        isFooter: false,
        isHeader: true,
        isSearch: false,
        title: '我的'
      })
      
      let pathType = this.$route.params.types;
      
      if(pathType  === 'publish'){
        this.typeVal = 'publish';
        this.$store.commit('changeIndexConf', {
          title: '我的发布'
        })
      }else if(pathType === "collect"){
        this.typeVal = 'collect';
        this.$store.commit('changeIndexConf', {
          title: '我的收藏'
        })
      }
      
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

