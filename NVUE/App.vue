<script>
	import Storage from 'utils/storage.js';
	export default {
		globalData: {
			_played: Storage.get_played(),
			played: Storage.get_played(),
			
			player: {},
			
			
			uid: 0,
			subcount: {},
			
		},
		onLaunch: function () {
			console.log('onLaunch');
			//全局唯一播放管理
			this.init_player();
			
			// 加载icon字体文件
			const dom = weex.requireModule('dom');
			dom.addRule('fontFace', {
				'fontFamily': "weexUiIconFont",
				'src': "url(\'http://at.alicdn.com/t/font_1211227_u4mafj3d0b.ttf\')"
			});
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		},
		methods: {
			init_player() {
				const player = uni.createInnerAudioContext();
				
				//准备完毕, 可以播放
				player.onCanplay(()=> {
					console.log('音频已准备好,可以播放');
					console.log(this.$store.state.playing);
					player.play();
					
				});
				
				//播放事件
				player.onPlay(()=> {
					console.log('音频开始播放');
					this.$store.commit('set_playing', true);
					
				});
				
				//暂停事件
				player.onPause(()=> {
					console.log('音频已暂停播放');
					this.$store.commit('set_playing', false);
				});
				
				//停止事件
				player.onStop(()=> {
					this.$store.commit('set_playing', false);
				});
				
				//自然播放结束 这里可以进行下一曲
				player.onEnded(()=> {
					this.$store.commit('set_playing', false);
				});
				
				//音频播放进度更新事件
				player.onTimeUpdate(()=> {
					
				});
				
				//音频播放错误事件
				player.onError((e)=> {
					console.log(e);
					this.$store.commit('set_playing', false);
				});
				
				//音频加载中事件，当音频因为数据不足，需要停下来加载时会触发 缓冲中
				player.onWaiting(()=> {
					
				});
				
				//音频进行 seek 操作事件 调整进度条也许会用到
				player.onSeeking(()=> {
					
				});
				
				//音频完成 seek 操作事件
				player.onSeeked(()=> {
					
				});
				
				this.globalData.player = player;
			}
		},
	}
	

</script>

<style>
	

</style>
