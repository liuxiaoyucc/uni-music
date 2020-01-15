<template>
	<view class="content1">
		<!-- slider -->
		<swiper class="swiper" :indicator-dots="true" indicator-active-color="rgba(218, 45, 30, 1)" :autoplay="true" :interval="3000" :duration="500">
			<swiper-item class="swiper-item" v-for="(item, index) in banners.banners" :key="index">
				<image :src="item.pic" class="image"></image>
				<view class="tag font20 flex" :style="{ background: item.titleColor }">{{ item.typeTitle }}</view>
			</swiper-item>
		</swiper>
		<!-- row-nav -->
		<view class="row-nav flex">
			<view class="list" v-for="item in rowNav" :key="item.id">
				<view class="thumb flex-center"></view>
				<view class="text font26 flex-center">{{ item.name }}</view>
			</view>
		</view>

		<!-- 推荐歌单 -->
		<view class="recommend-playlist harf-px-top">
			<view class="container">
				<view class="title text-color flex-bet ">
					<view class="left font32 fontb">推荐歌单</view>
					<navigator hover-class="none" class="right flex-center font24" url="../playMenuSquare/playMenuSquare">歌单广场</navigator>
				</view>
				<view class="card-box flex-bet">
					<block v-for="item in recommendPlaylist.result" :key="item.id"><music-card class="music-card" :info="item"></music-card></block>
				</view>
			</view>
		</view>

		<!-- 新碟/新歌 -->
		<view class="new-plate">
			<view class="container">
				<view class="title text-color flex-bet ">
					<view class="left flex">
						<view class="item font28" @click="currentTab = item.id" :class="{ active: item.id == currentTab }" v-for="item in tab" :key="item.id">{{ item.name }}</view>
					</view>
					<view class="right flex-center font24">{{ currentTab ? '更多新歌' : '更多新碟' }}</view>
				</view>
				<view class="card-box flex-bet" v-show="currentTab == 0">
					<block v-for="item in newAlbum.albums" :key="item.id"><music-card type="1" class="music-card" :info="item"></music-card></block>
				</view>
				<view class="card-box flex-bet" v-show="currentTab == 1">
					<block v-for="item in newSong" :key="item.id"><music-card type="2" class="music-card" :info="item"></music-card></block>
				</view>
			</view>
		</view>
		<!-- 云村精选 -->
		<view class="choiceness">
			暂无接口
			<!-- 	<view class="container">
				<view class="title">
					<view class="left">云村精选</view>
					<view class="right">获取新内容</view>
				</view>
				<choicenessCard></choicenessCard>
			</view> -->
		</view>
	</view>
</template>

<script>
import musicCard from '@/components/musicCard/musicCard.vue';
import choicenessCard from '@/components/choicenessCard/choicenessCard.vue';
import { Banner } from '../../models/banner.js';
import { Recommend } from '../../models/recommend.js';
import { Data } from '../../models/data.js';
export default {
	components: { musicCard, choicenessCard },
	data() {
		return {
			banners: [],
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
			tab: [{ id: 0, name: '新碟' }, { id: 1, name: '新歌' }],
			currentTab: 0, // 新碟/新歌 tab
			newSong: [], // 新歌
			newAlbum: [], // 新碟
			recommendPlaylist: [] //推荐歌单
		};
	},

	mounted() {
		this.init();
	},
	watch: {
		currentTab(newValue, oldValue) {
			// tab切换
			// newValue ? this.getNewSong() : this.getNewAlbum();
		}
	},

	methods: {
		async init() {
			// 获取banner
			this.banners = await Banner.getBanner(2);
			// 获取推荐歌单
			this.recommendPlaylist = await Recommend.GetRecommendPlaylist(6);
			this.getNewSong(); // 新歌
			this.getNewAlbum(); // 新碟
		},

		async getNewSong() {
			// 获取新歌
			const newSong = await Data.getNewSong();
			this.newSong = newSong.data.slice(0, 3);
		},

		async getNewAlbum() {
			// 新碟
			this.newAlbum = await Data.getNewAlbum(0, 3);
		}
	}
};
</script>

<style>
.container {
	margin: 0 30rpx;
}

.swiper {
	margin-top: 10rpx;
	height: 17vh;
}

.swiper .swiper-item {
	height: 100%;
	border-radius: 10rpx;
	position: relative;
}

.swiper .image {
	height: 100%;
	border-radius: 10rpx;
	margin: 0 30rpx;
	width: calc(100% - 60rpx);
}

.swiper .tag {
	position: absolute;
	right: 32rpx;
	bottom: 0;
	border-radius: 10rpx 0 10rpx 0;
	color: #ffffff;
	height: 40rpx;
	padding: 0 20rpx;
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
