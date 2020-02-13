import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		playing: false, // 全局播放状态
		
		uid: '', //网易云用户id
		user_info: {}, // 网易云用户详情
		subcount: {}, // 各种计数
	},
	mutations: {
		set_playing(state, playing) {
			state.playing = playing;
		},
		set_user_info(state, user_info) {
			state.uid = user_info.profile.userId
			state.user_info = user_info;
		},
		set_subcount(state, subcount) {
			state.subcount = subcount;
		},
		logout() {
			// 登出操作, 
			// 1. 清空state关于登录的信息
			// 2. 清空storage
		}
	}
})
export default store
