<!-- 云村-广场 -->
<template>
	<view class="plaza">
		<!-- 热评墙 -->
		<view class="buzz-wall">
			<view class="row1 flex-bet container">
				<view class="title font34 fontb">云村热评墙></view>
				<view class="month">Jan.</view>
			</view>
			<view class="row2 flex container">
				<image src="../../../static/logo.png" class="avatar" mode=""></image>
				<view class="text font26 text-one-line">哈哈哈哈哈哈哈哈哈啊哈哈啊哈哈哈哈哈哈哈哈哈啊哈哈哈哈</view>
				<view class="day font50 fontb">04</view>
			</view>
		</view>
		<view class="waterfall-flow container">waterfall flow</view>
	</view>
</template>

<script></script>

<style scoped>
.container {
	margin: 0 30rpx;
}

.plaza {
	background: #f8f8f8;
	height: 100%;
}

.buzz-wall {
	background: rgba(0, 0, 0, 0.2);
	border-radius: 20rpx;
	height: 140rpx;
	display: flex;
	color: #ffffff;
	justify-content: center;
	flex-direction: column;
	margin: 20rpx 30rpx;
}

.buzz-wall .row2 .avatar {
	height: 40rpx;
	width: 40rpx;
	border-radius: 50%;
	border: 1rpx solid;
	margin-right: 10rpx;
}
</style>
