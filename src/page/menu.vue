<template>
<div>
  <!-- list -->
  <menu-list v-show='showlist' ></menu-list>
  <!-- detail -->
  <menu-detail v-show='!showlist'></menu-detail>
</div>
</template>
<script>
import list from '@/components/menulist'
import detail from '@/components/menudetail'
export default {
  data () {
    return {
      showlist: false,
    }
  },
  created: function () {
    this.$store.commit('changeIndexConf',{
        isFooter: false,
        isHeader: true,
        isSearch: false,
        title: '菜谱详情'
    })
  },
  methods:{
  },
  components:{
    menuList: list,
    menuDetail: detail
  }
}
</script>

