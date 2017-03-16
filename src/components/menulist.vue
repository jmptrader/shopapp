<template>
<ul class="ui-list ui-list-link ui-border-tb">
    <li class="ui-border-t" v-for="(item,index) in menus" @click='go2menu(index)'>
      <div class="ui-list-img app-o-h">
          <img class="app-img" :src="apiUrl + item.menuImg" alt="">
      </div>
      <div class="ui-list-info">
          <p class="ui-nowrap">{{item.menuText}} </p>
      </div>
    </li>
</ul>
</template>
<script>
import axios from 'axios'
export default{
	data(){
		return {
      menus:[],
      apiUrl: this.$store.state.comm.apiUrl,
		}
	},
  created(){
    this.fetchData()
  },
  watch:{
  },
  props:['pathType'],
  methods: {
    fetchData () {
      let url = this.$store.state.comm.apiUrl + 'data.json';
      axios.get(url).then((retObj)=>{
       if(retObj.status == 200){
          if(retObj.data.status === 1){
            if(this.pathType === 'collect'){
              // 我的收藏
              this.menus = JSON.parse(localStorage.getItem("userMsg")).collect;
            }else if(this.pathType === 'publish'){
              // 我的发布
              this.menus = JSON.parse(localStorage.getItem("userMsg")).publish;
            }else{
              // 全部列表
              this.menus = retObj.data.result.menu;
            }
            this.$store.commit('menuList', retObj.data.result.menu);
          }else{
            console.log(retObj.data.message);
          }
       }
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    go2menu(index){
      this.$router.push({ path: '/menu/'+index})
    }
  }
}
</script>