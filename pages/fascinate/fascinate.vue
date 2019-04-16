<template>
	<view class="content">
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-flex uni-column">
				<view class="flex-item flex-item-V uni-bg-red">猿历</view>
				<view class="flex-item flex-item-V uni-bg-green">饭点</view>
				<view class="flex-item flex-item-V uni-bg-blue">...</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		onUnload() {
			
		},
		onPullDownRefresh() {
			console.log('onPullDownRefresh');
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.content {
		text-align: center;
		
	}
    .logo{
        height: 100upx;
        width: 100upx;
        margin-top: 100upx;
    }
	.title {
		font-size: 36upx;
		color: #000000;
	}
	.flex-item {
		width: 33.3%;
		height: 250upx;
		text-align: center;
		line-height: 250upx;
	}
	
	.flex-item-V {
		width: 100%;
		height: 150upx;
		text-align: center;
		line-height: 150upx;
	}
	.text{
		margin:15upx 10upx;
		padding: 0 20upx;
		background-color: #ebebeb;
		height: 70upx;
		line-height: 70upx;
		text-align: center;
		color: #777;
		font-size: 26upx;
		border-radius: 20upx;
	}
	.desc{
		/* text-indent: 40upx; */
	}
</style>
