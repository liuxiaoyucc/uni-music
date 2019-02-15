<template>
	<view class="content">
	    <!-- <image class="logo" src="../../static/logo.png"></image> -->
	    <view>
	        <text class="title">{{title}}</text>
	    </view>
	    
	</view>
	
</template>

<script>
	
	export default {
		

		data() {
			return {
				title: '探索发现'
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
</style>
