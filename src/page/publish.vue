<template>
	<p>pulish</p>
</template>
<script>
export default{
	data(){
		return{

		}
	},
	created :function () {
		this.$store.comm('changeIndexConf',{
			isFooter: true,
	        isHeader: true,
	        isSearch: true,
	        title: '发布'
		})
	}
}
</script>
<style>
</style>