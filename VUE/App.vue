<script>
import { mapMutations } from 'vuex';
export default {
	onLaunch() {
		// 每次进入将storege里面的值赋值给store
		let userInfo = uni.getStorageInfoSync('userInfo') || '';
		if (userInfo) {
			uni.getStorage({
				key: 'userInfo',
				success: res => {
					// this.$store.commit('login', res.data);
					this.login(res.data);
				}
			});
		}
	},
	onShow: function() {
		console.log('App Show');
		// 判断用户是否有登录

		let hasLogin = uni.getStorageSync('hasLogin');
		if (hasLogin) {
			console.log(12312313);
			uni.redirectTo({
				url: '/pages/layout/layout'
			});
		}
	},
	onHide: function() {
		console.log('App Hide');
	},
	methods: {
		...mapMutations(['login'])
	}
};
</script>

<style>
@import url('./static/font/iconfont.css');
@import url('./common/animate.css');
@import url('./common/base.css');
</style>
