## 记录下遇到的一些问题

1. v3 极速渲染模式, 不支持Storage等操作, 等官方修复

2. nvue快速启动模式的首页不支持使用getApp(), 需要改为getApp({allowDefault: true});

3. vuex更新state时, 页面中的组件内使用了state中的某个属性时, 重复打开关闭这个页面, 组件不会卸载, 会导致computed多次重复触发, 尝试destory和beforeDestory中销毁组件, 但是没有销毁成功

4. innerAudioContext对象的paused值获取不到, 导致不能判断当前播放状态, 只能通过各种回调和vuex单独维护playing		使用plus.audio.createPlayer代替uni.innerAudioContext

## TODO
1. 使用plus的音频管理替代uni, 可以获取到播放状态
2. 将playing放到哪里管理呢

## 关于音频控制

### plus.audio.createPlayer

* 音频自然播放结束后的回调顺序: 
ended -> pause -> play方法的回调

* autoplay 自动播放和非自动播放的区别
当autoplay为true时, 在更新src属性时, 会自动缓冲, 并且缓冲好之后会自动调用play()方法, 并触发onPlay回调
当autoplay为false时, 需要手动调用play()方法进行播放, 并且调用play()方法的时机,要在canplay回调中, 也就是缓冲结束调用play()才有效, 如果play()在canplay回调之前就执行, 那么音频不会播放

当autoplay为false时, 在暂停之后,再次播放时, 不会触发canplay回调, __也就是说, 同一个音频链接, 在不切换src的情况下, 只会触发一次canplay, 所以不能只能在canplay回调中调用play()方法__

* 没有进度更新回调, 所以播放进度条控制使用控制器来做的

### uni.innerAudioContext
* paused属性无效

## 关于NeteaseCloudMusicApi
* 获取歌曲链接接口返回的链接是有过期时间的
每次打开app时, 获取一下最新的url, 并更新
使用https://music.163.com/song/media/outer/url?id=id.mp3 这个链接, 会自动跳转到最新地址

