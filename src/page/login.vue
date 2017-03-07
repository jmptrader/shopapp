<template>
<section class="ui-container ui-center">
<div class="ui-form ui-border-t">
	   <section class="ui-placehold-img">
        <span style="background-image:url(../../static/img/logo.png)"></span>
    </section>
    <form action="#">
        <div class="ui-form-item ui-form-item-show  ui-border-b">
            <label for="#">账号</label>
            <input type="text" value="" placeholder="输入账号" v-model="name">
        </div>
        <div class="ui-form-item ui-form-item-show ui-border-b">
            <label for="#">密码</label>
            <input type="text" value=""  placeholder="输入密码" v-model="password">
        </div>
    </form>
    <div class="ui-btn-wrap">
    	<button class="ui-btn-lg ui-btn-login" @click="go2login()">
        登录
      </button>
    </div>
    <div class="ui-row">
      <div class="ui-col ui-col-50">
        <div class="ui-flex ui-flex-pack-start ui-flex-align-center">
          <router-link class="go2register" 
          to="/index">先逛逛</router-link>
        </div>
      </div>
      <div class="ui-col ui-col-50">
        <div class="ui-flex ui-flex-pack-end ui-flex-align-center">
          <router-link class="go2register" 
          to="/regist">注册</router-link>
        </div>
      </div>
    </div>
    <p>{{totalMoney}}</p>

</div>
</section>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return{
      name:'',
      password:'',
      totalMoney:0,
    }
  },
  created: function () {
      this.$store.commit('changeIndexConf', {
        isFooter: false,
        isSearch: false,
        isBack: false,
        isShare: false,
        isHeader:false,
        title: '登录'
      })
  },
  methods:{
    go2login:function () {
      let url = this.$store.state.comm.apiUrl + 'islogin.json';
      let params = 'username=' + this.name + '&password=' + this.password;
      axios.get(url)
      .then((retObj)=>{
       if(retObj.status == 200){
          
         this.totalMoney = retObj.data.result.username;
       }
      })
      .catch(function (error) {
        alert('error');
      })
    }
  }
}
</script>
<style lang='scss'>
$maincolor:#FED000;
$fontcolor:#333;
  body{
    background: white;
  }
	.ui-btn-login{
		background: $maincolor;
		color: $fontcolor;
	}
  .go2register{
    color:$fontcolor;
    font-size: 12px; 
  }
</style>
