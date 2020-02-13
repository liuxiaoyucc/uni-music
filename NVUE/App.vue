<script>
	import Storage from 'utils/storage.js';
	import PlayerHelper from 'utils/player.js';
	export default {
		globalData: {
			_played: Storage.get_played(),
			played: Storage.get_played(),
			
			player: {},
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
				const player = plus.audio.createPlayer({
					autoplay: false
				});
				
				player.addEventListener('canplay', ()=> {
					console.log('on canplay');
					PlayerHelper.play();
				});
				player.addEventListener('play', ()=> {
					console.log('on play');
					this.$store.commit('set_playing', true);
				});
				player.addEventListener('pause', ()=> {
					console.log('on pause');
					this.$store.commit('set_playing', false);
				});
				player.addEventListener('stop', ()=> {
					console.log('on stop');
					this.$store.commit('set_playing', false);
				});
				player.addEventListener('ended', ()=> {
					console.log('on ended');
					this.$store.commit('set_playing', false);
				});
				player.addEventListener('error', ()=> {
					console.log('on error');
					this.$store.commit('set_playing', false);
				});
				player.addEventListener('waiting', ()=> {
					console.log('on waiting');
				});
				player.addEventListener('seeking', ()=> {
					console.log('on seeking');
				});
				player.addEventListener('seeked', ()=> {
					console.log('on seeked');
				});
				player.addEventListener('prev', ()=> {
					// 后台播放控制器上点击上一曲按钮时触发，未开启后台控制器则不触发此事件
					console.log('on prev');
				});
				player.addEventListener('next', ()=> {
					// 后台播放控制器上点击下一曲按钮时触发，未开启后台控制器则不触发此事件
					console.log('on next');
				});
			
				this.globalData.player = player;
			}
		},
	}
	

</script>

<style>
	

</style>
