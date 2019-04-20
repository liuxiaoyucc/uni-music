<script>

	export default {
		
		onLaunch: function () {
			console.log('onLaunch');
			uni.setStorageSync('_config', this.$config.systemInfo)
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
	@import './common/uni.css';

</style>
