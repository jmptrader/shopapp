<template>
	<header class="ui-header ui-header-stable ui-border-b no-padding" v-show="isShowHeader">
		<div v-show='isShowSearch'>
			<app-search></app-search>
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
    }
  },
  computed: {
      isShowSearch: function () {
        return this.$store.state.comm.indexConf.isSearch
      },
      title: function () {
        return this.$store.state.comm.indexConf.title
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


