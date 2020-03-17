let Video = {};

Video.list = function(id, cb) {
	let url = config.API.VIDEO_LIST;

	request.get(url, {id: id}, (res)=> {
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

module.exports = Video;