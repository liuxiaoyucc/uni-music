import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		played: '', 
		playing: false, // 全局播放状态
		
		play_mode: 'sequence', //single, random, sequence 
		uid: '', //网易云用户id
		user_info: {}, // 网易云用户详情
		subcount: {}, // 各种计数
		likelist: [], //喜欢的歌曲列表ids
		
		current_playlist: [], // 当前播放列表, 应该两种模式, 播放历史和歌曲所在清单
	},
	mutations: {
		push_current_playlist(state, item) {
			state.current_playlist.push(item);
			Storage.set_current_playlist(state.current_playlist);
		},
		set_current_playlist(state, playlist) {
			state.current_playlist = playlist;
			Storage.set_current_playlist(state.current_playlist);
		},
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
		set_likelist(state, likelist) {
			state.likelist = likelist;
		},
		logout(state) {
			state.played = '';
			state.playing = false;
			state.uid = '';
			state.user_info = {};
			state.subcount = {}; // 各种计数
			state.likelist = [];
			state.current_playlist = [];
			Storage.set_is_login(false);
		},
		login(state, uid) {
			state.uid = uid;
			Storage.set_is_login(true);
		},
		set_play_mode(state, mode) {
			state.play_mode = mode;
			Storage.set_play_mode(state.play_mode);
		}
	}
})

import Storage from '../utils/storage.js';
export default store
