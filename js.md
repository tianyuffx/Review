### 数据类型

基本: null undefined boolean string number Symbol BigInt

引用: object

### ajax fetch axios区别：

fetch: es6基于promise的api
axios: 基于XHR的封装库
ajax: 异步的javascript和xml 技术统称 重要特性是实现局部刷新，XMLHttpRequest是实现Ajax的一种方式

### script 上 async defer

script: 暂停html解析 下载js 执行 继续html解析
async: 下载和html解析并行 下载完后暂停html解析 执行js 然后继续html解析
defer: 下载和html解析并行 等html解析完后执行js

preload: 资源在当前页面使用 浏览器会优先加载
prefetch: 资源可能在未来的页面使用 浏览器将在空闲时加载
dns-prefetch: dns 预获取 
preconnect: 预链接 提前进行DNS查询 TCP连接 减小响应时间


### 线程 进程

### 复杂度 二分法

### 堆内存 栈内存

### 闭包 有几种形式 形成原因 垃圾回收机制

### 继承 圣杯继承 继承方式

### commonJs ajs esmodule requirejs seajs

### 原型链

### 事件委托 事件监听 冒泡 捕获 异步执行函数

### 事件轮训机制 宏任务 微任务

### 设计模式了解多少

### 马原码点 charCodeAt 返回 

### 图片懒加载实现

### this 指向问题

### 构造函数

### debouce throttle

### 数组的方法有哪些

concat filter map forEach every some find findIndex reverse pop unshift shift push length join splice sort

// slice indexOf 

### 字符串的方法有哪些, unicode CharCodeAt 中文特殊表情 length 2 码元 码点 pointCodeAt 

length

// substr substring slice


### 深拷贝 浅拷贝

### js基本数据类型和引用数据类型 typeof 的值有哪些 包装类

string boolean 

### js中的一些方法可能不常用都说不太清, 4大属性

getOwnProperty

Object.seal

Object.create

Object.assign

Object.is

判断两个值是否是相同的值。表示两个参数是否相同的布尔值 

Object.keys

Object.defineproperty(obj, prop, desc)

get set value writeable enumrable configurable

Object.seal

Object.freeze

Object.hasOwnProperty

obj.isPrototypeOf

Object.getPrototypeOf

# instanceof contruction

检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

object instanceof constructor

用来检测 constructor.prototype 是否存在于参数 object 的原型链上。

### jwt 

### 如何实现一个 flatMap 函数 (头条)

### call bind apply 使用方法 自己实现一个bind

### new 的时候都发生了什么

### js bridge 与 app 交互

## webWorker
# 事件循环

浏览器进程模型

进程 程序执行开辟的一块空间 进程之间相互独立

线程

渲染进程：
解析html, css，布局，计算样式，处理图层，60贞画面，事件处理函数，计时器回调，全局js代码

## 0.1+0.2


## 使用异步的方式，渲染主线程永不阻塞

js单线程，因其运行在浏览器的渲染主线程中，渲染主线程只有1个。


## 上传文件 断点续传 分片上传 图片上传很大事件很长

### 首屏加载时间很长 白屏


### 很长的list列表


### 强缓存 协商缓存 弱缓存


# 基础知识 性能优化 网络原理


## new 
1.创建控对象
2.改变隐式原型的指向
3、改变构造函数this的指向
4.判断有无返回对象
function _new (f, ...args) {
  const o = {}
  o.__proto__ = f.prototype
  const r = f.apply(o, args)
  const isTrue = r && typeof r === 'function' || typeof r === 'object'
  return isTrue ? r : o
}


## 设计模式了解多少

### 跨域解决方式


### File Bolb Reader

### base64 二进制


## 原型链 闭包 深拷贝 浅拷贝 instanceof 继承


### parseInt

## has


## new Set()

const a = new Set()
a.has
a.add
a.delete

第二个参数 0 NaN Infinity    十六进制或者十进制
小于2大于2**36 => NaN


# 浏览器渲染原理

















