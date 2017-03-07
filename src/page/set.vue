<template>
  <div class="app-set">
  <ul class="ui-list ui-list-text ui-list-link ui-border-tb">
    <li class="ui-border-t">
        <h4 class="ui-nowrap">退出当前账号</h4>
        <div class="ui-txt-info">ever</div>
    </li>
</ul>
</div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  created: function () {
      this.$store.commit('changeIndexConf', {
        isFooter: true,
        isSearch: false,
        isBack: true,
        isShare: false,
        isHeader:true,
        isSet:false,
        title: '设置'
      })
  }
}
</script>
<style lang='scss'>
$maincolor:#FED000;
$fontcolor:#333;
.app-set{
  padding-top: 50px;
}
</style>
