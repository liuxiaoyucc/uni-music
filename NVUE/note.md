记录下遇到的一些问题

1. v3 极速渲染模式, 不支持Storage等操作, 等官方修复

2. nvue快速启动模式的首页不支持使用getApp(), 需要改为getApp({allowDefault: true});

3. vuex更新state时, 页面中的组件内使用了state中的某个属性时, 重复打开关闭这个页面, 组件不会卸载, 会导致computed多次重复触发, 尝试destory和beforeDestory中销毁组件, 但是没有销毁成功

4. innerAudioContext对象的paused值获取不到, 导致不能判断当前播放状态, 只能通过各种回调和vuex单独维护playing