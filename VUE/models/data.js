// data
import {
	Http
} from "../utils/http.js"
class Data {
	/**
	 * 新碟上架
	 * offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
	 */
	static async getNewAlbum(offset, limit) {
		return await Http.request({
			url: `/top/album`,
			data: {
				offset,
				limit
			}
		})
	}

	/**
	 * 新歌
	 * 全部:0 ,华语:7, 欧美:96, 日本:8 ,韩国:16
	 */
	static async getNewSong(type = 0) {
		return await Http.request({
			url: `/top/song`,
			data: {
				type
			}
		})
	}



}

export {
	Data
}
