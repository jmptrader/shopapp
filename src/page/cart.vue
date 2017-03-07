<template>
<div class="app-cart">
  <ul class="ui-list ui-list-one  ui-border-tb">
      <li class="ui-border-t">
          <div class="ui-list-thumb">
              <span style="background-image:url(http://placeholder.qiniudn.com/100x100)"></span>
          </div>
          <div class="ui-list-info">
              <h4 class="ui-nowrap">数量 X 1 </h4>
              <div class="ui-txt-info"><i class="ui-icon-delete"></i></div>
          </div>
      </li>
      <div class="app-goods-name">
        <h6 class="ui-nowrap">湘菜是中国特色菜系之一,美食杰为您提供最新的图文湘菜菜谱大全--好学易做的湘菜菜谱,家常湘菜的做法详解,湘菜菜谱图片教学,精选湘菜代表菜,湘菜特色菜谱,让您不仅.</h6>
      </div>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'cart'
    }
  },
  created:function () {
  	// head的修改
	this.$store.commit('changeIndexConf', {
		isFooter: true,
		isSearch: false,
		isBack: true,
    isSet:true,
		title: '购物车'
	})
  }
}
</script>
<style lang="scss">
  .app-cart{
    padding-top: 45px;
  }
  .app-goods-name{
    margin:0 10px;
    padding:5px 0px;
    border-bottom:1px solid #ddd;
  }
</style>
