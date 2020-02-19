
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
API.USER_LIKE_LIST_URL = 'likelist'; // 获取用户喜欢的音乐列表
API.LIKE_URL = 'like'; // 喜欢某个歌曲

//歌单
API.PLAYLIST_DETAIL_URL = 'playlist/detail'; // 歌单详情

// 歌曲
API.SONG_URL = 'song/url'; //获取歌曲url
API.LYRIC_URL = 'lyric'; //获取歌词

// 搜索
API.SEARCH_HOT_URL = 'search/hot/detail';

export default {
	systemInfo, 
	status_bar_height,
	HOST,
	API
}
