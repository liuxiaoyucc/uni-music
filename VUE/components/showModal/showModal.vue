<!-- showModal -->
<template>
	<uni-popup ref="popup" type="center">
		<view class="showModal font26">
			<view class="text">{{ title }}</view>
			<view class="btns flex">
				<view class="cancel btn" @click="close">{{ btns[0] }}</view>
				<view class="affirm btn" @click="rightBtn">{{ btns[1] }}</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
export default {
	components: { uniPopup },
	props: {
		btns: {
			type: Array,
			default: () => {
				return ['取消', '确认'];
			}
		},
		title: {
			type: String,
			default: '确认清空全部历史记录？'
		}
	},

	methods: {
		rightBtn() {
			this.$emit('rightBtn');
			this.close();
		},

		// 控制popup 开关
		open() {
			this.$refs.popup.open();
		},
		close() {
			this.$refs.popup.close();
		}
	}
};
</script>

<style scoped>
.showModal {
	background: #ffffff;
	border-radius: 10rpx;
	width: calc(650rpx - 30rpx);
	padding: 40rpx 30rpx;
	color: #999999;
}

.showModal .btns {
	margin-top: 40rpx;
	color: #e24647;
	justify-content: flex-end;
}

.showModal .btns .btn {
	width: 150rpx;
	text-align: center;
}
</style>
