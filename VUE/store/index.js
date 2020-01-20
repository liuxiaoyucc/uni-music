import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {}

	},
	mutations: {
		login(state, userInfo) {
			state.userInfo = userInfo || {}
			state.hasLogin = true
			uni.setStorage({
				key: "userInfo",
				data: userInfo
			})
			uni.setStorage({
				key: "hasLogin",
				data: true
			})

		},
		logout(state) {
			userInfo = {}
			hasLogin: false,
				uni.removeStorage({
					key: "userInfo"
				})
		}

	},
	actions: {


	}
})

export default store
