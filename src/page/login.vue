<template>
<div class="ui-form ui-border-t app-top-margin app-padding">
	  <section class="ui-container ui-center">
      <p class='app-color-main'>欢迎登陆</p>        
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
    <div class="ui-row">
      <div class="ui-col ui-col-50">
        <div class="ui-flex ui-flex-pack-start ui-flex-align-center">
          <router-link class="app-color-dark app-size-12" 
          to="/index">先逛逛</router-link>
        </div>
      </div>
      <div class="ui-col ui-col-50">
        <div class="ui-flex ui-flex-pack-end ui-flex-align-center">
          <router-link class="app-color-dark app-size-12" 
          to="/regist">注册</router-link>
        </div>
      </div>
    </div>
    <!-- 登录成功提示 -->
    <!-- <app-tips></app-tips> -->
</div>
</template>

<script>
import axios from 'axios'
import Tips from '@/components/tips'
export default {
  data () {
    return {
      name:'',
      pwd:'',
      msg:'',
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
            // 跳转
            console.log( "欢迎" + localStorage.getItem('result'));
            this.$store.commit('isLogin', retObj.data);
            this.$router.push({ path: 'user'})
          }else{
          }
       }
      })
      .catch(function (error) {
        // 返回报错信息
        console.log(error);
      })
    }
  },
  components:{
    appTips:Tips,
  }
}
</script>

