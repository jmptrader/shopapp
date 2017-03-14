<template>
</template>
<script>
import axios from 'axios'
import router from '../router'
export default {
  data () {
    return {
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
  }
}
</script>

