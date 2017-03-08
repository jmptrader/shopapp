<template>
<section class="ui-container ui-center">
<div class="ui-form ui-border-t">
	   <section class="ui-placehold-img">
        <span style="background-image:url(../../static/img/logo.png)"></span>
    </section>
    <div class="ui-form-item ui-form-item-show  ui-border-b">
        <label for="#">账号</label>
        <input type="text" value="" placeholder="输入账号" v-model="name">
    </div>
    <div class="ui-form-item ui-form-item-show ui-border-b">
        <label for="#">密码</label>
        <input type="text" value=""  placeholder="输入密码" v-model="pwd">
    </div>
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
    <!-- 登录成功提示 -->
    <div class="ui-poptips ui-poptips-success" v-show="tipshow">
        <div class="ui-poptips-cnt"><i></i>{{ msg }}</div>
    </div>
</div>
</section>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
  data () {
    return {
      name:'',
      pwd:'',
      msg:'',
      tipshow:false
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
      // 请求地址
      let url = this.$store.state.comm.apiUrl + 'islogin.json';
      axios.get(url,{
        params:{
          uname:this.name,
          upwd:this.pwd
        }
      })
      .then((retObj)=>{
        // 返回值成功
       if(retObj.status == 200){
          if(retObj.data.status === 1){
            // 提示成功
            this.tipshow = true;
            this.msg = retObj.data.message;
            // 跳转
            this.$store.commit('isLogin', retObj.data);
            router.push({ path: 'user/'+retObj.data.result.username })
          }else{
            // 提示失败
            this.tipshow = true;
            this.msg = retObj.data.message;
          }
       }
      })
      .catch(function (error) {
        // 返回报错信息
        console.log(error);
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
