
const systemInfo = uni.getSystemInfoSync();

const status_bar_height = systemInfo.statusBarHeight;

const HOST = 'http://api.cloudmusic.pulsating.cn:3000/';

const API = {};
//登录
API.CELLPHONE_LOGIN_URL = 'login/cellphone'; // 手机号登录
API.LOGIN_STATUS_URL = 'login/status'; // 登陆状态

//用户
API.SUBCOUNT_URL = 'user/subcount'; // 用户的歌单，收藏，mv, dj 数量
API.USER_DETAIL_URL = 'user/detail'; // 获取用户详情
API.USER_PLAYLIST_URL = 'user/playlist'; // 获取用户歌单

//歌单
API.PLAYLIST_DETAIL_URL = 'playlist/detail'; // 歌单详情


export default {
	systemInfo, 
	status_bar_height,
	HOST,
	API
}
