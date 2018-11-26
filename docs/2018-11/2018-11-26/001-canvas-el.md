# Canvas 元素
> Canvas 的能力是通过 Canvas 的 context 对象而表现出来的，该环境变量可以从 canvas 元素身上获取。

## 获取 canvas 的引用：
> 这里使用 DOM 的常用方法就行

## 获取 2d context
> 这里使用 canvas.getContext('2d'), 这里的 2d 必须小写

## fillText/strokeText
> 参数类似 context.api('text', x, y) 

## 注意：(px)
> 在设置 canvas 高度、宽度 的时候，不能用 px 做单位

## canvas 默认大小 (300x150)
> 300x150