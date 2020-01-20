<template>
	<view class="top-status-bar">
		<view class="container flex-bet">
			<view class="left flex">
				<i class="iconfont icon-back" @click="clickLeft"></i>
				<view class="left-text">{{ leftText }}</view>
			</view>
			<slot />
			<view class="right flex">
				<view class="left-text">{{ rightText }}</view>
				<i class="iconfont" :class="rightIcon" @click="clickRight"></i>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		leftText: {
			type: String,
			default: ''
		},
		rightText: {
			type: String,
			default: ''
		},
		rightIcon: {
			type: String,
			default: ''
		}
	},
	methods: {
		clickLeft() {
			uni.navigateBack({
				delta: 1
			});
		},
		clickRight() {
			this.$emit('right');
		}
	}
};
</script>

<style scoped>
.top-status-bar {
	height: 100%;
}
.container {
	margin: 0 30rpx;
	height: 100%;
}

.left .iconfont {
	margin-right: 30rpx;
}
</style>
