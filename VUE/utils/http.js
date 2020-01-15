import {
	config
} from "../config/config.js"
import {
	promisic
} from "./util.js"


class Http {
	static async request({
		url,
		data,
		method = "GET"
	}) {
		const res = await promisic(uni.request)({
			url: `${config.apiBaseurl}${url}`,
			data,
			method,

		})
		return res.data


	}
}

export {
	Http
}
