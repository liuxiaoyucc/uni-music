let Top = {};

Top.album = function(cb, limit, offset) {
	let url = config.API.TOP_ALBUM;
	limit = limit || 10;
	offset = offset || 0;
	request.get(url, {limit: limit, offset: offset}, (res)=> {
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

module.exports = Top;