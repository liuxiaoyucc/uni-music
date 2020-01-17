<template>
	<view class="singer">
		<view class="status_bar"><!-- 状态栏 --></view>
		<view class="navigation flex container">
			<i class="iconfont hd-left-icon icon-love" @click="open"></i>
			歌手分类
		</view>
		<view class="classify font28">
			<!-- 关闭 -->
			<view class="shut flex-bet" v-if="status">
				<view class="left">华语:男</view>
				<view class="right flex" @click="status = false">
					<i class="iconfont hd-left-icon icon-love"></i>
					筛选
				</view>
			</view>
			<!-- 展开 -->
			<view class="unfold" v-else>
				<view class="row1 flex">
					<view class="nav" :class="{ active: nav.id == current1 }" @click="clickNav(1, nav.id)" v-for="nav in nav1" :key="nav.id">{{ nav.name }}</view>
				</view>
				<view class="row2 flex">
					<view class="nav flex-center" :class="{ active: nav.id == current2 }" @click="clickNav(2, nav.id)" v-for="nav in nav2" :key="nav.id">{{ nav.name }}</view>
				</view>
			</view>
		</view>
		<!-- main -->
		<scroll-view class="scroll-view-y main" @scrolltolower="scrolltolower" @scroll="scroll" scroll-y="true" :class="status ? 'height1' : 'height2'">
			<view class="title font22 flex">热门歌手</view>
			<view class="singer-lists">
				<view class="list flex-bet" v-for="(list, index) in singerLists" :key="index">
					<image class="avatar" :src="list.picUrl" />
					<view class="artist  flex1 flex">
						<view class="text font30">{{ list.name }}</view>
						<!-- <view class="img">img</view> -->
					</view>
					<view class="follow-btn flex-center font22" :class="{ followed: list.followed }">
						<i class="iconfont hd-left-icon font22 icon-love"></i>
						关注
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import { Singer } from '../../models/singer.js';
export default {
	data() {
		return {
			current1: '0',
			current2: '0',
			offset: 0, //数据偏移量
			scrillViewHeight: 0,
			status: false, //顶部分类状态
			nav1: [{ id: 1, name: '华语' }, { id: 2, name: '欧美' }, { id: 3, name: '日本' }, { id: 4, name: '韩国' }, { id: 5, name: '其他' }],
			nav2: [{ id: 1, name: '男' }, { id: 2, name: '女' }, { id: 3, name: '乐队/组合' }],
			singerLists: []
		};
	},
	mounted() {
		this.init();
	},
	watch: {},
	methods: {
		async init() {
			// 1001 华语男歌手  1002 华语nv歌手
			this.getSingLists(1001, 1002, 10, 0);
		},

		async getSingLists(cat1, cat2, limit, offset) {
			// 获取歌手列表
			const menSingers = await Singer.getSingList(cat1, limit, offset);
			const womenSingers = await Singer.getSingList(cat2, limit, offset);
			if (offset < 1) {
				this.singerLists = [...menSingers.artists, ...womenSingers.artists];
				return;
			}

			this.singerLists = this.singerLists.concat([...menSingers.artists, ...womenSingers.artists]);
		},

		scroll(e) {
			// scroll-view 上滑 切换分类状态
			if (e.detail.scrollTop > 0) {
				this.status = true;
			}
		},
		scrolltolower() {
			// scroll-view 滑动到底部
			this.offset++;

			this.getSingLists(1001, 1002, 10, this.offset);
			// console.log(offset, '12');

			// concat
		},

		clickNav(index, id) {
			// 顶部分类切换
			// index：1 区域分类 index:2 男/女/组合
			index == 1 ? (this.current1 = id) : (this.current2 = id);

			if (index == 1) {
				
			}
			

			let a = {
				11: '1001', //华语男
				12: '1002', // 华语女
				13: '1003', // 华语组合
				21: '2001', //欧美男
				22: '2002', //欧美女
				23: '2003' //欧美组合
				//日本男
				//日本女
				//日本组合
				//韩国男
				//韩国女
				// 韩国组合
				// 其他男
				// 其他女
				// 其他组合
			};
		}
	}
};
</script>

<style scoped>
.container {
	margin: 0 30rpx;
}

.navigation {
	height: 100rpx;
}
.navigation .iconfont {
	margin-right: 20rpx;
}

.classify {
	margin-top: 20rpx;
}

.classify .unfold {
	height: 160rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	opacity: 0.7;
}

.classify .unfold .row1 .nav {
	padding: 0 30rpx;
	margin-bottom: -30rpx;
}
.classify .unfold .row2 .nav {
	width: 140rpx;
}

.classify .shut {
	margin: 0 20rpx;
	height: 60rpx;
}

.classify .nav.active {
	color: red;
}

.main.height1 {
	height: calc(100vh - 120rpx - 60rpx - var(--status-bar-height));
}
.main.height2 {
	height: calc(100vh - 120rpx - 160rpx - var(--status-bar-height));
}

.main .title {
	height: 60rpx;
	background: #f3f3f3;
	padding: 0 20rpx;
}

.singer-lists .list {
	margin: 0 20rpx;
	height: 110rpx;
}

.singer-lists .list .avatar {
	height: 85rpx;
	width: 85rpx;
	border-radius: 50%;
	margin-right: 30rpx;
}

.singer-lists .list .follow-btn {
	border: 1rpx solid red;
	color: red;
	border-radius: 40rpx;
	opacity: 0.8;
	height: 40rpx;
	width: 100rpx;
}
.singer-lists .list .follow-btn.followed {
	color: #e5e5e5;
}
</style>
