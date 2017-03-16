<template>
  <div class='app-padding'>
    <app-menu-list></app-menu-list>
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
      showrite:true,
    }
  },
  created: function () {
      this.$store.commit('changeIndexConf', {
        isFooter: true,
        isHeader: true,
        isSearch: false,
        title: '我的'
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

