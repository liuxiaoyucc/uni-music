<template>
	<view class="setting">
		<view class="status_bar"><!-- 状态栏 --></view>

		<view class="top">设置</view>
		<view class="lists container">
			<view class="title">网络</view>
			<view class="list flex-bet" v-for="(list, index) in list1" :key="index">
				<view class="left">
					<view class="text">{{ list.text }}</view>
					<view class="describe">{{ list.describe }}</view>
				</view>
				<view class="right">{{ list.status }}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list1: [
				{ text: '使用2G/3G/4G网络播放', describe: '视频Mlog播放不受此设置影响', status: false },
				{ text: '使用2G/3G/4G网络下载', describe: '', status: false },
				{ text: '动态页中Wi-Fi下自动播放视频', describe: '', status: false },
				{ text: '视频页中Wi-Fi下连续播放', describe: '', status: false }
			],
			list2: [{ text: '在线播放音质', describe: '' }, { text: '下载音质', describe: '' }]
		};
	},
	methods: {}
};
</script>

<style scoped>
.container {
	margin: 0 20rpx;
}
</style>
