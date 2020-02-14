import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		played: '', 
		playing: false, // 全局播放状态
		
		uid: '', //网易云用户id
		user_info: {}, // 网易云用户详情
		subcount: {}, // 各种计数
	},
	mutations: {
		set_played(state, played) {
			state.played = played;
			Storage.set_played(played);
		},
		
		set_playing(state, playing) {
			state.playing = playing;
		},
		set_uid(state, uid) {
			state.uid = uid;
		},
		set_user_info(state, user_info) {
			state.user_info = user_info;
		},
		set_subcount(state, subcount) {
			state.subcount = subcount;
		},
		logout(state) {
			state.played = '';
			state.playing = false;
			state.uid = '';
			state.user_info = {};
			state.subcount = {}; // 各种计数
		}
	}
})

import Storage from '../utils/storage.js';
export default store
