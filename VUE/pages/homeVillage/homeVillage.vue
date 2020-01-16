<template>
	<view class="content">
		<view class="tabs font30 flex">
			<view class="tab flex1 " :class="{ active: current == index }" @click="clickTab(index, tab.id)" v-if="tab.status" v-for="(tab, index) in tabs" :key="tab.id">
				{{ tab.name }}
			</view>
		</view>
		<swiper class="swiper main harf-px-top" :current="current" @change="swiperChange">
			<swiper-item class="swiper-item" v-show="false"><!-- 用于占位置,不予显示 --></swiper-item>
			<swiper-item class="swiper-item">
				<!-- 广场 -->
				<plaza></plaza>
			</swiper-item>
			<swiper-item class="swiper-item">
				<!-- 关注 -->
				<concern></concern>
			</swiper-item>
			<swiper-item class="swiper-item" v-show="false"><!-- 用于占位置,不予显示 --></swiper-item>
		</swiper>
	</view>
</template>

<script>
import plaza from './components/plaza.vue';
import concern from './components/concern.vue';
export default {
	components: { plaza, concern },
	data() {
		return {
			tabs: [
				{ id: 'left', name: 'left', status: false },
				{ id: 'plaza', name: '广场', status: true },
				{ id: 'care', name: '关注', status: true },
				{ id: 'right', name: 'right', status: false }
			],
			current: 2
		};
	},
	methods: {
		clickTab(index, id) {
			this.current = index;
		},

		swiperChange(e) {
			let index = e.detail.current;
			this.current = index;
			if (index == 0) {
				this.current = 1;
				this.$emit('sliderLeft');
			} else if (index == 3) {
				this.current = 2;
				this.$emit('sliderRight');
			}
		}
	}
};
</script>

<style scoped>
.main {
	height: calc(100vh - 110rpx - 45rpx - var(--status-bar-height));

}

.tabs {
	height: 40rpx;
}
.tabs .tab:first-child {
	text-align: right;
	margin-right: 100rpx;
}

.tabs .tab:last-child {
	text-align: left;
}

.tabs .tab.active {
	font-weight: bold;
	color: red;
	position: relative;
	padding-bottom: 6rpx;
}
.tabs .tab.active::after {
	content: '';
	background: red;
	height: 5rpx;
	width: 100rpx;
	border-radius: 4rpx;
	position: absolute;
	bottom: 0;
}

.tabs .tab:first-child.active::after {
	right: -20rpx;
}
.tabs .tab:last-child.active::after {
	left: -20rpx;
}

.swiper .swiper-item {
	height: 100%;
}
</style>
