let Song = {};

Song.get_song_url = function(id, cb) {
	let url = config.API.SONG_URL;
	let params = {
		id: id,
		br: 320000
	}
	request.get(url, params, (res)=> {
		let data = res.data
		if (data.code == 200) {
			
			cb && cb(data)
		}else {
			console.log('failed');
		}
	})
}

Song.get_lyric = function(id, cb) {
	let url = config.API.LYRIC_URL;
	
	let params = {
		id: id,
	}
	request.get(url, params, (res)=> {
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

module.exports = Song;