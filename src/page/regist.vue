<template>
<section class="ui-container ui-center">
	<div class="ui-row">
		<section class="ui-placehold-img">
		    <span style="background-image:url(../../static/img/logo.png)"></span>
		</section>
		<h6 class='main-color'>欢迎亲</h6>
		<div class="ui-form ui-border-t">
		    <form action="#">
		        <div class="ui-form-item ui-form-item-show ui-border-b">
		            <label for="#">登录名</label>
		            <input type="text" placeholder="自定义登录名">
		        </div>
		        <div class="ui-form-item ui-form-item-show ui-border-b">
		            <label for="#">设置密码</label>
		            <input type="text" placeholder="至少6位">
		        </div>
		        <div class="ui-form-item ui-form-item-show ui-border-b">
		            <label for="#">确定密码</label>
		            <input type="text" placeholder="保持两次密码一致">
		        </div>
		    </form>
		    <!-- 注册 -->
		    <div class="ui-btn-wrap">
		    	<button class="ui-btn-lg ui-btn-login" @click="go2login()">
		        注册
		      </button>
		    </div>
		    <!-- 回首页 -->
		    <div class="ui-col ui-col-50">
		        <div class="ui-flex ui-flex-pack-start ui-flex-align-center">
		          <router-link class="go2register" 
		          to="/index">先逛逛</router-link>
		        </div>
		      </div>
		      <div class="ui-col ui-col-50">
		        <div class="ui-flex ui-flex-pack-end ui-flex-align-center">
		          <router-link class="go2register" 
		          to="/regist">去登陆</router-link>
		        </div>
		      </div>
		</div>
	</div>
</section>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created:function () {
  	this.$store.commit('changeIndexConf',{
  		isFooter: false,
        isSearch: false,
        isBack: true,
        isShare: false,
        isHeader:false,
        title: '注册'
  	})
  }
}
</script>

