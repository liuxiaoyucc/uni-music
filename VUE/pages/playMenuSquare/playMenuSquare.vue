<template>
	<view class="content">
		<view class="status_bar"><!-- 状态栏 --></view>
		<view class="top-status-bar"><topStatusBar leftText="歌单广场"></topStatusBar></view>

		<view class="swiper harf-px-top flex">swiper</view>
		<view class="card-box"></view>
	</view>
</template>

<script>
import topStatusBar from '../../components/topStatusBar/topStatusBar.vue';
export default {
	components: { topStatusBar },
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
.top-status-bar {
	height: 70rpx;
}
.container {
	margin: 0 30rpx;
}
</style>
