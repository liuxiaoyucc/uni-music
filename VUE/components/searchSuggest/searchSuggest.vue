<!-- 搜索建议列表 -->
<template>
	<view class="suggest font28" :style="{ right: right + 'rpx' }">
		<view class="default flex container list">搜索{{ searchKeyWord }}"</view>
		<view class="list  harf-px-top container flex  text-one-line" v-for="(list, index) in lists" :key="index">
			<i class="iconfont hd-left-icon icon-love"></i>
			<view class="text">{{ list.keyword }}</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		// 推荐列表
		lists: {
			type: Array
		},
		// 关键词
		searchKeyWord: '',
		// position
		right: {
			type: Number,
			default: 30
		}
	}
};
</script>

<style scoped>
.container {
	margin: 0 20rpx;
	height: 100%;
}
.suggest {
	position: fixed;
	z-index: 99;
	background: #ffffff;
	top: calc(95rpx + var(--status-bar-height));
	left: 30rpx;
	box-shadow: 0rpx -2rpx 10rpx 2rpx #dedede, 0 2rpx 10rpx 2rpx #dedede, -2rpx 0rpx 10rpx 2rpx #dedede, 0rpx 2rpx 10rpx 2rpx #dedede;
}

.suggest .list.default {
	color: #23a9f2;
}

.suggest .list {
	height: 100rpx;
	color: #808080;
}

.suggest .list .text {
	margin-left: 10rpx;
}
</style>
