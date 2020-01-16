<template>
	<view class="content flex">
		<i class="iconfont menu-icon icon-menu_icon" @click="$emit('openDrawer')"><chat class="chat" v-if="message" :num="message" /></i>
		<view class="navs flex1 flex-center">
			<view class="nav font32" @click="$emit('clickTab', index)" :class="{ active: index == current }" v-for="(item, index) in navs" :key="index">{{ item.name }}</view>
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
			message: 1
		};
	}
};
</script>

<style scoped>
.navs .nav {
	width: 110rpx;
	color: #717171;
}

.menu-icon {
	position: relative;
}
.chat {
	position: absolute;
	left: 40rpx;
	top: -18rpx;
}

.navs .active {
	font-weight: bold;
	color: #363636;
	font-size: 36rpx;
}
</style>
