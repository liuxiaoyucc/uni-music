import {
	Http
} from "../utils/http.js"
class User {
	// 检测手机号是否已注册
	static async checkPhone(phone, countrycode) {
		return await Http.request({
			url: `/cellphone/existence/check`,
			data: {
				phone,
				countrycode

			}
		})
	}

	//手机登录
	static async phoneLogin(phone, password) {
		return await Http.request({
			url: `/login/cellphone`,
			data: {
				phone,
				password
			}
		})
	}

	// 刷新登录 
	static async loginRefresh() {
		return await Http.request({
			url: `/login/refresh`,
		})
	}

	// 发送验证码
	static async sendCode(phone, ctcode = 86) {
		return await Http.request({
			url: `/captcha/sent`,
			data: {
				phone,
				ctcode
			}
		})
	}

	// 验证验证码
	static async verifyCode(phone, captcha, ctcode = 86) {
		return await Http.request({
			url: `/captcha/verify`,
			data: {
				phone,
				captcha,
				ctcode
			}
		})
	}

	// 注册(修改密码)
	static async register(phone, captcha, password, nickname) {
		return await Http.request({
			url: `/register/cellphone`,
			data: {
				phone,
				captcha,
				password,
				nickname
			}
		})
	}

	// 签到
	// type: 签到类型 , 默认 0, 其中 0 为安卓端签到 ,1 为 web/PC 签到
	static async signIn(type = 0) {
		return await Http.request({
			url: `/daily_signin`,
			data: {
				type
			}
		})
	}




}

export {
	User
}
