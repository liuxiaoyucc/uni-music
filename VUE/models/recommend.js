// 推荐
import {
	Http
} from "../utils/http.js"
class Recommend {
	/**
	 * 获取推荐歌单
	 * limit  取出数量 , 默认为 30 (不支持 offset)
	 */
	static async GetRecommendPlaylist(limit) {
		return await Http.request({
			url: `/personalized`,
			data: {
				limit
			}
		})
	}



}

export {
	Recommend
}
