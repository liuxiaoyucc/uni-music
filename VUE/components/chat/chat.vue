<template>
	<view class="content flex-center" :class="{ round: num < 100 }">{{ countNum }}</view>
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
			if (num < 100) return num;
			return '99+';
		}
	}
};
</script>

<style scoped>
.content {
	background: red;
	color: #ffffff;
	font-size: 20rpx;
	height: 30rpx;
	width: 46rpx;
	border-radius: 30rpx;
}

.content .round {
	width: 30rpx;
	height: 30rpx;
	border-radius: 50%;
}
</style>
