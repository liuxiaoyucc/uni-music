<template>
	<view class="content ">
		<view class="list flex" v-for="(list, index) in lists" :key="index">
			<i class="iconfont font50 flex-center" :class="list.icon"></i>
			<view class="right harf-px-top flex1 flex">
				<view class="text font30">{{ list.name }}</view>
				<view class="num font24">({{ list.num || list.text }})</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			lists: [
				{ icon: 'icon-yinyue', name: '本地音乐', num: '12' },
				{ icon: 'icon-bofang', name: '最近播放', num: '112' },
				{ icon: 'icon-xiazai', name: '下载管理', num: '12' },
				{ icon: 'icon-diantai', name: '我的电台', num: '2' },
				{ icon: 'icon-wodeshoucang', name: '我的收藏', text: '专辑/歌手/视频/专栏/Mlog' }
			]
		};
	}
};
</script>

<style scoped>
.list {
	height: 100rpx;
}
.right,
.iconfont {
	height: 100%;
}
.right {
}

.list .right .num {
	color: #a4a4a4;
	margin-left: 10rpx;
}

.list .iconfont {
	width: 20%;
}

.list:first-child .right:after {
	height: 0;
}
</style>
