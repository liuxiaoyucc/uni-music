<template>
	<view class="content">
		<uni-drawer :visible="show" @close="$emit('closeDrawer')">
			<scroll-view class="scroll-view-y" scroll-y="true">
				<view class="user-info">
					<view class="login flex-center flex-col container" v-if="isLogin">
						<image src="https://dummyimage.com/300x300?text=A" mode="" class="avatar border-round"></image>
						<view class="info flex-bet">
							<view class="left flex">
								<view class="nickname font32">安安静静听歌</view>
								<view class="grade font24">等级</view>
							</view>
							<view class="check-in flex-center font30">
								<i class="iconfont icon-dd"></i>
								签到
							</view>
						</view>
					</view>
					<view class="not-login flex-center flex-col" v-else>
						<view class="text font24">
							<view class="flex-center">登录网易云音乐</view>
							<view class="flex-center">手机电脑多端同步,尽享海量高品质音乐</view>
						</view>
						<view class="login-btn flex-center font28">立即登录</view>
					</view>
				</view>
				<view class="banner container">banner</view>
				<view class="row-list-area flex container">
					<view class="list flex1 flex-center flex-col" @click="clickRowlist(index)" v-for="(list, index) in rowLists" :key="index">
						<i class="iconfont font40" :class="list.icon"><chat v-if="list.message" class="chat" :num="list.message" /></i>
						<view class="text font24">{{ list.name }}</view>
					</view>
				</view>

				<view class="col-list1 container harf-px-top">
					<view class="lists" v-for="(item, index) in colList1" :key="index"><list class="list" :list="item" /></view>
				</view>
				<!-- 创作者中心 -->
				<view class="creation-center container harf-px-top" v-if="isLogin">
					<view class="lists" v-for="(item, index) in colList2" :key="index"><list class="list" :list="item" /></view>
				</view>

				<view class="col-list2 container harf-px-top">
					<view class="lists" v-for="(item, index) in colList3" :key="index"><list class="list" :list="item" /></view>
				</view>
			</scroll-view>

			<view class="bottom font28 harf-px-top">
				<view class="container flex-bet">
					<view class="item flex" @click="clickBottomItem(index)" v-for="(item, index) in bottom" :key="index">
						<i class="iconfont font40" :class="item.icon"></i>
						<text>{{ item.name }}</text>
					</view>
				</view>
			</view>
		</uni-drawer>
	</view>
</template>

<script>
import chat from '@/components/chat/chat.vue';
import list from '@/components/list/list.vue';
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
export default {
	components: { uniDrawer, list, chat },
	props: {
		show: Boolean
	},
	data() {
		return {
			isLogin: false,
			rowLists: [
				{ name: '我的消息', icon: 'icon-xinfeng', message: 100 },
				{ name: '我的好友', icon: 'icon-xinfeng' },
				{ name: '听歌识曲', icon: 'icon-xinfeng' },
				{ name: '个性装扮', icon: 'icon-xinfeng' }
			],
			colList1: [
				{ name: '演出', icon: 'icon-piao', newText: '张杰', newImg: '' },
				{ name: '商城', icon: 'icon-piao' },
				{ name: '附近的人', icon: 'icon-piao' },
				{ name: '游戏推荐', icon: 'icon-piao' },
				{ name: '口袋铃声', icon: 'icon-piao', newText: '铃声年榜出炉啦', newImg: '' }
			],
			colList2: [{ name: '创作者中心', icon: 'icon-piao' }],
			colList3: [
				{ name: '我的订单', icon: 'icon-piao' },
				{ name: '定时停止播放', icon: 'icon-piao' },
				{ name: '扫一扫', icon: 'icon-piao' },
				{ name: '音乐闹钟', icon: 'icon-piao' },
				{ name: '在线听歌免流量', icon: 'icon-piao' },
				{ name: '优惠券', icon: 'icon-piao' },
				{ name: '青少年模式', icon: 'icon-piao', value: '未开启' }
			],
			bottom: [{ name: '夜间模式', icon: 'icon-piao' }, { name: '设置', icon: 'icon-piao' }, { name: '退出', icon: 'icon-piao' }]
		};
	},

	methods: {
		clickRowlist(index) {
			// 我的消息区域 click
		},
		clickBottomItem(index) {}
	}
};
</script>

<style scoped>
.container {
	margin: 0 35rpx;
}

.scroll-view-y {
	height: calc(100vh - 100rpx);
}
.user-info {
	height: 25vh;
	background: #ebebeb;
}

.user-info .login,
.user-info .not-login {
	height: 100%;
}

.login {
	align-items: flex-start;
}

.login .info {
	width: 100%;
}

.login .info .check-in {
	color: #ffffff;
	background: #ec3739;
	width: 140rpx;
	height: 50rpx;
	border-radius: 30rpx;
}
.login .info .check-in .iconfont {
	margin-right: 6rpx;
}

.login .info .nickname {
	margin-right: 20rpx;
}

.login .avatar {
	height: 120rpx;
	width: 120rpx;
	margin-bottom: 20rpx;
}

.not-login .login-btn {
	border-radius: 50rpx;
	border: 1rpx solid #c9c9c9;
	height: 50rpx;
	width: 200rpx;
	margin-top: 20rpx;
}

.banner {
	height: 110rpx;
	background: #000000;
	border-radius: 10rpx;
	position: absolute;
	width: calc(100% - 70rpx);
	top: calc(25vh - 50rpx);
}

.row-list-area .iconfont {
	margin-bottom: 10rpx;
	position: relative;
	color: #f0231b;
}

.row-list-area .chat {
	position: absolute;
	left: 25rpx;
	top: -14rpx;
}
.row-list-area {
	margin-top: 100rpx;
}
.row-list-area,
.col-list1,
.creation-center {
	padding: 20rpx 0;
}

.lists .list {
	height: 80rpx;
}

.bottom {
	height: 100rpx;
	position: fixed;
	bottom: 0;
	width: 100%;
}

.bottom .container {
	height: 100%;
}

.bottom .item .iconfont {
	margin-right: 20rpx;
}
</style>
