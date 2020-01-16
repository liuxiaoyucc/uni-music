<template>
	<view class="search">
		<view class="status_bar"><!-- 状态栏 --></view>
		<!-- top 搜索栏 -->
		<view class="top container flex">
			<view class="icon">icon</view>
			<input class="input flex1" focus="true" @input="inputValue" @confirm="inputConfirm" :placeholder="placeholder" placeholder-style="color:#b3b3b3" type="text" />
			<view class="icon">icon</view>
		</view>
		<!-- 模糊搜索列表 -->
		<view class="fuzzy" v-if="fuzzyLists.length">
			<view class="default list">搜索"{{ searchKeyWord }}"</view>
			<view class="list harf-px-top flex" v-for="(list, index) in fuzzyLists" :key="index">{{ list }}</view>
		</view>

		<view class="main">
			<scroll-view class="scroll-view-y" scroll-y="true" @scroll="scroll">
				<!-- ad -->
				<view class="ad flex-center container">ad</view>
				<!-- history -->
				<view class="history" v-if="records.length">
					<view class="title flex-bet container">
						<view class="text font30 fontb">历史记录</view>
						<i class="iconfont hd-left-icon icon-love" @click="open"></i>
					</view>
					<!-- 搜索 记录 -->
					<scroll-view class="scroll-view-x  records" scroll-x="true">
						<view class="record font28" v-for="(item, index) in records" :key="index">{{ item }}</view>
					</scroll-view>
				</view>
				<!-- 热搜榜 -->
				<view class="hot">
					<view class="title flex-bet container"><view class="text font30 fontb">热搜榜</view></view>
					<view class="hot-lists container">
						<view class="list flex-bet" v-for="(list, index) in hotLists" :key="index">
							<view class="left flex">
								<view class="rank-num" :class="{ red: index <= 2 }">{{ index + 1 }}</view>
								<view class="info">
									<view class="hd">
										<view class="search-word font28 flex" :class="{ fontb: index <= 2 }">{{ list.searchWord }}</view>
									</view>

									<view class="content font24">{{ list.content }}</view>
								</view>
							</view>
							<view class="score font24">{{ list.score }}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<uni-popup ref="popup" type="center">
			<view class="pop-up font26">
				<view class="text">确认清空全部历史记录?</view>
				<view class="btns flex">
					<view class="cancel btn" @click="close">取消</view>
					<view class="affirm btn" @click="affirm">清空</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import { Search } from '../../models/search.js';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
export default {
	components: { uniPopup },
	data() {
		return {
			hotLists: [],
			fuzzyLists: [1, 2, 3, 4], // 模糊搜索列表
			placeholder: '音乐、视频、歌词、电台',
			records: ['杀死哪个石家庄人', '1', '哈哈哈', 'order', '杀死哪个石家庄人'],
			searchKeyWord: '' //
		};
	},
	mounted() {
		this.init();
	},
	methods: {
		scroll() {},
		async init() {
			// 默认搜索关键词
			const searchWord = await Search.getSearchDefault();
			// 获取热搜列表
			const hotLists = await Search.getSearchHotDetail();
			this.placeholder = searchWord.data.realkeyword;
			this.hotLists = hotLists.data;
		},
		inputValue(e) {
			// 搜索框输入
			this.searchKeyWord = e.detail.value;
		},
		inputConfirm() {
			// 开始搜索 没输入关键词为默认
			let keyWord = '';
			if (!this.searchKeyWord) {
				console.log('no');
			}
		},

		open() {
			// popup open
			this.$refs.popup.open();
		},
		close() {
			// popup close
			this.$refs.popup.close();
		},
		affirm() {
			//确认清空历史记录
			this.records = [];
			this.close();
		}
	}
};
</script>

<style scoped>
.container {
	margin: 0 30rpx;
}

.top {
	height: 75rpx;
}
.top .input {
	height: 100%;
	border-bottom: 1rpx solid #858585;
}

.top .icon {
	width: 100rpx;
}

.main {
	height: calc(100vh - 75rpx - var(--status-bar-height));
}

.main .scroll-view-y {
	height: 100%;
}

.ad {
	border: 1rpx solid #dcdbdb;
	border-radius: 10rpx;
	background: #f6f5f0;
	height: 100rpx;
	color: lightcoral;
	margin: 40rpx 30rpx 40rpx;
}

.main .history .records {
	white-space: nowrap;
	margin-left: 30rpx;
	margin: 20rpx 30rpx 60rpx;
}

.history .records .record {
	display: inline-block;
	margin-right: 20rpx;
	background: #f3f3f3;
	padding: 10rpx 20rpx;
	border-radius: 20rpx;
}

.hot .rank-num.red {
	color: #f73f3d !important;
}

.hot .hot-lists .list {
	margin: 30rpx 0;
}

.hot .hot-lists .rank-num {
	color: #999999;
	margin-right: 30rpx;
}

.hot .hot-lists .content {
	color: #a3a3a3;
	margin-top: 10rpx;
}

.hot .hot-lists .score {
	color: #dedede;
}

.pop-up {
	background: #ffffff;
	border-radius: 10rpx;
	width: calc(650rpx - 30rpx);
	padding: 40rpx 30rpx;
	color: #999999;
}

.pop-up .btns {
	margin-top: 40rpx;
	color: #e24647;
	justify-content: flex-end;
}

.pop-up .btns .btn {
	width: 150rpx;
	text-align: center;
}

.fuzzy {
	position: fixed;
	z-index: 99;
	background: #ffffff;
	width: 700rpx;
	left: 30rpx;
	right: 30rpx;
	top: calc(95rpx + var(--status-bar-height));
	box-shadow: 0rpx -2rpx 10rpx 2rpx #dedede, 0 2rpx 10rpx 2rpx #dedede, -2rpx 0rpx 10rpx 2rpx #dedede, 0rpx 2rpx 10rpx 2rpx #dedede;
}

.fuzzy .list {
	height: 60rpx;
}
</style>
