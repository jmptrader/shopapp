<template>
<div class="app-padding">
	  <section class="ui-container ui-center">
      <img src="../assets/logo.png" alt=""><p class='app-font-middle app-color-dark'>痴鸭</p>   
    </section>
    <div class="ui-form-item ui-form-item-show  ui-border-b">
        <label for="#">账号</label>
        <input type="text" value="" placeholder="输入账号" v-model="name">
    </div>
    <div class="ui-form-item ui-form-item-show ui-border-b">
        <label for="#">密码</label>
        <input type="text" value=""  placeholder="输入密码" v-model="pwd">
    </div>
    <div class="ui-btn-wrap ">
    	<button class="ui-btn-lg ui-btn-login app-color-dark app-bg-main" @click="go2login()">
        登录
      </button>
    </div>
    <div class="ui-flex ui-flex-pack-end">
      <router-link class="app-color-dark app-font-big" 
          to="/index">先逛逛</router-link>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      name:'',
      pwd:'',
      showTip:false,
      msgInfo:'',
    }
  },
  created: function () {
      this.$store.commit('changeIndexConf', {
        isFooter: false,
        isHeader:false,
        title: '登录'
      })

  },
  methods:{
    go2login:function () {
      this.$store.commit('isLoading',true);
      let url = this.$store.state.comm.apiUrl + 'data.json';
      axios.get(url,{
        params:{
          uname:this.name,
          upwd:this.pwd
        }
      })
      .then((retObj)=>{
        
       if(retObj.status == 200){
          if(retObj.data.status === 1){
            this.$store.commit('isLoading',false);
            this.$store.commit('isLogin', retObj.data.result.user);

            // TODO:从发布状态进入，登录后怎样返回发布页
            this.$router.push({ path: 'user'})
          }else{
            alert(retObj.data.message);
          }
       }
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  },
  components:{
  }
}
</script>

