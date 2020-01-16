import {
	Http
} from "../utils/http.js"
class Video {
	//获取视屏标签列表
	static async getVideoLable() {
		return await Http.request({
			url: `/video/group/list`,
		})
	}

	// 获取视频标签下的视频  无法分页
	static async getVidelForLable(id) {
		return await Http.request({
			url: "/video/group",
			data: {
				id
			}
		})
	}


}

export {
	Video
}
