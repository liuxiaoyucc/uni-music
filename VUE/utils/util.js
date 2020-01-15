const promisic = function(func) {
	return function(params = {}) {
		return new Promise((resolve, reject) => {
			const args = Object.assign(params, {
				success: (res) => {
					resolve(res);
				},
				fail: (error) => {
					reject(error);
				}
			});
			func(args);
		});
	};
};

export {
	promisic,
}
