<template>
	<view class="content">



		<view class="uni-padding-wrap uni-common-mt" v-if="!hasLogin">
			<image class="logo" src="../../static/me_logo.png"></image>
			<button class="login_btn" @click="goLogin" type="primary" plain="true" style="border-color: #EE2C2C;color: #EE2C2C;">登录/注册</button>
		</view>
		<view v-else="hasLogin">


			<!-- <view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-media-list">
						<view class="uni-media-list-logo">
							<image src="../../static/index_64.png"></image>
						</view>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">
								{{userName}}
								<view class="tag-view">
									<uni-tag text="标签" inverted="true" type="danger" size="small" :circle="true"></uni-tag>
								</view>
							</view>
							<view class="uni-media-list-text-bottom uni-ellipsis">
								sdddddddd
							</view>
						</view>
					</view>
				</view>
			</view> -->
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-media-list">
						<view class="uni-media-list-logo">
							<image src="../../static/index_64.png"></image>
						</view>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">
								<text style="margin-right: 10upx;">dsa</text>
								<uni-tag text="官方人员" inverted="true" type="danger" size="small" :circle="true"></uni-tag>
								<uni-tag text="艺术家" inverted="true" type="primary" size="small" :circle="true"></uni-tag>
								<uni-tag text="神" inverted="true" type="success" size="small" :circle="true"></uni-tag>
							</view>
							<!-- <view class="tag-view">
								<uni-tag text="标签" inverted="true" type="danger" size="small" :circle="true"></uni-tag>
							</view> -->
							<view class="uni-media-list-text-bottom uni-ellipsis">等等等等等等等等等等等等等等</view>
						</view>
					</view>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import uniTag from '../../components/uni-tag.vue'

	export default {
		computed: mapState(["hasLogin", "userName"]),
		data() {
			return {



			};
		},
		components: {
			uniTag
		},
		onLoad() { //判断是否是登录状态,如果是登录状态,跳转至希望的页面

		},
		methods: {

			goLogin: () => {
				uni.navigateTo({
					url: '../login/login',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.logo {
		margin-top: 100upx;
	}

	.title {
		padding: 20upx;
	}

	.login_btn {
		margin-top: 200upx;

	}
	.tag-view {
		margin: 10upx 20upx;
		display: inline-block;
	}
	.uni-media-list{
		padding: 20px 15px;
	}
</style>
