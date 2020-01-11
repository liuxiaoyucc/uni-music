<template>
	<view class="content flex">
		<i class="iconfont menu-icon icon-menu_icon" @click="$emit('openDrawer')"><chat class="chat" v-if="message" :num="message" /></i>
		<view class="navs flex1 flex-center">
			<view class="nav" v-for="(item, index) in navs" :key="index">{{ item.name }}</view>
		</view>
		<i class="iconfont icon-sousuo"></i>
	</view>
</template>

<script>
import chat from '../../../components/chat/chat.vue';
export default {
	components: {
		chat
	},
	props: {
		navs: {}
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
