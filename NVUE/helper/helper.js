
function backgrounder(){
	let os = plus.os.name.toLocaleLowerCase() == 'android' ? 'android' : 'ios';
	if(os == 'android'){
		let main = plus.android.runtimeMainActivity();
		main.moveTaskToBack(false);
	}
}


function to(url, mode) {
	mode = mode || 'navigate_to';
	
	
	uni.navigateTo({
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
	backgrounder
}
