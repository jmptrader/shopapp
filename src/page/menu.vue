<template>
<div class="app-padding app-bg-dark">
  <img class="app-img" :src="apiUrl + menuPic" alt="">
  <p class="app-color-main app-font-middle app-padding">{{menuText}} </p>
  <div class="ui-flex ui-flex-pack-end app-color-main">
    <i :class="[{'ui-icon-liked':islike ,'ui-icon-like':!islike},'app-color-main']"
    @click='likeit'></i>
  </div>
</div>
</template>
<script>
import axios from 'axios'
export default{
  data(){
    return {
      menuPic:'',
      menuText:'',
      apiUrl: this.$store.state.comm.apiUrl,
      islike: true
    }
  },
  created(){
    this.$store.commit('changeIndexConf', {
      isFooter: false,
      isHeader: true,
      isSearch: false,
      title: '详情'
    })
    this.fetchData()
  },
  watch:{

  },
  methods: {
    fetchData () {
      let url = this.$store.state.comm.apiUrl + 'data.json';
      axios.get(url).then((retObj)=>{
       if(retObj.status == 200){
          if(retObj.data.status === 1){
            this.menuPic = retObj.data.result.menu[0].menuImg;
            this.menuText = retObj.data.result.menu[0].menuText;
            // console.log(this.menus);
            this.$store.commit('menuList', retObj.data.result.menu);
          }else{
            alert(retObj.data.message);
          }
       }
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    likeit(){
      this.islike = !this.islike;
    }
  }
}
</script>