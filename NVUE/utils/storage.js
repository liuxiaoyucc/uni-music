// 缓存统一管理

let Storage = {}

const LATEST_PLAYED = 'latest_played'; //最后一个播放记录

Storage.get_played = function() {
	return get(LATEST_PLAYED);
}

Storage.set_played = function(v) {
	set(LATEST_PLAYED, v);
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