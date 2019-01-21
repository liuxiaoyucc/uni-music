<template>
	<view class="content">
		
		<view class="top">
			<image class="logo" src="../../static/logof.png"></image>
			<view>
			    <text class="title">{{title}}</text>
			</view>
		</view>
		<view class="uni-card">
			<view class="input-group">
			    <view class="input-row border">
			        <!-- <text class="title"></text> -->
			        <m-input @clearAccount="clearAccount($event)"  type="text" clearable focus  v-model="email" placeholder="Email"></m-input>
			    </view>
			</view>
			<view class="btn-row">
			    <button type="primary" class="primary" @tap="findPassword">Send</button>
			</view>
			
			
		
		</view>
		
		
	</view>
</template>

<script>
	import service from '../../service.js';
	import mInput from '../../components/m-input.vue';
	
	export default {
	    components: {
	        mInput
	    },
	    data() {
	        return {
				title: '我们将向您的注册邮箱发送一封邮件,请注意查收',
	            email: ''
	        }
	    },
	    methods: {
	        findPassword() {
	            /**
	             * 仅做示例
	             */
	            if (this.email.length < 3 || !~this.email.indexOf('@')) {
	                uni.showToast({
	                    icon: 'none',
	                    title: '邮箱地址不合法',
	                });
	                return;
	            }
	            uni.showToast({
	                icon: 'none',
	                title: '已发送重置邮件至注册邮箱，请注意查收。',
	                duration: 3000
	            });
	        },
			clearAccount(account){
				this.account = account
			}
	    }
	}
</script>

<style scoped>
	.uni-card{
		height:60vh;
		background-color: #FFFFFF;
	}
	.top{
		text-align: center;
		height: 30vh;
	}
	
	.logo{
	    height: 120upx;
	    width: 120upx;
	    margin-top: 10vh;
	}
	.title {
		font-size: 20upx;
		color: #000000;
	}
	.action-row {
		font-size: 24upx;
	    display: flex;
	    flex-direction: row;
	    justify-content: center;
	}
	
	.action-row navigator {
	    color: #007aff;
	    padding: 0 20upx;
	}
	
	.oauth-row {
	    display: flex;
	    flex-direction: row;
	    justify-content: center;
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	}
	
	.oauth-image {
	    width: 100upx;
	    height: 100upx;
	    border: 1upx solid #dddddd;
	    border-radius: 100upx;
	    margin: 0 40upx;
	    background-color: #ffffff;
	}
	
	.oauth-image image {
	    width: 60upx;
	    height: 60upx;
	    margin: 20upx;
	}
	
	/* #ifdef MP-BAIDU */
	page {
	    width: 100%;
	    height: 100%;
	    display: block;
		min-height: 100%;
		display: flex;
	}
	
	swan-template {
	    width: 100%;
	    min-height: 100%;
	    display: flex;
	}
	
	/* #endif */
	
	.content {
	    display: flex;
	    flex: 1;
	    flex-direction: column;
	    background-color: 	#FFFFFF;
	    padding: 20upx;
	}
	
	.input-group {
	    /* background-color: #FFFFFF; */
	    margin-top: 40upx;
	    position: relative;
	}
	
	.input-group::before {
	    position: absolute;
	    right: 0;
	    top: 0;
	    left: 0;
	    height: 1upx;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	    background-color: #FFFFFF;
	}
	
	.input-group::after {
	    position: absolute;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    height: 1upx;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	    background-color: #FFFFFF;
	}
	
	.input-row {
	    display: flex;
	    flex-direction: row;
	    position: relative;
		/* border:1px solid #FFC125; */
		-moz-border-radius:5px;/*Geckobrowsers*/
		-webkit-border-radius:5px;/*Webkitbrowsers*/
		border-radius:5px;
		border: 1upx solid #FFFFFF;
		padding: 5upx 5upx;
		margin: 20upx 20upx;
	}
	
	.input-row .title {
	    width: 20%;
	    height: 50upx;
	    min-height: 50upx;
	    padding: 15upx 0;
	    padding-left: 30upx;
	    line-height: 50upx;
	}
	
	.input-row.border::after {
	    position: absolute;
	    right: 0;
	    bottom: 0;
	    left: 15upx;
	    height: 1upx;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	    background-color: #FFFFFF;
	}
	
	.btn-row {
	    margin-top: 50upx;
	    padding: 20upx;
	}
	
	button.primary {
	    background-color: #FFC125;
	}
</style>
