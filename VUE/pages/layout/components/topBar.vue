<template>
	<view class="top-bar  flex">
		<i class="iconfont menu-icon icon-menu_icon" @click="$emit('openDrawer')"><chat class="chat" v-if="message" :num="message" /></i>
		<view class="navs flex1 flex-center">
			<view class="nav  flex-center font30" @click="$emit('clickTab', index)" :class="{ active: index == current }" v-for="(item, index) in navs" :key="index">
				{{ item.name }}
			</view>
		</view>
		<navigator class="iconfont icon-sousuo" hover-class="none" url="../search/search"></navigator>
	</view>
</template>

<script>
import chat from '../../../components/chat/chat.vue';
export default {
	components: {
		chat
	},
	props: {
		navs: {},
		current: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			message: 9001
		};
	}
};
</script>

<style scoped>
.top-bar,
.navs,
.nav {
	height: 100%;
}

.navs .nav {
	border: 1rpx solid rgba(0, 0, 0, 0.1);
	border-radius: 50%;
	height: 90rpx;
	width: 90rpx;
	margin: 0 5rpx;
	color: #717171;
	transform: scale(1);
	transition: 0.1s;
}
.navs .active {
	font-weight: 700;
	color: #363636;
	font-size: 34rpx;
	transform: scale(1.1); /*放大1.1倍*/
	transition: 0.1s;
}

.menu-icon {
	position: relative;
}
.chat {
	position: absolute;
	left: 40rpx;
	top: -18rpx;
}
</style>
