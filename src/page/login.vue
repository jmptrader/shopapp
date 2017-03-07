<template>
<section class="ui-container ui-center">
<div class="ui-form ui-border-t">
	   <section class="ui-placehold-img">
        <span style="background-image:url(../../static/img/logo.png)"></span>
    </section>
    <form action="#">
        <div class="ui-form-item ui-form-item-show  ui-border-b">
            <label for="#">账号</label>
            <input type="text" value="" placeholder="输入账号" v-model="loginModel.username">
        </div>
        <div class="ui-form-item ui-form-item-show ui-border-b">
            <label for="#">密码</label>
            <input type="text" value=""  placeholder="输入密码" v-model="loginModel.password">
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
    

</div>
</section>
</template>

<script>

export default {
  data () {
    return{
      loginUrl:this.$store.state.comm.apiUrl + 'static/data.json',
      loginModel: {
        username:'',
        password:'',
      },
      demodata:'',
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
      this.$http.get(this.loginUrl)
        .then((res) => {
          // var body = response.json()
          // this.msg = '登录成功！'
          // this.userName = body.userName
          
          // sessionStorage.setItem('accessToken', body.access_token)
          // sessionStorage.setItem('userName', body.userName)
          this.demodata = res.body;
          alert(this.demodata);
        },response =>{
          alert('no');
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
