// 全局音频播放管理
let PlayerHelper = {};

let player = getApp({allowDefault: true}).globalData.player;

PlayerHelper.start = function(url, cb) {
	console.log('play start');
	player.src = url;
	player.play();
	cb && cb(true);
}

module.exports = PlayerHelper