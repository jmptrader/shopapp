<template>
<div class="ui-searchbar-wrap ui-border-b " :class={focus:isFocus}>
    <div class="ui-searchbar ui-border-radius" @click="focus">
        <i class="ui-icon-search"></i>
        <div class="ui-searchbar-text">搜索</div>
        <div class="ui-searchbar-input"><input value="" type="tel" placeholder="搜索" autocapitalize="off" v-model='inputVal'></div>
        <i class="ui-icon-close" @click='clearBoth'></i>
    </div>
    <button class="ui-searchbar-cancel" @click="unfocus"> 取消</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      isFocus:false,
      inputVal:'',
    }
  },
  methods:{
      focus:function () {
        this.isFocus = true;
      },
      unfocus:function () {
        this.isFocus = false;
      },
      clearBoth:function () {
        this.inputVal = '';
      }
  }
}
</script>


