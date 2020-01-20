<template>
	<view class="content">
		<view class="logo flex-center">
			<view class="logo-bg flex-center "><image src="../../../static/logo.png" mode=""></image></view>
		</view>
		<view class="bottom flex-center">
			<!-- 弹出的提醒 -->
			<view class="alert font24" v-if="alertShow">
				<view class=" tac">请先勾线同意《用户协议》《隐私政策》《儿</view>
				<view class="tac">童隐私政策</view>
			</view>
			<view class="btn flex-center sign" @click="login">手机号登录</view>
			<view class="btn flex-center into" v-if="argu" @click="into">立即体验</view>
			<view class="other-login flex-aro">
				<view class="item flex-center" v-for="(item, index) in otherLogin" :key="index"><image :src="item.icon" mode=""></image></view>
			</view>
			<view class="agreement font24 animated " :class="{ shake: btnCkick && !isChecked }">
				<checkbox-group @change="change">
					<label>
						<checkbox class="checkbox" value="checkbox" :checked="isChecked" color="#ff7d70" background="red" style="transform:scale(0.5)" />
						同意
					</label>
					<text>《用户协议》</text>
					<text>《隐私政策》</text>
					<text>《儿童隐私政策》</text>
				</checkbox-group>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			alertShow: false,
			isChecked: false,
			btnCkick: false,
			argu: true,
			otherLogin: [
				{
					icon: '../../../static/other-login/wechat.png'
				},
				{
					icon: '../../../static/other-login/qq.png'
				},
				{
					icon: '../../../static/other-login/weibo.png'
				},
				{
					icon: '../../../static/other-login/yi.png'
				}
			]
		};
	},
	computed: {},
	onLoad(options) {
		options.argu ? (this.argu = false) : '';
	},
	methods: {
		change(e) {
			e.target.value.length ? (this.isChecked = true) : '';
		},
		login() {
			if (this.validate()) {
				uni.navigateTo({
					url: '../login/login'
				});
			}
		},
		into() {
			console.log(this.isChecked, 114);
			if (this.validate()) {
				// 进入首页
				uni.reLaunch({
					url: '/pages/layout/layout'
				});
			}
		},

		//验证是否勾选用户协议
		validate() {
			this.btnCkick = true;
			if (this.isChecked) {
				return true;
			}
			this.alertShow = true;
			setTimeout(() => {
				this.alertShow = false;
				this.btnCkick = false;
			}, 1000);
		}
	}
};
</script>

<style scoped>
.content {
	background: #dc2c1d;
	height: 100vh;
	flex-direction: column;
}
.logo {
	height: 50vh;
}
.logo-bg {
	background: #f12a23;
	border-radius: 50%;
	height: 150rpx;
	width: 150rpx;
}
.logo image {
	width: 100rpx;
	height: 100rpx;
}

.bottom {
	flex-direction: column;
	height: 50vh;
	justify-content: flex-end;
}

.bottom .alert {
	border: 1rpx solid rgba(0, 0, 0, 0.1);
	width: 500rpx;
	border-radius: 20rpx;
	padding: 10rpx 20rpx;
	color: #000000;
	background: #ffffff;
	position: absolute;
	bottom: 180rpx;
}
.bottom .btn {
	height: 80rpx;
	border-radius: 100rpx;
	width: 600rpx;
	border: 1rpx solid #fa594d;
	font-size: 34rpx;
}

.bottom .sign {
	color: #f12a23;
	background: #ffffff;
}

.bottom .into {
	color: #ffffff;
	margin-top: 30rpx;
}

.bottom .other-login {
	width: 500rpx;
	margin: 50rpx 0;
}
.bottom .other-login .item {
	border-radius: 50%;
	border: 1rpx solid #ffffff;
	height: 60rpx;
	width: 60rpx;
}
.other-login image {
	height: 40rpx;
	width: 40rpx;
}
.bottom .agreement {
	margin-bottom: 30rpx;
	color: #ff7d70;
}

.bottom .agreement text {
	color: #ffffff;
}
</style>
