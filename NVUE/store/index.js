import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		playing: false
	},
	mutations: {
		set_playing(state, value) {
			state.playing = value;
		}
	}
})
export default store
