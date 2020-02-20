
const systemInfo = uni.getSystemInfoSync();

const status_bar_height = systemInfo.statusBarHeight;

const HOST = 'http://api.cloudmusic.pulsating.cn:3000/';

const API = {};
//登录
API.CELLPHONE_LOGIN = 'login/cellphone'; // 手机号登录
API.LOGIN_STATUS = 'login/status'; // 登陆状态

//用户
API.SUBCOUNT = 'user/subcount'; // 用户的歌单，收藏，mv, dj 数量
API.USER_DETAIL = 'user/detail'; // 获取用户详情
API.USER_PLAYLIST = 'user/playlist'; // 获取用户歌单
API.USER_LIKE_LIST = 'likelist'; // 获取用户喜欢的音乐列表
API.LIKE = 'like'; // 喜欢某个歌曲

//歌单
API.PLAYLIST_DETAIL = 'playlist/detail'; // 歌单详情

// 歌曲
API.SONG = 'song/url'; //获取歌曲url
API.LYRIC = 'lyric'; //获取歌词

// 搜索
API.HOT_SEARCH = 'search/hot/detail'; //获取热搜
API.SEARCH = 'search'; //搜索

export default {
	systemInfo, 
	status_bar_height,
	HOST,
	API
}
