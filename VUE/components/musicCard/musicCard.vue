<!-- 音乐卡片 -->
<template>
	<view class="content">
		<image :src="info.picUrl || info.album.blurPicUrl" mode=""></image>
		<view class="text font26 " :class="type ? 'text-one-line' : 'text-two-line'">
			{{ info.name }}
			<view class="be-to text-one-line" v-if="type">{{ info.company }}</view>
		</view>
		<view class="tag font22 flex" v-if="type == 0">
			<i class="iconfont font22 icon-love"></i>
			<text>{{ playCount }}</text>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		info: {},
		// 控制文字显示行数  内容以及播放icon
		type: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {};
	},

	computed: {
		playCount() {
			let num = this.$props.info.playCount;
			if (num <= 9999) {
				return num;
			}
			if (num <= 99999999) {
				let a = (num / 10000).toFixed();
				return a + '万';
			}
			if (num > 99999999) {
				let a = (num / 100000000).toFixed(1);
				return a + '亿';
			}
		}
	}
};
</script>

<style scoped>
.content {
	width: 100%;
	margin-bottom: 40rpx;
	position: relative;
}

.content image {
	width: 100%;
	height: 220rpx;
	border-radius: 10rpx;
}

.content .text {
	height: 70rpx;
}
.content .text .be-to {
	opacity: 0.5;
}

.content .tag {
	position: absolute;
	top: 4rpx;
	right: 10rpx;
	color: #ffffff;
}

.tag .iconfont {
	margin-right: 4rpx;
}
</style>
