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
			        <m-input :account="account" @clearAccount="clearAccount($event)" class="m-input" type="text" clearable focus v-model="account" placeholder="Email"></m-input>
			    </view>
			    <view class="input-row">
			        <!-- <text class="title"></text> -->
			        <m-input type="password" displayable v-model="password" placeholder="Password"></m-input>
			    </view>
			</view>
			<view class="btn-row">
			    <button type="primary" class="primary" @tap="register">Sign up</button>
			</view>
			
			
		
		</view>
		
		
	</view>
</template>

<script>
	
	import service from '../../service.js';
	import mInput from '../../components/m-input.vue'


	export default {
		data() {
			return {
				title: '',
				account: '',
				password: '',
			}
		},
		components: {
		    mInput
		},
		
		methods: {
			register() {
			    /**
			     * 客户端对账号信息进行一些必要的校验。
			     * 实际开发中，根据业务需要进行处理，这里仅做示例。
			     */
			    if (this.account.length < 3 || !~this.account.indexOf('@')) {
			        uni.showToast({
			            icon: 'none',
			            title: '邮箱地址不合法'
			        });
			        return;
			    }
			    if (this.password.length < 6) {
			        uni.showToast({
			            icon: 'none',
			            title: '密码最短为 6 个字符'
			        });
			        return;
			    }
			    
			    const data = {
			        account: this.account,
			        password: this.password,
			    }
			    service.addUser(data);
			    uni.showToast({
			        title: '注册成功'
			    });
			    uni.navigateBack({
			        delta: 1
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
		font-size: 28upx;
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
