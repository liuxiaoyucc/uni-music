<template>
	<view class="layout">
		<view class="status_bar"></view>
		<!-- topbar -->
		<view class="tabbar container30"><top-bar :current="current" @openDrawer="openDrawer" @clickTab="clickTab" :navs="topbar" /></view>
		<!-- main -->
		<view class="main">
			<swiper class=" swiper" :current="current" @change="changeSwiper">
				<!-- 我的 -->
				<swiper-item class="swiper-item my">
					<scroll-view class="scroll-view-y" scroll-y="true"><homeMy></homeMy></scroll-view>
				</swiper-item>
				<!-- 发现 -->
				<swiper-item class="swiper-item find">
					<scroll-view class="scroll-view-y" scroll-y="true"><homeFind class="home-find"></homeFind></scroll-view>
				</swiper-item>
				<!-- 云村 -->
				<swiper-item class="swiper-item village">
					<scroll-view class="scroll-view-y" scroll-y="true"><homeVillage @sliderRight="sliderRight" @sliderLeft="sliderLeft"></homeVillage></scroll-view>
				</swiper-item>
				<!-- 视频 -->
				<swiper-item class="swiper-item video">
					<scroll-view class="scroll-view-y" scroll-y="true"><homeVideo></homeVideo></scroll-view>
				</swiper-item>
			</swiper>
		</view>

		<!-- 侧边抽屉 个人中心 -->
		<view class="drawer-user"><drawerUser @closeDrawer="closeDrawer" :show="drawerShow" /></view>
	</view>
</template>

<script>
import topBar from './components/topBar.vue';
import drawerUser from './components/drawerUser.vue';
import homeMy from '../homeMy/homeMy.vue';
import homeFind from '../homeFind/homeFind.vue';
import homeVillage from '../homeVillage/homeVillage.vue';
import homeVideo from '../homeVideo/homeVideo.vue';

export default {
	components: {
		topBar,
		homeMy,
		homeFind,
		homeVideo,
		drawerUser,
		homeVillage
	},

	data() {
		return {
			drawerShow: false, //用户中心状态
			current: 0,
			topbar: [{ name: '我的' }, { name: '发现' }, { name: '云村' }, { name: '视频' }]
		};
	},

	created() {
		try {
			const userInfo = uni.getStorageInfoSync('userInfo');
		} catch (e) {
			//TODO handle the exception
		}
	},
	onLoad() {
		// 监听全局事件
		// changeOutSwipeLeft 内部组件改变外部swiper左滑
		// changeOutSwipeRight 内部组件改变外部swiper右滑
		uni.$on('sliderLeft', data => {
			console.log(123);
			this.current = 1;
		});
	},
	methods: {
		openDrawer() {
			// 监听抽屉打开
			this.drawerShow = true;
		},
		closeDrawer() {
			// 监听抽屉关闭;
			this.drawerShow = false;
		},
		clickTab(index) {
			// 监听组件tab点击切换
			this.current = index;
		},
		changeSwiper(e) {
			// swiper 切换
			this.current = e.detail.current;
		},

		// // 内部swiper 控制外部swiper 左右滑动
		sliderLeft() {
			this.current = this.current - 1;
		},
		sliderRight() {
			this.current = this.current + 1;
		}
	}
};
</script>

<style scoped>
.tabbar {
	height: 100rpx;
}

.main {
	height: calc(100vh - 110rpx - var(--status-bar-height));
}
.swiper,
.swiper-item,
.scroll-view-y {
	height: 100%;
}
</style>
