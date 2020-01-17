<template>
	<view class="video-card">
		<view class="container">
			<view class="thumb font22 flex-center">
				<image src="https://dummyimage.com/1000x500?text=A" class="img"></image>
				<view class="tag flex-center">#收藏榜#</view>
				<view class="player-btn"><i class="iconfont hd-left-icon icon-love"></i></view>
				<view class="player-num  flex">
					<i class="iconfont hd-left-icon icon-love font22"></i>
					57万
				</view>
				<view class="player-time flex">
					<i class="iconfont hd-left-icon icon-love font22"></i>
					12:90
				</view>
			</view>

			<view class="center flex-bet">
				<view class="text font30 text-two-line flex1">哈哈哈哈哈哈jhahahhhhhhhhhhhhhhhhh哈哈哈啊哈哈哈哈哈哈哈奥哈哈或或或或或或或或或或或</view>
				<image class="img" src="https://dummyimage.com/1000x500?text=A"></image>
			</view>
			<view class="author-action harf-px-top flex-bet">
				<!-- 作者 -->
				<view class="author flex">
					<image class="avatar" src="https://dummyimage.com/1000x500?text=A"></image>
					<view class="nickname font30  flex1 text-one-line">1111111111111111111111</view>
				</view>
				<!-- 功能区 -->
				<view class="action flex-bet">
					<i class="iconfont hd-left-icon icon-love font22 like-icon"><view class="like-num num">12</view></i>
					<i class="iconfont hd-left-icon icon-love font22 comment-icon"><view class="comment-num num">1</view></i>
					<i class="iconfont hd-left-icon icon-love font22"></i>
				</view>
			</view>
		</view>
	</view>
</template>

<script></script>

<style scoped>
.container {
	margin: 0 30rpx;
}
.video-card {
	background: #ffffff;
	margin-bottom: 20rpx;
	padding: 20rpx 0;
}
.video-card .thumb {
	height: 380rpx;
	position: relative;
	border-radius: 20rpx;
}
.video-card .thumb .img {
	width: 100%;
	height: 100%;
	border-radius: 20rpx;
}
.video-card .thumb .tag,
.video-card .thumb .player-btn,
.video-card .thumb .player-num,
.video-card .thumb .player-time {
	position: absolute;
	color: #ffffff;
}
.video-card .thumb .tag {
	right: 10rpx;
	top: 10rpx;
	border: 1rpx solid rgba(255, 255, 255, 0.4);
	padding: 2rpx 16rpx;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 20rpx;
}
.video-card .thumb .player-num {
	left: 10rpx;
	bottom: 10rpx;
}
.video-card .thumb .player-time {
	bottom: 10rpx;
	right: 10rpx;
}

.video-card .thumb .iconfont {
	margin-right: 2rpx;
}

.video-card .center {
	padding: 30rpx 0;
}

.video-card .center .text {
	margin-right: 10rpx;
}
.video-card .center .img {
	width: 60rpx;
	height: 60rpx;
	border-radius: 50%;
}

.video-card .author-action {
	padding: 30rpx 0 10rpx;
}
.video-card .author {
	width: 64%;
}

.video-card .author .avatar {
	width: 50rpx;
	height: 50rpx;
	border-radius: 50%;
	margin-right: 10rpx;
}

.video-card .action {
	width: 30%;
}

.video-card .action .like-icon,
.video-card .action .comment-icon {
	position: relative;
}
.video-card .action .num {
	position: absolute;
	top: 0;
	right: 0;
	font-size: 10rpx;
	color: red;
}
</style>
