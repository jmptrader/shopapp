<template>
	<header class="ui-header ui-header-stable ui-border-b app-no-padding">
		<div v-show='isShowSearch'>
			<app-search></app-search>
		</div>
    <div v-show='!isShowSearch'>
      <div class="ui-row app-bg-main">
        <div class="ui-col ui-col-10">
          <i class="ui-icon-prev app-color-dark" 
            onclick="history.back()"
            ></i>
        </div>
        <div class="ui-col ui-col-80 ">
          <p class="ui-flex ui-flex-pack-center app-color-dark">
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


