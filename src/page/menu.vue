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
    '$route' (to, from) {
      
    }
  },
  methods: {
    fetchData () {
      let url = this.$store.state.comm.apiUrl + 'data.json';
      let menuId = this.$route.params.id;
      axios.get(url).then((retObj)=>{
       if(retObj.status == 200){
          if(retObj.data.status === 1){
            this.menuPic = retObj.data.result.menu[menuId].menuImg;
            this.menuText = retObj.data.result.menu[menuId].menuText;
            this.islike = retObj.data.result.menu[menuId].isCollect;
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
      let userMsg = localStorage.getItem('userMsg');
      if(!userMsg){
        alert('未登录，请登录~')
        // this.$router.push('login')
      }else{
        this.islike = !this.islike;
      }
    }
  }
}
</script>
