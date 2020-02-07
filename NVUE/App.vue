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
