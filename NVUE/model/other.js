let Other = {};

Other.banner = function(cb) {
	let url = config.API.BANNER;

	request.get(url, {type: 1}, (res)=> {
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

module.exports = Other;