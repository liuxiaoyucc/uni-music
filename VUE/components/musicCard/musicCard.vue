<!-- 音乐卡片 -->
<template>
	<view class="content">
		<image :src="info.src" mode=""></image>
		<view class="text font28">{{ info.text }}</view>
		<view class="tag font24 flex">
			<i class="iconfont font24 icon-love"></i>
			<text>{{ num1 }}</text>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		info: {}
	},
	data() {
		return {
			num: 10000
		};
	},

	computed: {
		num1() {
			let num = this.num;
			if (num <= 9999) {
				return num;
			}
			if (num <= 99999999) {
				let a = (num / 10000).toFixed();
				return a + '万';
			}
		}
	}
};
</script>

<style scoped>
.content {
	width: 100%;
	margin-bottom: 20rpx;
	position: relative;
}

.content image {
	width: 100%;
	height: 220rpx;
	border-radius: 10rpx;
}

.content .text {
	width: 100%;
	display: -webkit-box;
	overflow: hidden;
	text-overflow: ellipsis;
	word-wrap: break-word;
	white-space: normal;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

.content .tag {
	position: absolute;
	top: 10rpx;
	right: 20rpx;
	color: #ffffff;
}

.tag .iconfont {
	margin-right: 10rpx;
}
</style>
