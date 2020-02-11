// 全局音频播放管理
let PlayerHelper = {};

let player = getApp({allowDefault: true}).globalData.player;

PlayerHelper.start = function(url) {
	console.log('play start');
	player.src = url;
	player.play();
	return;
}

/**
 * 暂停
 * 需要start后, 触发onPlay事件后, pause才有效
 */
PlayerHelper.pause = function() {
	console.log('play pause');
	player.pause();
	return;
}

module.exports = PlayerHelper