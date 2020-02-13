let User = {};

//登陆
User.login = function(phone, password, cb) {
	let url = config.API.CELLPHONE_LOGIN_URL;
	let params = {
		phone: phone,
		password: password
	}
	
	request.post(url, params, (res)=> {
		if (res.data) {
			let data = res.data
			if (data.code == 200) {
				get_status((status)=> {
					
					cb && cb(status);
				});
				
			}else {
				helper.toast('none', data.msg, 3000, false, 'bottom');
			}
		}else {
			console.log(res);
		}
	})
}

//登录检查
User.check_login = function(cb) {
	
	console.log('check_login');
	get_status((res)=> {
		cb && cb(res);
	})
}

//获取用户mv,歌单, dj, 收藏数量
User.get_subcount = function(cb) {
	let url = config.API.SUBCOUNT_URL;
	
	request.post(url, {}, (res)=> {
		let data = res.data;
		cb && cb(data);
	})
}

//获取用户资料
User.get_user_detail = function(uid, cb) {
	let url = config.API.USER_DETAIL_URL;
	let params = {
		uid: uid
	}
	request.post(url, params, (res)=> {
		
		let data = res.data;
		if (data.code == 200) {
			
			cb && cb(data)
		}else {
			console.log('failed');
		}
	})
}

//获取用户歌单列表
User.get_playlist = function(uid, cb) {
	let url = config.API.USER_PLAYLIST_URL;
	let params = {
		uid: uid
	}
	request.post(url, params, (res)=> {
		let data = res.data;
		if (data.code == 200) {
			cb && cb(data)
		}else {
			console.log('failed');
		}
	})
}

//获取用户状态
function get_status(cb) {
	let url = config.API.LOGIN_STATUS_URL;
	
	request.post(url, {}, (res)=> {
		let data = res.data;
		
		if (data && data.code == 200) {
			cb && cb(data)
		}else {
			console.log('获取状态失败');
			cb && cb(false);
		}
	})
}



import config from '../config/config.js';
import request from '../utils/request.js';
import helper from '../helper/helper.js';


module.exports = User;