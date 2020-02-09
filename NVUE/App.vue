<script>

	export default {
		globalData: {
			player: {},
			
			uid: 0,
			subcount: {},
		},
		onLaunch: function () {
			console.log('onLaunch');
			this.globalData.player = uni.createInnerAudioContext();
			
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
		
	}
	

</script>

<style>
	

</style>
