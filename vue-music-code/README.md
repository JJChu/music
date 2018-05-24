# vue-music-code

> 音乐播放器

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 前期准备

- 依赖
  + devDependencies：stylus stylus-loader babel-polyfill
  + dependencies：babel-runtime fastclick better-scroll vue-lazyload(https://github.com/hilongjw/vue-lazyload)
- alias
- 移动端 `<meta name="viewport"  content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">`


## 借鉴

- 常用的变量/常量保存起来
- 封装类
- 业务代码和数据处理要分离开来
- 不需要追踪变化更新视图的数据我们可以在 created() 钩子函数里定义初始化；只在函数里使用的一些数据我们可以直接 this.x 定义
- Math.max(a,b)
- watch 的合理利用
- state 中的放一些比较纯碎的状态，一些组合状态可以用 getter
- action 不仅可以做异步处理，也可以封装一些多个 mutation
- 对接口方法进行封装时要返回一个 Promise
- vue 中 transtion 动画以及其钩子函数的使用
- 移动端的事件（touch）以及事件对象
- audio 所有特性，事件，事件对象，属性
- dom pageX...
- window.innerWidth...
- svg 相关
- [洗牌算法](https://www.zhihu.com/question/68330851)
- 好多边界问题可以使用 Math.max Math.min 实现逻辑
- mixin 的合理运用
