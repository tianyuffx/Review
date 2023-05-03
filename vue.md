https://vue3js.cn/interview/
https://q.shanyue.tech/fe/

### vue3 vue2 区别 为什么要用hooks



### vue中的data为什么是一个函数

### mvvm mvc 区别

mvc
M: 模型层 应用程序处理逻辑分析的部分 模型对象负责在数据库存取信息
V: 视图层 应用程序处理数据显示部分 视图是一句模型数据创建的
C: 控制层 应用程序用户交互部分 控制器接受用户输入并决定调用哪个模型构建去处理请求 然后再确定用哪个视图来显示返回的数据

mvvm
M: 业务逻辑相关的数据对象
V: 视图层
VM: 试图模型层 连接视图和模型层
viewModel 就是把 model 对象封装成可以显示和接受输入的界面数据对象
view 和 viewModel 之间通过双向数据绑定建立联系，这样当 view 变化时，会自动更新到 viewModel，反之亦然

1：mvc和 mvvm 都是一种设计思想，主要就是 mvc 中 controller 演变成 mvvm 中的 viewModel。mvvm 主要解决了 mvc 中大量 dom 操作使页面 渲染性能降低，加载速度变慢的问题
2: mvvm 和 mvc 最大的区别就是：它实现了 view 和 Model 的自动同步，当 model 的属性改变时，我们不用在手动操作 dom 元素来改变 view 的显示，它会自动变化
3: 整体看来，mvvm 比 mvc 精简很多，我们不用在用选择器来频繁的操作 dom

### proxy:

### 双向绑定原理:

### VDOM
虚拟DOM是通过js语法来在内存中维护一个通过数据解构描述出来的一个模拟DOM树，当数据发生改变的时候，会先对虚拟DOM进行模拟修改，然后在通过新的虚拟DOM树与旧的虚拟DOM树来对比，而这个对比就是通过diff算法来进行的。虚拟DOM最大的意义不在于性能的提升（JavaScript对象比DOM对象性能高），而在于抽象了DOM的具体实现（对DOM进行了一层抽象）
### diff算法:

render() {

createElementVNode('h1', null, 'content')
}

### ssr

### hooks 不能写在if或循环里

### store router.js 原理 实现方法

### watch和computed的区别

### v-for v-if v-show 性能 优先级

### hooks 生命周期 使用方法 区别

### VUE 响应式原理 


### 优化前端性能

### 强缓存 弱缓存

### 为什么data是个函数

### hash router history router 区别 pushstate

## 防扒  seo

## 封装组件要注意的问题 

### 父传子 子传父 父组件调用子组建的方法

## mutation action 同步异步

## $set 原理

### token鉴权怎么实现

## mutation action

## 

