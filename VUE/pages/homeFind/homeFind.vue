<template>
	<view class="content">
		<!-- slider -->
		<swiper class="swiper  " :indicator-dots="true" indicator-active-color="rgba(218, 45, 30, 1)" :autoplay="true" :interval="3000" :duration="500">
			<swiper-item class="swiper-item" v-for="(item, index) in imageList" :key="index"><image :src="item.src" class="image"></image></swiper-item>
		</swiper>
		<view class="row-nav flex">
			<!-- 这里后续和首页nav封装成组件使用 -->
			<view class="list" v-for="item in rowNav" :key="item.id">
				<view class="thumb flex-center"></view>
				<view class="text font26 flex-center">{{ item.name }}</view>
			</view>
		</view>

		<!-- 推荐歌单 -->
		<!-- <view class="recommend-playlist harf-px-top">
			<view class="container">
				<view class="title text-color flex-bet ">
					<view class="left font32 fontb">推荐歌单</view>
					<view class="right flex-center font24">歌单广场</view>
				</view>
				<view class="card-box flex-bet">
					<block v-for="item in demo" :key="item.id"><music-card class="music-card" :info="item"></music-card></block>
				</view>
			</view>
		</view> -->

		<!-- 新碟 -->
		<!-- 	<view class="new-plate">
			<view class="container">
				<view class="title text-color flex-bet ">
					<view class="left flex">
						<view class="item font28" @click="plateTabClick(item.id)" :class="{ active: item.id == currentTab }" v-for="item in tab" :key="item.id">
							{{ item.name }}
						</view>
					</view>
					<view class="right flex-center font24">更多新碟</view>
				</view>
				<view class="card-box flex-bet">
					<block v-for="item in demo" :key="item.id"><music-card class="music-card" :info="item"></music-card></block>
				</view>
			</view>
		</view> -->
		<!-- 云村精选 -->
		<view class="choiceness">
			<view class="container">
				<view class="title">
					<view class="left">云村精选</view>
					<view class="right">获取新内容</view>
				</view>
				<choicenessCard></choicenessCard>
			</view>
		</view>
	</view>
</template>

<script>
import musicCard from '@/components/musicCard/musicCard.vue';
import choicenessCard from '@/components/choicenessCard/choicenessCard.vue';
export default {
	components: { musicCard, choicenessCard },
	data() {
		return {
			imageList: [
				{
					src: 'http://p1.music.126.net/lXzYxTX2uWtgKPRr435yhQ==/109951164015332296.jpg'
				},
				{
					src: 'http://p1.music.126.net/0yrVUf_n_R5wmRqNu1gKlQ==/109951164008902192.jpg'
				},
				{
					src: 'http://p1.music.126.net/V1IYb7fOYnNMKoZB0Hsw9g==/109951164008749539.jpg'
				},
				{
					src: 'http://p1.music.126.net/8Cf0kANiLi4PI3owO9yFsA==/109951164008093274.jpg'
				},
				{
					src: 'http://p1.music.126.net/-gC1wl4oNcs8QrkOq7sKYg==/109951164008314890.jpg'
				},
				{
					src: 'http://p1.music.126.net/Q1El_3ISdo3Vw9bFMUp_9w==/109951164008139402.jpg'
				},
				{
					src: 'http://p1.music.126.net/Pm9pobge14ZnFsvXJTqHVA==/109951164008109951.jpg'
				},
				{
					src: 'http://p1.music.126.net/BqsOL4-XjJZNLh2jHvUA4Q==/109951164008463728.jpg'
				},
				{
					src: 'http://p1.music.126.net/V1IYb7fOYnNMKoZB0Hsw9g==/109951164008749539.jpg'
				}
			],
			rowNav: [
				{
					name: '每日推荐',
					id: 'recommend',
					iconSrc: '/static/rattle/recommend.png' //红色背景暂时先用图片代替,后面改成背景,方便更改
				},
				{
					name: '私人FM',
					id: 'privateFM',
					iconSrc: '/static/rattle/private-fm.png'
				},
				{
					name: '歌单',
					id: 'musicList',
					iconSrc: '/static/rattle/music-list.png'
				},
				{
					name: '排行榜',
					id: 'rank',
					iconSrc: '/static/rattle/rank.png'
				},

				{
					name: '跑步FM',
					id: 'runFM',
					iconSrc: '/static/rattle/run-fm.png'
				}
			],
			currentTab: 0, //新碟tab
			tab: [{ id: 0, name: '新碟' }, { id: 1, name: '新歌' }],
			demo: [
				{ id: 0, text: '啥哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈1', src: 'https://dummyimage.com/500x500?text=A' },
				{ id: 1, text: '测试1', src: 'https://dummyimage.com/500x500?text=b' },
				{ id: 2, text: '测试1', src: 'https://dummyimage.com/500x500?text=c' }
			]
		};
	},
	methods: {
		plateTabClick(e) {
			// 新碟 tab切换
			this.currentTab = e;
		}
	}
};
</script>

<style scoped>
.container {
	margin: 0 30rpx;
}

.swiper {
	margin-top: 10rpx;
	height: 17vh;
}

.swiper-item {
	height: 100%;
	border-radius: 10rpx;
}

.swiper .image {
	width: 100%;
	height: 100%;
	border-radius: 10rpx;
	margin: 0 30rpx;
	width: calc(100% - 60rpx);
}

/* roW-nav */

.row-nav {
	margin: 40rpx 0;
}
.row-nav .list {
	width: 20%;
}

.row-nav .list .thumb {
	margin: 0 auto;
	width: 70rpx;
	height: 70rpx;
	border-radius: 50%;
	margin-bottom: 10rpx;
	background: red;
}

/*  */
.new-plate .title,
.recommend-playlist .title {
	padding: 30rpx 0 30rpx;
}
.new-plate .title .title .right,
.recommend-playlist .title .right {
	border: 1rpx solid #e5e5e5;
	height: 50rpx;
	width: 150rpx;
	border-radius: 100rpx;
}

.new-plate .card-box,
.recommend-playlist .card-box {
	flex-wrap: wrap;
	align-items: flex-start;
}

.new-plate .music-card,
.recommend-playlist .music-card {
	width: 220rpx;
}

.new-plate .active {
	font-weight: bold;
	font-size: 32rpx;
	color: #343434;
}

.new-plate .left .item:first-child {
	margin-right: 20rpx;
	position: relative;
}
.new-plate .left .item:first-child:after {
	content: '';
	height: 32rpx;
	width: 1rpx;
	background: #e5e5e5;
	position: absolute;
	top: 6rpx;
	right: -10rpx;
}
</style>
