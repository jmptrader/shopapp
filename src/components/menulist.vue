<template>
<ul class="ui-list ui-list-link ui-border-tb">
    <li class="ui-border-t" @click='go2menu'>
        <div class="ui-list-img">
            <span style="background-image:url(http://placeholder.qiniudn.com/200x136)"></span>
        </div>
        <div class="ui-list-info">
            <h4 class="ui-nowrap">这是标题，加ui-nowrap可以超出长度截断</h4>
            <p class="ui-nowrap">这是内容，加ui-nowrap可以超出长度截断</p>
        </div>
    </li>
</ul>
</template>
<script>
export default{
	data(){
		return {

		}
	},
    methods: {
        go2menu: function () {
            this.$router.push('Menu');
        }
    }
}
</script>