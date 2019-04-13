<template>
	<view id="moments">

		<!-- <view class="home-pic"> -->
		<image class="home-pic" src="../../../static/fascinate/ondit/bgi.jpg">
			<view class="home-pic-base">
				<view class="top-pic">
					<!-- <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png"> -->
					<image class="header" src="../../../static/fascinate/ondit/bear.jpg"></image>
				</view>
				<view class="top-name _ellipsis">Liuxy</view>
			</view>
		</image>

		<!-- </view> -->

		<view class="moments__post">
			<view>
				<image class="post_header" src="../../../static/fascinate/ondit/header01.jpg"></image>
			</view>
			<view class="post_right">
				<text>张驰</text>
				<view id="paragraph" class="paragraph">uni-app目前是比较好</view>
				<!-- 伸张链接 -->
				<!-- <a id="paragraphExtender" class="paragraphExtender">显示全文</a> -->
				<!-- 相册 -->
				<view class="thumbnails my-gallery">
					<view class="thumbnail">
						<image class="gallery_img" src="../../../static/fascinate/ondit/header02.jpg"></image>
					</view>
					<view class="thumbnail">
						<image class="gallery_img" src="../../../static/fascinate/ondit/header02.jpg"></image>
					</view>
					<view class="thumbnail">
						<image class="gallery_img" src="../../../static/fascinate/ondit/header02.jpg"></image>
					</view>
					<view class="thumbnail">
						<image class="gallery_img" src="../../../static/fascinate/ondit/header02.jpg"></image>
					</view>
					<view class="thumbnail">
						<image class="gallery_img" src="../../../static/fascinate/ondit/header02.jpg"></image>
					</view>
				</view>
				<!-- 资料条 -->
				<view class="toolbar">
					<view class="timestamp">17小时前</view>
					<view>
						<view id="actionMenu" class="actionMenu slideIn">
							<view class="actionBtn" id="btnLike"><i class="icon icon-96"></i></view>
							<view class="actionBtn" id="btnComment"><i class="icon icon-3"></i></view>
						</view>
					</view>
					<text id="actionToggle" class="actionToggle">..</text>
				</view>
				<!-- 赞／评论区 -->
				<view class="liketext">
					<view class="icon icon-96"></view><text class="nickname">夜华</text>,<text class="nickname">孙尚香</text>
				</view>
			</view>
			<!-- 结束 post -->
		</view>
		<view class="moments__post">
			<view>
				<image class="post_header" src="../../../static/fascinate/ondit/header02.jpg"></image>
			</view>
			<view class="post_right">
				<!-- 人名链接 -->

				<text>章德帥</text>

				<!-- post内容 -->
				<view id="paragraph" class="paragraph">uni-app目前是比较好用的框架,在微信和手机中表现非常好。uni-app目前是比较好用的框架,在微信和手机中表现非常好</view>
				<!-- 伸张链接 -->
				<!-- <a id="paragraphExtender" class="paragraphExtender">显示全文</a> -->
				<!-- 相册 -->
				<view class="thumbnails my-gallery">
					<view class="thumbnail">
						<image class="gallery_img" src="../../../static/fascinate/ondit/header01.jpg"></image>
					</view>
					<view class="thumbnail">
						<image class="gallery_img" src="../../../static/fascinate/ondit/header01.jpg"></image>
					</view>

				</view>
				<!-- 资料条 -->
				<view class="toolbar">
					<view class="timestamp">17小时前</view>
					<view>
						<view id="actionMenu" class="actionMenu slideIn">
							<view class="actionBtn" id="btnLike"><i class="icon icon-96"></i></view>
							<view class="actionBtn" id="btnComment"><i class="icon icon-3"></i></view>
						</view>
					</view>
					<text id="actionToggle" class="actionToggle">..</text>
				</view>
				<!-- 赞／评论区 -->
				<view class="liketext"><i class="icon icon-96"></i><text class="nickname">夜华</text>,<text class="nickname">孙尚香</text></view>
			</view>
			<!-- 结束 post -->
		</view>

		<view class="moments__post">
			<view>
				<image class="post_header" src="../../../static/fascinate/ondit/header02.jpg"></image>
			</view>
			<view class="post_right">
				<!-- 人名链接 -->

				<text>章德帥</text>

				<!-- post内容 -->
				<view id="paragraph" class="paragraph">uni-app目前是比较好用的框架,在微信和手机中表现非常好。uni-app目前是比较好用的框架,在微信和手机中表现非常好</view>
				<!-- 伸张链接 -->
				<!-- <a id="paragraphExtender" class="paragraphExtender">显示全文</a> -->
				<!-- 相册 -->
				<view class="thumbnails my-gallery">
					<view class="thumbnail">
						<image class="gallery_img" src="../../../static/fascinate/ondit/header01.jpg"></image>
					</view>
					<view class="thumbnail">
						<image class="gallery_img" src="../../../static/fascinate/ondit/header01.jpg"></image>
					</view>

				</view>
				<!-- 资料条 -->
				<view class="toolbar">
					<view class="timestamp">17小时前</view>
					<view>
						<view id="actionMenu" class="actionMenu slideIn">
							<view class="actionBtn" id="btnLike"><i class="icon icon-96"></i></view>
							<view class="actionBtn" id="btnComment"><i class="icon icon-3"></i></view>
						</view>
					</view>
					<text id="actionToggle" class="actionToggle">..</text>
				</view>
				<!-- 赞／评论区 -->
				<view class="liketext"><i class="icon icon-96"></i><text class="nickname">夜华</text>,<text class="nickname">孙尚香</text></view>
			</view>
			<!-- 结束 post -->
		</view>
	</view>

</template>

<script>
	export default {


		data() {
			return {
				title: '功能',
				data: [],
				loadMoreText: "加载中...",
				showLoadMore: false,
				max: 0
			}
		},
		onLoad() {
			this.initData();
		},
		onUnload() {
			this.max = 0,
				this.data = [],
				this.loadMoreText = "加载更多",
				this.showLoadMore = false;
		},
		onReachBottom() {
			console.log("onReachBottom");
			if (this.max > 40) {
				this.loadMoreText = "没有更多数据了!"
				return;
			}
			this.showLoadMore = true;
			setTimeout(() => {
				this.setDate();
			}, 300);
		},
		onPullDownRefresh() {
			console.log('onPullDownRefresh');
			this.initData();
		},
		methods: {
			initData() {
				setTimeout(() => {
					this.max = 0;
					this.data = [];
					let data = [];
					this.max += 10;
					for (var i = this.max - 9; i < this.max + 1; i++) {
						data.push(i)
					}
					this.data = this.data.concat(data);
					uni.stopPullDownRefresh();
				}, 300);
			},
			setDate() {
				let data = [];
				this.max += 10;
				for (var i = this.max - 9; i < this.max + 1; i++) {
					data.push(i)
				}
				this.data = this.data.concat(data);
			}
		}
	}
</script>

<style scoped>
	@import url("../../../common/fascinate/ondit/ondit.css");
</style>
