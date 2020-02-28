// 缓存统一管理

let Storage = {}

const LATEST_PLAYED = 'latest_played'; //最后一个播放记录
const CURRENT_PLAYLIST = 'current_playlist';

Storage.get_played = function() {
	return get(LATEST_PLAYED);
}

Storage.set_played = function(v) {
	set(LATEST_PLAYED, v);
	return;
}
Storage.get_current_playlist = function() {
	return get(CURRENT_PLAYLIST);
}

Storage.set_current_playlist = function(v) {
	set(CURRENT_PLAYLIST, v);
	return;
}

function set(k, v) {
	try {
	    uni.setStorageSync(k, v);
	} catch (e) {
	    // error
	}
	return;
}

function get(k) {
	try {
	    return uni.getStorageSync(k);
	} catch (e) {
	    console.log(e);
	}
}

module.exports = Storage;