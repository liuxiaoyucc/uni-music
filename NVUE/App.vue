<script>

	export default {
		globalData: {
			a: 1,
			player: {}
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
