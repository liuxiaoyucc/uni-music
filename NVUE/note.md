## 记录下遇到的一些问题

1. v3 极速渲染模式, 不支持Storage等操作, 等官方修复

2. nvue快速启动模式的首页不支持使用getApp(), 需要改为getApp({allowDefault: true});

3. vuex更新state时, 页面中的组件内使用了state中的某个属性时, 重复打开关闭这个页面, 组件不会卸载, 会导致computed多次重复触发, 尝试destory和beforeDestory中销毁组件, 但是没有销毁成功

4. innerAudioContext对象的paused值获取不到, 导致不能判断当前播放状态, 只能通过各种回调和vuex单独维护playing		使用plus.audio.createPlayer代替uni.innerAudioContext

5. 关于唱片cover旋转问题: nvue中暂不支持uni.createAnimation(OBJECT), weex的anianimation也不支持主动停止和启动, nvue的css样式又不支持animation属性, 所以目前只能用定时器做旋转效果, 播放和暂停时会有一点延迟, 影响不大, 想到好办法再优化

6. nvue不支持径向渐变, play背景色只能用纯色或者线性渐变

7. 目前使用的wyy-icon组件, 在v-if="false" 时会报个错误 TypeError: undefined is not an object (evaluating 'e._data.__ob__'), 暂时没找到问题
	
__已解决, 原因是组件中的data没有return一个对象 也就是,即使没有使用data, 也要return {}__

8. 拦截并自定义页面返回事件, 在页面的onBackPress生命周期中 return true 即可, 实测可以拦截物理按键和uni api的返回

9. 关于移除某个单独的全局监听事件的实现,uni.$on与uni.$off的回调函数要保持一致, 如下

```
//监听的时候这样写
uni.$on('search', this.search);
uni.$on('search', this.other_search);

//移除的时候, 第二个参数要相同, 这样就只把使用this.search回调的search事件的监听移除了, 而不会影响使用this.other_search回调的search事件
uni.$off('search', this.search);

```

10. uniapp使用v-if隐藏显示元素时, 会闪烁, 用户体验很次, 要想办法解决 [x]
uniapp提供了过度动画组件uni-transition, 尝试一下


11. uniapp的popup组件, 弹出时偶尔不显示动画

12. v3下, 视频流组件有bug, 暂时搁置, 未找到原因啊啊啊啊啊啊, 莫名其妙
```
TypeError: undefined is not an object (evaluating 'n.attr.id')
```
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

* 没有进度更新回调, 所以播放进度条控制使用定时器来做的

### uni.innerAudioContext
* paused属性无效

## 关于NeteaseCloudMusicApi
* 获取歌曲链接接口返回的链接是有过期时间的
每次打开app时, 获取一下最新的url, 并更新
使用https://music.163.com/song/media/outer/url?id=id.mp3 这个链接, 会自动跳转到最新地址

* 歌曲或专辑封面图片太大导致页面加载卡顿,
可在图片url后面加上参数param控制图片大小,如下
https://p1.music.126.net/a_rb8pgC5R_hO-lfm7acSw==/109951164019567772.jpg?param=140y140