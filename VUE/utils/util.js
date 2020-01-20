const promisic = function(func) {
	return function(params = {}) {
		return new Promise((resolve, reject) => {
			const args = Object.assign(params, {
				success: (res) => {
					resolve(res);
				},
				fail: (error) => {
					reject(error);
				}
			});
			func(args);
		});
	};
};
//判断是否为手机号的正则表达式
function IsPhone(phones) {
	// var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
	var myreg =
		/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/
	if (!myreg.test(phones)) {
		console.log('手机号格式不正确')
		return false;
	} else {
		console.log('手机号格式正确')
		return true;
	}
}


export {
	promisic,
	IsPhone
}
