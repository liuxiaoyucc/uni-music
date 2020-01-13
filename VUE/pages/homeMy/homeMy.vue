<template>
	<view class="content">
		<!-- 私聊推荐 -->
		<view class="home-slider"><home-slider></home-slider></view>
		<!-- 本地列表 -->
		<view class="locality-list harf-px-top"><locality-list></locality-list></view>
		<!-- 创建-收藏列表 -->
		<view class="set-and-collect "><set-and-collect></set-and-collect></view>
	</view>
</template>

<script>
import homeSlider from './components/homeSlider.vue';
import localityList from './components/localityList.vue';
import setAndCollect from './components/setAndCollect.vue';
export default {
	components: { homeSlider, localityList, setAndCollect },
	data() {
		return {};
	},
	methods: {}
};
</script>

<style scoped>
.locality-list {
	border-bottom: 15rpx solid #f4f4f4;
}

.set-and-collect {
	margin: 0 35rpx;
}
</style>
