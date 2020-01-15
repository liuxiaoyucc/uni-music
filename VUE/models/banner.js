// banner
import {
	Http
} from "../utils/http.js"
class Banner {
	// 0: pc,1: android,2: iphone,3: ipad
	//获取发现页面banner
	static async getBanner(type) {
		return await Http.request({
			url: `/banner`,
			data: {
				type
			}
		})
	}

	// 获取电台banner
	static async getDjBanner() {
		return await Http.request({
			url: `/dj/banner`
		})
	}

}

export {
	Banner
}
