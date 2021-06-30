# Graphaics
1.怎样使用
```
1.创建一个 new cc.Graphics() 组件
  把组件添加到cc.Node里面



lineCap  属性用于设置或返回线条末端线帽的样式
  BUTT (default)  末端平直
  ROUND  原型线冒
  SQUARE 正方形线冒


lineJoin  拐角类型连

MITER (default) 尖角
ROUND 圆角
BEVEL 斜角

lineWidth  线条的宽度 (以像素计)

miterLimit （lineJoin  MITER）才起作用   ？？

strokeColor 笔的颜色

fillColor 填充的颜色

.....



```

## 画线段
```
1.当我们有一组节点

1.首先我们把笔移动到第一个点地方
   moveTo()
2.在进行线段的画
    lineTo();

3. 若要当结尾的点和开始的位置进行合并
   colse() 把位置移动到开始的位置 并尝试把当前位置到开始的位置画上一条线

4.当我们把所有的路线设置完就可以开始画了
   stroke();

5.fill() 把我们画的范围内进行填充。

```