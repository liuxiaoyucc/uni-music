<template>
	<view class="content">
	    <view class="page">
	    	
	    	<view class="uni-card">
	    		<view class="uni-list">
	    			<view class="uni-list-cell-divider">
	    				娱乐
	    			</view>
	    			<view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover" @tap="goOnDit">
						
	    				<view class="uni-list-cell-navigate uni-navigate-right">
	    					他她说
	    				</view>
	    			</view>
	    			<!-- <view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
	    				<view class="uni-list-cell-navigate uni-navigate-right">
	    					Item2
	    				</view>
	    			</view> -->
	    			<!-- <view class="uni-list-cell-divider">
	    				右侧带数字角标
	    			</view> -->
	    			<!-- <view class="uni-list-cell" hover-class="uni-list-cell-hover">
	    				<view class="uni-list-cell-navigate">
	    					朋友圈
	    					<uni-badge text="1" type="danger"></uni-badge>
	    				</view>
	    			</view> -->
	    			<!-- <view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
	    				<view class="uni-list-cell-navigate">
	    					朋友圈
	    					<uni-badge text="99+" type="danger"></uni-badge>
	    				</view>
	    			</view> -->
	    			<!-- <view class="uni-list-cell-divider">
	    				右侧带数字角标+箭头
	    			</view> -->
	    			<!-- <view class="uni-list-cell" hover-class="uni-list-cell-hover">
	    				<view class="uni-list-cell-navigate uni-navigate-right uni-navigate-badge">
	    					Item1
	    					<uni-badge text="123" type="success"></uni-badge>
	    				</view>
	    			</view> -->
	    			<!-- <view class="uni-list-cell uni-list-cell-last" hover-class="uni-list-cell-hover">
	    				<view class="uni-list-cell-navigate uni-navigate-right uni-navigate-badge">
	    					朋友圈
	    					<uni-badge text="99+" type="primary"></uni-badge>
	    				</view>
	    			</view> -->
	    		</view>
	    	</view>
	    </view>
	    
	</view>
	
</template>

<script>
	import uniBadge from "../../components/uni-badge.vue";
	
	export default {
		
		data() {
			return {
				title: '探索发现'
			}
		},
		onLoad() {
		    
		},
		methods: {
			goOnDit: () => {
				uni.navigateTo({
					url: '../fascinate/ondit/ondit',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		components:{
			uniBadge
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
