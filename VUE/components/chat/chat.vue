<template>
	<view class="chat">{{ countNum }}</view>
</template>

<script>
export default {
	props: {
		num: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			status: 0 //0:传进来的值<99 1:大于99
		};
	},
	computed: {
		countNum() {
			let num = this.$props.num;
			if (num == 0) {
				return '';
			} else if (num < 100) {
				return num;
			} else {
				return '99+';
			}
		}
	}
};
</script>

<style scoped>
.chat {
	background: red;
	color: #ffffff;
}
.chat:not(:empty) {
	font-size: 20rpx;

	padding: 0 10rpx;
	border-radius: 1000rpx;
}

.chat:empty {
	height: 15rpx;
	width: 15rpx;
	border-radius: 50%;
}
</style>
