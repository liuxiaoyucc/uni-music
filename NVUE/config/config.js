
const systemInfo = uni.getSystemInfoSync();

const status_bar_height = systemInfo.statusBarHeight;

export default {
	systemInfo, status_bar_height
}
