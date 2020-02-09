function get(url, params, success_cb, failed_cb) {
	
	let uri = config.HOST + url;

	uni.request({
		url: uri, 
		data: params,
		method:"GET",
		success: (res)=>{
			let data = res.data;
			success_cb && success_cb(data);
		},
		fail:(res) => {
			failed_cb && success_cb(res);
		    console.log('request_fail:url:' + url + ' ; ' + 'errMsg:' + res.errMsg);
		}    
	});
} 

function post(url, params, success_cb, failed_cb) {
	
	uni.request({
		url: config.HOST + url, 
		data: params,
		method:"POST",   
		success: (res)=>{
			let data = res.data;
			success_cb && success_cb(data);
		},
		fail:(res) => {
		    console.log('request_fail:url:' + url + ' ; ' + 'errMsg:' + res.errMsg);
			failed_cb && failed_cb(res);
		} 
	})   
}

function test() {
	//111.13.100.92
	uni.request({
	    url: 'https://www.baidu.com/', //仅为示例，并非真实接口地址。
	    success: (res) => {
	        console.log(res.data);
	    }
	});
}


import config from '../config/config.js';
export default{
	get,
	post,
	test
}