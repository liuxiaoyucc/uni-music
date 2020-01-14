<template>
	<view class="content">
		<view class="container">
			<!-- 视频 -->
			<view class="video" v-if="type == 'video'">
				<view class="thumb flex-center">
					<image src="https://dummyimage.com/1000x500?text=A" mode=""></image>

					<i class="iconfont icon-love play-icon "></i>
					<view class="play-num flex">
						<i class="iconfont icon-love"></i>
						34万
					</view>
					<view class="play-time flex">
						<i class="iconfont icon-love"></i>
						09:20
					</view>
				</view>
				<view class="info flex-bet">
					<view class="text text-one-line font40 fontb">哈哈哈哈哈hahahahahahaahhahahhahhaha哈</view>
					<view class="avatar"><image src="https://dummyimage.com/1000x500?text=A" mode=""></image></view>
				</view>
			</view>
			<view class="text" v-if="type == 'text'">
				<view class="title font28 text-color3">年度热门</view>
				<view class="box">
					<view class="box-text">
						<view class="">123123</view>
						<view class="">123123</view>
						<view class="">123123</view>
					</view>
					<view class="info flex-bet harf-px-top">
						<view class="text text-one-line">hahahahahahaahhahahhahhaha</view>
						<view class="avatar"><image src="https://dummyimage.com/1000x500?text=A" mode=""></image></view>
					</view>
				</view>
			</view>

			<!-- 功能区 -->
			<view class="action flex-bet">
				<view class="left flex">
					<!-- 点赞 -->
					<view class="praise flex">
						<i class="iconfont icon-clock"></i>
						123123
					</view>
					<!-- 评论 -->
					<view class="comment flex">
						<i class="iconfont icon-clock"></i>
						1232
					</view>
				</view>
				{{ dialogShow }}
				<i class="iconfont icon-clock" @click="dialogShow = !dialogShow"></i>
			</view>
			<!-- 弹窗 -->
			<view class="dialog" v-if="dialogShow">
				<view class="item flex">不感兴趣</view>
				<view class="item flex" v-if="type == 'text'">下一首播放</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		type1: Number,
		default: 1
	},
	data() {
		return {
			type: 'video',
			dialogShow: false
		};
	},

	methods: {}
};
</script>

<style scoped>
.container {
	margin: 0 30rpx;
}
.content {
	padding-top: 40rpx;
	position: relative;
}

.video .thumb {
	height: 400rpx;
	position: relative;
}

.video .thumb .play-icon,
.video .thumb .play-num,
.video .thumb .play-time {
	position: absolute;
}

.video .thumb .play-icon {
	font-size: 100rpx;
}

.video .thumb .play-num {
	bottom: 10rpx;
	left: 10rpx;
}

.video .thumb .play-time {
	bottom: 10rpx;
	right: 10rpx;
}
.video .thumb image {
	border-radius: 10rpx 10rpx 0 0;
}

.video .info {
	height: 90rpx;
	background: #e5e5e5;
	border-radius: 0 0 10rpx 10rpx;
	padding: 0 30rpx;
}

.video .info .text,
.text .info .text {
	margin-right: 40rpx;
}

.video .info .avatar image,
.text .info .avatar image {
	width: 60rpx;
	height: 60rpx;
	border-radius: 50%;
}
.text .title {
	margin-bottom: 40rpx;
}
.text .box {
	border: 4rpx solid #e5e5e5;
	border-radius: 10rpx;
}
.text .box .box-text {
	margin: 30rpx;
}

.text .box .info {
	height: 100rpx;
	margin: 0 30rpx;
}

.action {
	height: 100rpx;
}
.action .left .iconfont {
	margin-right: 10rpx;
}

.action .praise {
	margin-right: 40rpx;
}

.dialog {
	border: 2rpx solid red;
	width: 300rpx;
	position: absolute;
	border-radius: 10rpx;
	right: 20rpx;
}

.dialog .item {
	height: 80rpx;
}
</style>
