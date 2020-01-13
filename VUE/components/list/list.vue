<template>
	<view class="list flex-bet">
		<view class="left font28 flex main-color">
			<i class="iconfont" :class="list.icon"></i>
			<text>{{ list.name }}</text>
		</view>
		<view class="right font22">
			<text>{{ list.newText }}</text>
			<text v-if="list.name == '青少年模式'">{{ list.value }}</text>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		list: {}
	}
};
</script>

<style scoped>
.list .right text {
	color: #848484;
}

.list .left .iconfont {
	margin-right: 20rpx;
	font-size: 40rpx;
}
</style>
