
function to(url) {
	uni.navigateTo({
		url: url
	});
}

function redirect_to(url) { //TODO 加入参数自动拼接
	uni.redirectTo({
	    url: url
	});
}

function relaunch(url) {
	uni.reLaunch({
	    url: url
	});
}

function toast(icon, text, duration, mask, position) {
	duration = duration || 1500;
	mask = mask || false;
	position = position || false;
	uni.showToast({
		icon: icon,
		title: text,
		duration: duration,
		mask: mask,
		position: position,
	})
}


export default {
	to,
	toast,
	redirect_to,
	relaunch
}
