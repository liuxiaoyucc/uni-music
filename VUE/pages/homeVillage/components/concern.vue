<!-- 关注 -->
<template>
	<view class="concern">
		<view class="has-concern" v-if="hasConcern">has-concern</view>
		<!-- 没有关注的人 -->
		<view class="no-concern " v-else>
			<view class="top flex-center flex-col">
				<i class="iconfont hd-left-icon icon-love"></i>
				<view class="text-hd fontb font32">你还没有关注的人哦</view>
				<view class="sub-text font28">快去多多关注感兴趣的人吧</view>
			</view>
			<!-- 感兴趣的人 -->
			<view class="interested-people  container">
				<view class="title  flex-bet">
					<view class="left font32 fontb">感兴趣的人</view>
					<view class="more flex-center font24">查看更多</view>
				</view>
				<view class="lists">
					<view class="list-card " v-for="list in lists" :key="list.id">
						<view class="container">
							<view class="row1 flex-bet">
								<view class="left flex">
									<view class="avatar"><image class="" src="https://dummyimage.com/1000x500?text=A" mode=""></image></view>
									<view class="people-info">
										<view class="name">{{ list.nickName }}</view>
										<view class="fans font24">{{ list.fans }}粉丝</view>
									</view>
								</view>
								<view class="right flex-center">
									<i class="iconfont hd-left-icon icon-love"></i>
									关注
								</view>
							</view>
							<view class="row2 harf-px-top flex-bet">
								<view class="left font28 flex1 text-three-line">{{ list.text }}</view>
								<image class="thumb" src="https://dummyimage.com/1000x500?text=A" mode=""></image>
							</view>
							<view class="row3 flex-bet">
								<view class="left font28">{{ list.author }}</view>
								<i class="iconfont hd-left-icon icon-love"></i>
							</view>
						</view>
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
			hasConcern: false, //是否有关注
			lists: [
				{
					id: 0,
					author: '美国制作人',
					nickName: '旅行团',
					avatar: 'https://dummyimage.com/1000x500?text=A',
					thumb: 'https://dummyimage.com/1000x500?text=b',
					text: '哈哈哈哈哈哈哈啊哈哈哈哈哈 哈哈哈哈哈哈哈啊哈哈哈哈哈 哈哈哈哈哈哈哈啊哈哈哈哈哈 哈哈哈哈哈哈哈啊哈哈哈哈哈',
					fans: '100万'
				},
				{
					id: 1,
					author: '美国制作人',
					nickName: '旅行团',
					avatar: 'https://dummyimage.com/1000x500?text=A',
					thumb: 'https://dummyimage.com/1000x500?text=b',
					text: '哈哈哈哈哈哈哈啊哈哈哈哈哈 哈哈哈哈哈哈哈啊哈哈哈哈哈',
					fans: '100万'
				}
			]
		};
	}
};
</script>

<style scoped>
.container {
	margin: 0 30rpx;
}
.no-concern .top {
	height: 400rpx;
}

.no-concern .top .iconfont {
	font-size: 100rpx;
	margin-bottom: 40rpx;
}

.no-concern .top .sub-text {
	margin-top: 6rpx;
	color: #888888;
}
.no-concern .interested-people .title {
	margin-bottom: 40rpx;
}
.no-concern .interested-people .more {
	border: 1px solid #e5e5e5;
	height: 25px;
	width: 75px;
	border-radius: 50px;
}

.interested-people .lists .list-card {
	background: #f4f4f4;
	border-radius: 20rpx;
	margin-bottom: 30rpx;
}
.interested-people .lists .list-card:not(:last-child) {
	margin-bottom: 30rpx;
}

.interested-people .row1,
.interested-people .row2 {
	padding: 14rpx 0;
}
.interested-people .row3 {
	padding-bottom: 14rpx;
}

.interested-people .row1 .avatar image {
	width: 100rpx;
	height: 100rpx;
	border-radius: 50%;
	vertical-align: middle;
	margin-right: 20rpx;
}
.interested-people .row1 .right {
	background: red;
	color: #ffffff;
	width: 120rpx;
	padding: 4rpx 0;
	font-size: 24rpx;
	border-radius: 100rpx;
}

.interested-people .lists .list-card .row2 .thumb {
	width: 120rpx;
	height: 120rpx;
	border-radius: 10rpx;
	margin-left: 20rpx;
}
</style>
