<template>
	<view class="content">
		<view class="status_bar"><!-- 状态栏 --></view>
		<view class="top container flex">
			<view class="icon">icon</view>
			<view class="name">歌单广场</view>
		</view>

		<view class="row-nav container">row-nav</view>
		<view class="swiper harf-px-top flex">swiper</view>
		<view class="card-box"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	mounted() {
		this.init();
	},
	methods: {
		async init() {}
	}
};
</script>

<style scoped>
.container {
	margin: 0 30rpx;
}
</style>
