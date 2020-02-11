记录下遇到的一些问题

1. v3 极速渲染模式, 不支持Storage等操作, 等官方修复

2. nvue快速启动模式的首页不支持使用getApp(), 需要改为getApp({allowDefault: true});
