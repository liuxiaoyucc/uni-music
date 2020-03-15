let Personalized = {};

Personalized.playlist = function(cb, limit) {
	let url = config.API.PERSONALIZED_PLAYLIST;
	limit = limit || 10;
	request.get(url, {limit: limit}, (res)=> {
		let data = res.data
		if (data.code == 200) {
			cb && cb(data)
		}else {
			console.log('failed');
		}
	})
}

Personalized.newsong = function(cb) {
	let url = config.API.PERSONALIZED_NEWSONG;
	request.get(url, {}, (res)=> {
		let data = res.data
		if (data.code == 200) {
			cb && cb(data)
		}else {
			console.log('failed');
		}
	})
}

import config from '../config/config.js';
import request from '../utils/request.js';

module.exports = Personalized;