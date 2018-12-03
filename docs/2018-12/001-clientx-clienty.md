# ClientX/ClientY pagex/screenX

## 总结：
~~~
推荐使用：
screenX/Y：鼠标位置相对于屏幕的坐标
pageX/Y：相对于文档边缘（包含滚动条距离）
clientX/Y：相对于当前页面且不包含滚动条距离
offsetX/Y：相对于当前元素（块或行内块），除safari外不包含边框。

其他：
X/Y：与clientX/Y相同，firefox不支持
layerX/Y：除IE外与pageX/Y相同，IE11下与clientX/Y相同。非官方属性。
~~~

## 关于兼容性：
在 HTML5 规范出现之前，通过浏览器传给事件监听器的事件对象，获取鼠标事件发生的窗口坐标，其实方法十分的混乱。
有些用 x/y 有些用 layerX/layerY，最终被统一成了 clientX/clientY