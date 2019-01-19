<template>
	<view class="content">
	    <image class="logo" src="../../static/logo.png"></image>
	    <view>
	        <text class="title">{{title}}</text>
	    </view>
	    
	</view>
	
</template>

<script>
	
	export default {
		

		data() {
			return {
				title: 'Heartbeat for me...'
			}
		},
		onLoad() {
		    
		},
		methods: {

		}
	}
</script>

<style scoped>
	.content {
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 400upx;
		margin-bottom: 100upx;
    }
	.title {
		font-size: 36upx;
		color: #000000;
	}
</style>
