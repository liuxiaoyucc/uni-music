<template>
	<view class="content">
		<scroll-view class="navs harf-px-bottom" scroll-x="true">
			<view class="nav font30" @click="clickNav(index, nav.id)" :class="{ active: current == index }" v-for="(nav, index) in topNavs" :key="nav.id">{{ nav.name }}</view>
		</scroll-view>
		<swiper class="main  swiper" :current="current" @change="current = $event.detail.current">
			<block v-for="list in topNavs" :key="list.id">
				<swiper-item class="swiper-item">
					<view class="video-lists"><video-card></video-card></view>
					{{ currentId }}
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
import { Video } from '../../models/video.js';
import videoCard from './components/videoCard.vue';

export default {
	components: { videoCard },
	data() {
		return {
			current: 0,
			currentId: '',
			topNavs: []
		};
	},
	watch: {
		current(oldValue, newValue) {
			// console.log(oldValue, newValue, 12);
			// console.log(currentId)
			// console.log(this.topNavs[this.current].id, 'id');
		}
	},
	mounted() {
		this.init();
	},
	methods: {
		async init() {
			// 顶部nav
			const topNavs = await Video.getVideoLable();
			this.topNavs = topNavs.data;
			this.currentId = topNavs.data[0].id;
			this.getVidelForLable();
		},
		async getVidelForLable() {
			const videoLists = await Video.getVidelForLable(this.currentId);
			// console.log(videoLists);
		},

		clickNav(index, id) {
			// 点击切换nav
			this.current = index;
			this.currentId = id;
		}
	}
};
</script>

<style scoped>
.container {
	margin: 0 30rpx;
}
.navs {
	white-space: nowrap;
	height: 50rpx;
}

.navs .nav {
	vertical-align: top;
	display: inline-block;
	margin: 0 30rpx;
}

.nav.active {
	color: red;
	font-weight: bold;
	position: relative;
}

.active:after {
	content: '';
	position: absolute;
	background: red;
	height: 4rpx;
	width: 60rpx;
	border-radius: 6rpx;
	left: calc(50% - 30rpx);
	bottom: -6rpx;
}
.main {
	height: calc(100vh - 110rpx - 60rpx - var(--status-bar-height));
	background: #f4f4f4;
}

.main .swiper-item {
	height: 100%;
}
</style>
