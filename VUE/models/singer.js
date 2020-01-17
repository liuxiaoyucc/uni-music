import {
	Http
} from "../utils/http.js"
class Singer {
	/**
	 * 歌手分类列表
	 * cat : 即 category Code,歌手类型,默认 1001,返回华语男歌手数据
	 * limit : 返回数量 , 默认为 30
	 * offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0 
	 * initial: 按首字母索引查找参数,如 /artist/list?cat=1001&initial=b 返回内容将以 name 字段开头为 b 或者拼音开头为 b 为顺序排列
	 */
	static async getSingList(cat, limit = 20, offset = 0) {
		return await Http.request({
			url: `/artist/list`,
			data: {
				cat,
				limit,
				offset
			}
		})
	}


	/**
	 * 收藏/取消歌手
	 * artistId : 歌手 id
	 * t:操作,1 为收藏,其他为取消收藏
	 */
	static async isCollectSinger(artistId, t) {
		return await Http.request({
			url: `/artist/sub`,
			data: {
				artistId,
				t
			}
		})
	}


}

export {
	Singer
}
