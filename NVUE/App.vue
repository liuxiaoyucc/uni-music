<script>
	import Storage from 'utils/storage.js';

	export default {
		globalData: {
			player: {},
			played: '', //保存最后一次播放的music信息, 如果为空说明一次都没播放过
			
			
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
			
			// 初始化played等信息, 底部播放操作栏
			// 包括歌曲名字, id, 链接, 歌手, 封面
			let played = Storage.sync_get(Storage.LATEST_PLAYED);
			if (played) {
				this.globalData.played = played;
			}
			// console.log(this.globalData.played);
			// let test_played = {
			// 	name: '与火星的孩子对话',
			// 	creator: '华晨宇',
			// 	cover_image: 'http://p2.music.126.net/A46ibwxycLKCLSs7jNKxPg==/109951163020886011.jpg',
			// 	time: 10, //上次播放的位置
			// }
			
			// Storage.async_set(Storage.LATEST_PLAYED, test_played, ()=> {
			// 	console.log('保存成功');
			// });
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		},
		
	}
	

</script>

<style>
	

</style>
