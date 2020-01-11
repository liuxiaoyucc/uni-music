let images = [];//压缩后的图片集合
let max_width = 800;//宽度大于此尺寸,触发压缩,否则使用原图

async function compress(_images, width, _fun) {
	max_width = width;
	for (let i = 0; i < _images.length; i++) {
		var compressd_image = await _compress(_images[i])
		images.push(compressd_image);
	}
	_fun && _fun(images);
	images = [];
}

async function _compress(_image) {

	var last4str = _image.slice(-4);
	if (plus.os.name == 'Android') { //安卓下plus.zip.compressImage只支持jpeg/jpg/png
		if (!~last4str.indexOf('jpg') && !~last4str.indexOf('png') && !~last4str.indexOf('jpeg')) {
			return _image;
		}
	}

	var image_info = await get_image_info(_image);
	if (image_info.width < max_width) { //小于800不压缩
		return _image;
	}

	return new Promise((resolve, reject) => {
		plus.zip.compressImage({
				src: _image,//原始图片的路径
				dst: _image,//压缩转换目标图片的路径
				overwrite: true,//使用原文件名并覆盖,如果想将原文件保留,并和压缩后图片同时上传,需要改为false,并修改dst
				quality: 100,//1-100,压缩后质量,越低图片占用空间越小,越模糊
				width: max_width+'px',//这里先写死800;height默认为auto,即根据width与源图宽的缩放比例计算
			},
			(res) => {
				resolve(res.target)
			},
			(e) => {
				reject(e);
			}
		)

	})


}

function get_image_info(_image) {

	return new Promise((resolve, reject) => {

		uni.getImageInfo({
			src: _image,
			success: res => {
				resolve(res);
			}
		})

	})



}
export default {
	compress
}
