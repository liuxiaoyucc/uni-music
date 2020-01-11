<template>
	<view class="content">
		<uni-drawer :visible="show" @close="$emit('closeDrawer')">
			<view style="padding:30rpx;"><view class="uni-title"></view></view>
			用户中心
		</uni-drawer>
	</view>
</template>

<script>
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
export default {
	components: { uniDrawer },
	props: {
		show: Boolean
	}
};
</script>

<style></style>
