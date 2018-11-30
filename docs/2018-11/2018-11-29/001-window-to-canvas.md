# window to canvas
> 浏览器通过事件对象传递给监听器鼠标坐标，是窗口坐标( window coordinate)，而不是相对于 canvas 自身坐标


## windowToCanvas
- 这个方法不只是将 canvas 边界的 x/y 坐标从窗口坐标中减去
- 而且 canvas 元素大小与绘图表面不一样时，它对坐标进行缩放
```js
function windowToCanvas(inCanvas, inX, inY){
    var box = inCanvas.getBoundingClientRect();
    var xRatio = inCanvas.width / box.width;
    var yRatio = inCanvas.height / box.height;
    return {
        x: inX - box.left * xRatio,
        y: inY - box.top * yRatio,
    }
}
```