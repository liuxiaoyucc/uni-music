<template>
	<view class="logon">
		<!-- 输入账号 -->
		<view class="mobile" v-if="status == 0">
			<view class="warn font24">未注册手机号登录后将自动创建账号</view>
			<view class="input-box flex">
				<view class="state font28 " :class="{ active: mobile }">+86</view>
				<view class="flex-bet flex1">
					<input type="number" focus="true" v-model="mobile" maxlength="11" class="tel-input" placeholder="请输入手机号" placeholder-style="color:#cccccc" />
					<i class="icon-back iconfont" v-show="mobile" @click="mobile = ''"></i>
				</view>
			</view>
			<view class="btn flex-center font34" @click="next">下一步</view>
		</view>
		<!-- 输入密码 -->
		<view class="password" v-if="status == 1">
			<view class="input-box flex-bet">
				<input type="password" focus="true" v-model="password" maxlength="20" class="" placeholder="请输入密码" placeholder-style="color:#cccccc" />
				<text class="font20" @click="status = 1">忘记密码?</text>
			</view>
			<view class="btn flex-center font34" @click="login">登录</view>
		</view>

		<!-- 忘记密码 -->
		<view class="forget" v-if="status == 2">
			<view class="input-box flex-bet">
				<input type="password" focus="true" v-model="password" maxlength="20" class="" placeholder="请输入密码" placeholder-style="color:#cccccc" />
				<text class="font20" @click="status = 2">忘记密码?</text>
			</view>
			<view class="btn flex-center font34" @click="login">登录</view>
		</view>
	</view>
</template>

<script>
import { IsPhone } from '../../utils/util.js';
import { User } from '../../models/user.js';
export default {
	data() {
		return {
			mobile: '',
			password: '',
			status: 0
		};
	},
	onBackPress(e) {
		if (this.status) {
			this.status--;
			return true;
		}
		uni.navigateBack({
			delta: 1
		});
	},
	methods: {
		next() {
			if (this.validate()) {
				this.checkPhoneExist();
			}
		},

		async login() {
			const result = await User.phoneLogin(this.mobile, this.password);
			uni.redirectTo({
				url: '../layout/layout'
			});
			this.$store.commit('login', result.profile);
		},

		async checkPhoneExist() {
			// 检测手机号是否已注册
			const result = await User.checkPhone(this.mobile);
			if (result.exist == 1) {
				this.status = 1;
			} else {
				// 未注册
				uni.navigateTo({
					url: '../sendCode/sendCode'
				});
			}
		},

		validate() {
			// 手机号的验证
			if (!this.mobile) {
				this.showToast('请输入手机号');
				return false;
			}

			if (!IsPhone(this.mobile)) {
				this.showToast('请输入11位数字的手机号');
				return false;
			}
			return true;
		},

		showToast(msg) {
			// #ifdef APP-PLUS
			plus.nativeUI.toast(msg);
			// #endif
		}
	}
};
</script>

<style scoped>
.logon {
	margin: 0 30rpx;
	height: 100vh;
}

.mobile,
.password {
	height: 100%;
}
.mobile .warn {
	color: #a5a5a5;
	margin: 40rpx 0;
}
.mobile .input-box {
	border-bottom: 1rpx solid #cccccc;
	margin: 100rpx 0;
}

.mobile .input-box .active {
	color: #000000;
}
.mobile .state {
	margin-right: 20rpx;
	color: #e5e5e5;
}
input {
	caret-color: red;
}
.btn {
	height: 70rpx;
	border-radius: 100rpx;
	background: #fe3a3b;
	color: #ffffff;
}

.password .input-box {
	border-bottom: 1rpx solid #cccccc;
	margin: 140rpx 0 80rpx;
}

.password .input-box text {
	color: #3982ff;
}
</style>
