<template>
	<view class="content">
		<!-- video -->
		<view class="title font20">听见青春的声音,看见最初的自己</view>
		<view class="video" v-if="type == 'video'">
			<view class="thumb flex-center">
				<image src="https://dummyimage.com/1000x1000?text=A" mode=""></image>
				<i class="iconfont font50 part icon-love play-icon"></i>
				<view class="play-num part font24">
					<i class="iconfont icon-love font24 "></i>
					71万
				</view>
				<view class="play-time part font24">
					<i class="iconfont icon-love font24"></i>
					09:20
				</view>
			</view>
		</view>
		<view class="action">action</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			type: 'video'
		};
	}
};
</script>

<style scoped>
.content {
}

.video .thumb {
	height: 400rpx;
	position: relative;
}

.video .thumb image {
	height: 100%;
	width: 100%;
	border-radius: 10rpx;
}

.video .thumb .part {
	position: absolute;
}

.video .thumb .play-num,
.video .thumb .play-time {
	bottom: 10rpx;
	color: #ffffff;
}

.video .thumb .play-num {
	left: 10rpx;
}

.video .thumb .play-time {
	right: 10rpx;
}
</style>
