let Search = {};

Search.get_hot_list = function(cb) {
	let url = config.API.SEARCH_HOT_URL;

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

module.exports = Search;