// 全局音频播放管理
let PlayerHelper = {};

let player = getApp({allowDefault: true}).globalData.player;

function set_url() {
	let played = Storage.get_played();
	if (player.src == played.url) {
		return true;
	}else {
		player.src = played.url;
		return false;
	}
}

PlayerHelper.start = function() {
	if (set_url()) {
		player.play();
	}
	return;
}

/**
 * 暂停
 * 需要start后, 触发onPlay事件后, pause才有效
 */
PlayerHelper.pause = function() {
	player.pause();
	return;
}


import Storage from '../utils/storage.js'

module.exports = PlayerHelper