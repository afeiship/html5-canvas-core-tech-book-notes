# canvas context:


## Context 对象： CanvasRenderingContext2D 所包含的属性
+ canvas: 
    - 指向该绘图环境所属的 canvas 对象，通常的用余是调用 context.canvas.width / context.canvas.height 来获取宽度和高度 
+ fillStyle:
    - 指定后续绘图的图形的 填充颜色、渐变、或者图案
+ globalAlpha:
    - 全局透明度设置
    - 取 0-1 之间的值
+ globalCompositeOperation:
    - 浏览器将某个物体绘制在其它物体之上
+ lineCap:
    - 指定线的端点
    - 取值有以下几个： butt/round/square (默认值是butt)
+ lineWidth:
    - 线的宽度
    - 取什为正 到 非无穷的 double 值，默认为 1.0
+ lineJoin:
    - 告诉浏览器相交时如何配置
    - 取值为： bevel/round/miter 默认是 miter
+ miterLimit:
    - 对于 miter 的细节设置

+ shadowBlur/shadowColor/shadowOffsetX/shadowOffsetY
    - 对阴影的设置
+ strokeStyle
    - 对路径进行描边设置，对应 fillStyle(填充设置)
+ textAlign(textBaseline-对应的垂直方向)
    - 决定以 fillText() 或者 strokeText() 进行绘制时，所画文本水平的对齐方式


