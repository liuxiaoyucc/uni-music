let User = {};

User.login = function(phone, password, cb) {
	console.log('check_login');
	
	get_status((res)=> {
		if (!res.profile.userId) { //登陆过期
			
			let url = config.API.CELLPHONE_LOGIN_URL;
			let params = {
				phone: phone,
				password: password
			}
			
			request.post(url, params, (data)=> {
				console.log(data);
				if (data.code == 200) {
					get_status();
					cb && cb();
				}
			})
		}else {
			cb && cb();
		}
	})
	
	
}


User.get_subcount = function(cb) {
	let url = config.API.SUBCOUNT_URL;
	
	request.post(url, {}, (data)=> {
		
		getApp().globalData.subcount = data;
		cb && cb(data)
	})
}

User.get_user_detail = function(uid, cb) {
	let url = config.API.USER_DETAIL_URL;
	let params = {
		uid: uid
	}
	request.post(url, params, (data)=> {
		if (data.code == 200) {
			console.log(data);
			cb && cb(data)
		}else {
			console.log('failed');
		}
	})
}

function get_status(cb) {
	let url = config.API.LOGIN_STATUS_URL;
	
	request.post(url, {}, (data)=> {
		if (data.code == 200) {
			getApp().globalData.user_status = data;
			cb && cb(data)
		}else {
			console.log('获取状态失败');
		}
	})
}



import config from '../config/config.js';
import request from '../utils/request.js';

module.exports = User;