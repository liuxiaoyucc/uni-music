<template>
	<view class="content">
	    <image class="logo" src="../../static/me_200.png"></image>
	    <view>
	        <text class="title">{{title}}</text>
	    </view>
	    
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:"我为什么如此迷人"
			};
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
        margin-top: 20upx;
		
    }
	.title {
		font-size: 36upx;
		color: #000000;
	}
</style>
