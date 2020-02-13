// 全局音频播放管理
let PlayerHelper = {};

//获取唯一player, 保持player统一
function get_player() {
	return getApp({allowDefault: true}).globalData.player;
}

function set_url() {
	let played = Storage.get_played();
	
	let player = get_player();
	
	player.setStyles({
		src: played.url
	});
	
	return;
}

//play前的准备
PlayerHelper.start = function() {
	set_url();
	let player = get_player();
	player.resume();
	return;
}

//统一play入口, 真正的播放入口
PlayerHelper.play = function() {
	let player = get_player();
	player.play(()=>{
		console.log('当前音乐播放完毕');
	},(e)=> {
		console.log(e);
	});;
	return;
}

/**
 * 暂停
 * 需要start后, 触发onPlay事件后, pause才有效
 */
PlayerHelper.pause = function() {
	let player = get_player();
	player.pause();
	return;
}


import Storage from '../utils/storage.js'

module.exports = PlayerHelper