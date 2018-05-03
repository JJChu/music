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
- 不在视图中展示的数据不用在 data 中初始化
- Math.max(a,b)
