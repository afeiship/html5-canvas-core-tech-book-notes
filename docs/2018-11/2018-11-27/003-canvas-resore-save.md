# canvas restore/save
- 在进行绘图时，需要经常改动 canvas 环境的所有属性。
- 不过，很多时候，我们只是需要临时改动


## example code：
```js
function drawGrid(inStorkeStyle, inFillStyle){
    ctx.save();
    ctx.fillStyle = fillStyle;
    ctx.strokeStyle = inStorkeStyle;
    ctx.restore();
}
```

## save/restore 可以嵌套式调用
- 绘图环境的 save() 方法会将当前的绘图环境压入堆栈顶部
- 对应 restore() 方法会从堆栈顶部弹出一组状态信息，以此恢复当前绘图环境的各个状态


## UserAgent:
- 是指代表用户发出行为指令的软件程序，简单UA
- 任何软件都可以实现 canvas 元素的功能，并不只有浏览器才行