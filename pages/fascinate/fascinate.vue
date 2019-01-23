<template>
	<view class="content">
	    <image class="logo" src="../../static/idea_200.png"></image>
	    
	    
	    <view class="uni-padding-wrap uni-common-mt">
	    	<view class="uni-flex uni-row">
	    		<view class="text" style="flex: 1;color: #FFFFFF; font-size: 50upx;height: 250upx;display: flex; justify-content: center;align-items: center;background-color: #F76260;">吃啥?!</view>
	    		<!-- <view class="text" style="flex: 1;font-size: 50upx;height: 250upx;display: flex; justify-content: center;align-items: center;">吃啥?!</view> -->
	    		<view class="uni-flex uni-column" style="flex: 1;justify-content: space-between;">
	    			<view class="text" style="display: flex;height: 120upx;justify-content: center;align-items: center;color: #FFFFFF;background-color: #F76260;">写文章</view>
	    			<!-- <view class="text" style="flex: 1;">日程表</view> -->
					<view class="text" style="display: flex;height: 100upx;justify-content: center;align-items: center;color: #FFFFFF;background-color: #F76260;">日程表</view>

	    		</view>
	    	</view>
			
			<view class="uni-flex uni-row">
				<view class="uni-flex uni-column" style="flex: 1;justify-content: space-between;">
					<view class="text" style="display: flex;height: 120upx;justify-content: center;align-items: center;background-color: #FFB400;color: #FFFFFF;">我的</view>
					<!-- <view class="text" style="flex: 1;">日程表</view> -->
					<view class="text" style="display: flex;height: 100upx;justify-content: center;align-items: center;background-color: #FFB400;color: #FFFFFF;">随便看看</view>
							
				</view>
				<view class="text" style="flex: 1;font-size: 50upx;height: 250upx;display: flex; justify-content: center;align-items: center;background-color: #FFB400;color: #FFFFFF;">写文章</view>				
			</view>
	    	
	    	<view class="uni-flex uni-row">
	    		<view class="text" style="flex: 1;height: 250upx;display: flex; justify-content: center;align-items: center;">
	    			
	    		</view>
	    	</view>
			
	    	
	    	<view class="uni-flex uni-row">
	    		<view class="text" style="flex: 1;height: 250upx;display: flex; justify-content: center;align-items: center;">
	    		    <navigator url="../rice-editor/rice-editor"></navigator>	
	    		</view>
	    		<view class="text" style="flex: 1;height: 250upx;display: flex; justify-content: center;align-items: center;"></view>
	    	</view>
	    	
	    	<view class="uni-flex uni-row">
	    		<view class="text" style="flex: 1;height: 250upx;display: flex; justify-content: center;align-items: center;"></view>
	    		<view class="text" style="flex: 1;height: 250upx;display: flex; justify-content: center;align-items: center;"></view>
	    	</view>
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
        margin-top: 20upx;
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
