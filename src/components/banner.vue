<template>
<swiper v-ref:swiper
        direction="horizontal"
        :mousewheel-control="true"
        :performance-mode="false"
        :pagination-visible="true"
        :pagination-clickable="true"
        :loop="true"
        @slide-change-start="onSlideChangeStart"
        @slide-change-end="onSlideChangeEnd">
    <div v-for='item in banner'><img class='app-img' :src="item.src" alt=""></div>
</swiper>
</template>
<script>
import Swiper from 'vue-swiper'
export default{
	data(){
		return {
		}
	},
	props:['banner'],
	components:{
		Swiper
	},
	methods:{
		onSlideChangeStart (currentPage) {
            // console.log('onSlideChangeStart', currentPage);
        },
        onSlideChangeEnd (currentPage) {
            // console.log('onSlideChangeEnd', currentPage);
        }
	}
}
</script>