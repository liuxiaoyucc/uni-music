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

	// 搜索建议
	static async getSearchSuggest(keywords, type = "mobile") {
		return await Http.request({
			url: `/search/suggest`,
			data: {
				keywords,
				type
			}
		})
	}

	// 搜索多重匹配
	static async getSearchMultimatch(keywords) {
		return await Http.request({
			url: `/search/multimatch`,
			data: {
				keywords
			}
		})
	}




}

export {
	Search
}
