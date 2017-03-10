<template>
	<header class="ui-header ui-header-stable ui-border-b" v-show="isShowHeader">
		<div v-show='isShowSearch'>
			<div class="ui-row">
				<div class="ui-col ui-col-20">
          <div class="app-center">
					<img src="../assets/logo.png" 
          alt="" 
          class="logo"
          v-show="isLogo">
          <i class="ui-icon-prev" 
            onclick="history.back()"
            v-show="!isLogo"
            ></i>
            </div>
				</div>
				<div class="ui-col ui-col-80">
					<app-search></app-search>
				</div>
			</div>
		</div>

    <div v-show='!isShowSearch'>
      <div class="ui-row">
        <div class="ui-col ui-col-10">
          <i class="ui-icon-prev" 
            onclick="history.back()"
            ></i>
        </div>
        <div class="ui-col ui-col-80 ">
          <p class="ui-flex ui-flex-pack-center">
          {{title}}
          </p>
        </div>
      </div>
    </div>

	</header>
</template>

<script>
import Search from '@/components/search'
export default {
  data () {
    return {
      logourl:'../assets/logo.png'
    }
  },
  computed: {
      isShowSearch: function () {
        return this.$store.state.comm.indexConf.isSearch
      },
      title: function () {
        return this.$store.state.comm.indexConf.title
      },
      isLogo: function () {
        return this.$store.state.comm.indexConf.isLogo
      },
      
      isShowHeader:function () {
        return this.$store.state.comm.indexConf.isHeader
      }
    },
    methods: {
      goBack: function () {
        history.go(-1)
      },
    },
    components:{
	   appSearch:Search,
	}
}
</script>
<style>
@import "../../static/frozenui/css/frozen.css";
.ui-header{
	background: #FED000;
}
.logo{
  display: inline-block;
  height: 40px;
}
.app-center{
  width: 100%;
  text-align: center;
}
</style>

