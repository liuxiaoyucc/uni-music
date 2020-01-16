import {
	Http
} from "../utils/http.js"
class Search {

	// 默认搜索关键词
	static async getSearchDefault() {
		return await Http.request({
			url: `/search/default`
		})
	}

	// 热搜列表(简略)
	static async getSearchHot() {
		return await Http.request({
			url: `/search/hot`,
		})
	}

	// 热搜列表(详细)
	static async getSearchHotDetail() {
		return await Http.request({
			url: `/search/hot/detail`,
		})
	}


}

export {
	Search
}
