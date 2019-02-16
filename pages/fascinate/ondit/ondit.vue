<template>
	<view id="moments">

		<view class="home-pic">
			<view class="home-pic-base">
				<view class="top-pic">
					<!-- <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png"> -->
					<image class="header" src="../../../static/fascinate/ondit/bear.jpg"></image>
				</view>
				<view class="top-name _ellipsis">Liuxy</view>
			</view>
		</view>

		<view class="moments__post">
			<view >
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
			initData(){
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
	.gallery_img {
		width: 100%;
		height: 100%
	}

	.header {
		width: 100%;
		height: 100%
	}

	.post_header {
		width: 45px !important;
		height: 45px !important
	}

	#moments {
		background: #fff
	}

	#moments .home-pic {
		width: 100%;
		margin-top: -90px;
		position: relative;
		height: 370px;
		z-index: 5;
		background: url(../../../static/fascinate/ondit/bgi.jpg) no-repeat center center;
		background-size: cover;
		margin-bottom: 20px
	}

	#moments .home-pic-base {
		position: absolute;
		left: -30px;
		bottom: -20px;
		width: 100%;
		height: 70px;
		padding: 0 15px
	}

	#moments .home-pic-base .top-pic {
		width: 140px;
		height: 140px;
		padding: 3px;
		-webkit-transform: scale(0.5);
		-ms-transform: scale(0.5);
		transform: scale(0.5);
		-webkit-transform-origin: 100% 0%;
		-ms-transform-origin: 100% 0%;
		transform-origin: 100% 0%;
		background-color: #ffffff;
		border: 1px solid #cccccc;
		float: right
	}

	#moments .home-pic-base .top-name {
		position: absolute;
		left: 20px;
		right: 105px;
		top: 10px;
		font-size: 20px;
		text-align: right;
		color: #ffffff;
		overflow: hidden
	}

	#moments .moments__post {
		background: #fff;
		display: block;
		border-bottom: 1px solid #f2eeee;
		padding: 10px 15px;
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
	}

	#moments .moments__post::before {
		content: none
	}

	#moments .moments__post .post_right {
		font-size: 15px;
		display: table-cell;
		padding-left: 10px;
		width: 100%;
	}

	/* #moments .moments__post .post_right .paragraphExtender {
		margin: 5px auto;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex
	} */

	#moments .moments__post .title {
		color: #094dcc
	}

	#moments .moments__post .thumbnails {
		width: 100%;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap
	}

	#moments .moments__post .thumbnails .thumbnail {
		width: 150upx;
		height: 150upx;
		margin: 3px;
		margin-left: 0px;
		background: #757575;
		overflow: hidden
	}

	

	#moments .moments__post .toolbar {
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center
	}

	#moments .moments__post .toolbar .timestamp {
		color: #757575;
		font-size: 13px
	}

	#moments .moments__post .actionMenu {
		position: absolute;
		height: 40px;
		background-color: #4e5156;
		border-radius: 5px;
		z-index: 5;
		top: -10px;
		right: 20px;
		display: none;
		-webkit-justify-content: space-around;
		-ms-flex-pack: distribute;
		justify-content: space-around;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center
	}

	#moments .moments__post .actionToggle {
		width: 15px;
		height: 15px;
		background: #92abd4;
		margin-left: auto;
		border-radius: 1px;
		position: absolute;
		right: 0;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center
	}

	#moments .moments__post .liketext {
		margin-top: 10px;
		width: 100%;
		background-color: #f3f3f5;
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap
	}

	#moments .moments__post .liketext .nickname {
		color: #094dcc;
		font-size: 13px
	}
</style>
