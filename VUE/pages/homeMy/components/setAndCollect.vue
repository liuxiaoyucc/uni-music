<template>
	<view class="content">
		<view class="menu" :class="{ transition: visible }">
			<view class="hd font34  flex-bet" @click="visible = !visible">
				<view class="left flex">
					<i class="iconfont hd-left-icon icon-love"></i>
					<view class="text  flex">
						<text class="fontb hd-name">创建的歌单</text>
						<view class="num font24">(1)</view>
					</view>
				</view>
				<view class="right flex">
					<i class="iconfont font26  icon-ziyuan1"></i>
					<i class="iconfont font26  icon-ziyuan1"></i>
				</view>
			</view>
			<view class="lists">
				<!-- 默认 -->
				<view class="list love flex-bet">
					<view class="left  flex">
						<view class="thumb flex-center"><i class="iconfont font50 icon-love"></i></view>
						<view class="info">
							<view class="title font30">我喜欢的音乐</view>
							<view class="num font24">0首</view>
						</view>
					</view>

					<view class="right font24 flex-center">
						<i class="iconfont font24  icon-ziyuan1"></i>
						<text>心动模式</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			visible: false
		};
	}
};
</script>

<style scoped>
.menu .lists {
	overflow: hidden;
	height: 100%;
}

.lists .list {
	transition: all ease 0.4s 0.2s;
	height: 120rpx;
}
.transition .lists .list {
	height: 0;
}

.menu .hd .hd-left-icon {
	display: inline-block;
	transition: all ease 0.4s 0.2s;
}

.transition .hd-left-icon {
	transform: rotate(-90deg);
}

.hd .hd-name {
	margin: 0 10rpx;
}
.lists .list .num,
.hd .left .num {
	color: #a4a4a4;
}

.list.love .right {
	border: 1rpx solid #e5e5e5;
	border-radius: 30rpx;
	height: 40rpx;
	width: 160rpx;
}

.list.love .thumb {
	height: 100rpx;
	width: 100rpx;
	background: #4b4b4b;
	border-radius: 4rpx;
	color: #ffffff;
}

.lists .thumb {
	margin-right: 20rpx;
}
</style>
