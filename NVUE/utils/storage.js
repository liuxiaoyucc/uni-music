// 缓存统一管理

let Storage = {}

Storage.LATEST_PLAYED = 'latest_played'; //最后一个播放记录
//同步
Storage.sync_set = function(k, v) {
	try {
	    uni.setStorageSync(k, v);
	} catch (e) {
	    // error
	}
	return;
}

//异步
Storage.async_set = function(k, v, cb) {
	uni.setStorage({
	    key: k,
	    data: v,
	    success: function () {
	        cb && cb()
	    }
	});
}


Storage.sync_get = function(k) {
	try {
	    return uni.getStorageSync(k);
	} catch (e) {
	    console.log(e);
	}
}


Storage.async_get = function(k, cb) {
	uni.getStorage({
	    key: k,
	    success: function (res) {
	        cb && cb(res.data)
	    }
	});
}


module.exports = Storage;