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
			this.globalData.player = uni.createInnerAudioContext();
			
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
		}
	}
	

</script>

<style>
	

</style>
