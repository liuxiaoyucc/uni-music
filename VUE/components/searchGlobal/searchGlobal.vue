<template>
	<view class="global-search flex">
		<view class="icon" @click="clickLeft">icon</view>
		<view class="input-area flex-bet flex1">
			<input
				class="input"
				focus="true"
				maxlength="10"
				@input="inputValue"
				v-model="searchKeyWord"
				@confirm="$emit('inputConfrim')"
				:placeholder="placeholder"
				placeholder-style="color:#b3b3b3"
				type="text"
			/>
			<i v-if="searchKeyWord" class="iconfont hd-left-icon icon-love reduce" @click="empty"></i>
		</view>
		<view class="icon tar" v-if="showRight" @click="$emit('clickRight')">icon</view>
	</view>
</template>

<script>
export default {
	props: {
		// 右边图标
		showRight: {
			type: Boolean,
			default: true
		},
		placeholder: {
			type: String,
			default: '音乐、视频、歌词、电台'
		}
	},
	data() {
		return {
			searchKeyWord: ''
		};
	},

	methods: {
		inputValue(e) {
			this.searchKeyWord = e.detail.value;
			this.$emit('inputVlue', this.searchKeyWord);
		},
		clickLeft() {
			// 返回上一页
			uni.navigateBack({
				delta: 1
			});
		},

		empty() {
			this.searchKeyWord = '';
			this.$emit('empty');
		}
	}
};
</script>

<style scoped>
.global-search {
	height: 100%;
	margin: 0 30rpx;
}
.global-search .icon {
	width: 100rpx;
	/* border: 1rpx solid #007AFF; */
}

.input-area,
.input {
	height: 100%;
}

.input-area {
	border-bottom: 1rpx solid #858585;
}
</style>
