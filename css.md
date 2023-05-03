### 权重：

!important > 内联样式 > id > class > tag || :: [type]> * || > || + ~

            1000      100    10         1          0

### 圣杯布局：

### 双飞翼布局:

### 瀑布流布局:

### 画个三角形

### 重绘 回流 重排
重绘: 简单来说就是重新绘画，当给一个元素更换颜色、更换背景，虽然不会影响页面布局，但是颜色或背景变了，就会重新渲染页面，这就是重绘。

回流: 当增加或删除dom节点，或者给元素修改宽高时，会改变页面布局，那么就会重新构造dom树然后再次进行渲染，这就是回流。

重排: 

` 怎么进行优化或减少？`
1.多个属性尽量使用简写，例如：boder可以代替boder-width、boder-color、boder-style
2.创建多个dom节点时，使用documentfragment创建
3.避免使用table布局
4.避免设置多层内联样式，避免节点层级过多
5.避免使用css表达式
6.将频繁重绘或回流的节点设置为图层，图层能够阻止该节点的渲染行为影响到别的节点（例：will-change\video\iframe等标签），浏览器会自动将该节点变为图层

### 图片防盗链原理是什么

### 文字兼容 text-rendering:

### grid 布局

### 谈谈标准盒模型和IE盒模型

### BFC


## 三角形 梯形


### 一些不常用的css属性

filter: drop-shadow(0 0 10px #000)
backface-visibility
text-rendering
filter: grayScale(1)
shap
writing-mode: horizontal-tb / vertical-rl
text-orientation: upright;
text-combine-upright: all;
scroll-behavior: smooth
aspect-ratio:16/9
requestAnimationFram(function() {})