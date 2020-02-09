let Playlist = {};

Playlist.get_playlist_detail = function(id, cb) {
	let url = config.API.PLAYLIST_DETAIL_URL;
	let params = {
		id: id
	}
	request.post(url, params, (data)=> {
		if (data.code == 200) {
			
			cb && cb(data)
		}else {
			console.log('failed');
		}
	})
}

import config from '../config/config.js';
import request from '../utils/request.js';

module.exports = Playlist;