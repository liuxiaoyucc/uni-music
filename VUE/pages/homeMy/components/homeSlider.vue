<template>
	<view class="content flex-center harf-px">
		<scroll-view class="grace-scroll-x" scroll-x="true">
			<view class="item flex-center" v-for="(item, index) in items" :key="index">
				<view class="item-icon flex-center"><i class="iconfont" :class="item.icon"></i></view>
				<view class="text font26  flex-center">{{ item.name }}</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{ name: '私藏推荐', icon: 'icon-ziyuan' },
				{ name: '私人FM', icon: 'icon-ziyuan' },
				{ name: '最嗨电音', icon: '' },
				{ name: 'ACG专区', icon: '' },
				{ name: 'Sati空间', icon: '' },
				{ name: '因乐交友', icon: '' },
				{ name: '亲子频道', icon: '' },
				{ name: '古典专区', icon: '' },
				{ name: '跑步FM', icon: '' },
				{ name: '小冰电台', icon: '' },
				{ name: '爵士电台', icon: '' },
				{ name: '驾驶模式', icon: '' },
				{ name: '云村正能量', icon: '' },
				{ name: '节奏战争', icon: '' },
				{ name: '猜歌挑战11', icon: '' }
			]
		};
	}
};
</script>

<style scoped>
.content {
	height: 180rpx;
}
.grace-scroll-x {
	white-space: nowrap;
}
.item {
	display: inline-block;
	width: 22%;
}

.item .item-icon {
	margin: 0 auto;
	width: 70rpx;
	height: 70rpx;
	border-radius: 50%;
	margin-bottom: 10rpx;
	background: red;
}

.item-icon .iconfont {
	color: #ffffff;
}

.item .text {
	color: #a4a4a4;
}
</style>
