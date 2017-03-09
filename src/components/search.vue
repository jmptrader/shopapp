<template>
<div class="ui-searchbar-wrap ui-border-b">
    <div class="ui-searchbar ui-border-radius">
        <i class="ui-icon-search"></i>
        <div class="ui-searchbar-text">搜索</div>
        <div class="ui-searchbar-input"><input value="" type="tel" placeholder="搜索" autocapitalize="off"></div>
        <i class="ui-icon-close"></i>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style>
  @import "../../static/frozenui/css/frozen.css";
  .ui-searchbar-wrap{
    background-color: transparent;
  }
</style>

