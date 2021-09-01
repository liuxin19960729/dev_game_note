```
原文：
The machinery of linear algebra can be used to express many of the operations required to arrange objects in a 3D scene, view them with cameras, and get them onto the screen. Geometric transformations like rotation, translation, scaling, and projection can be accomplished with matrix multiplication, and the transforma- tion matrices used to do this are the subject of this chapter.

The machinery of linear algebra can be used to express many of the operations required to arrange objects in a 3D scene, view them with cameras, and get them onto the screen. 

翻译:线性代数机制在3D场景中表达需要操作很多对象,摄像机看他们,获取他们并把他们映射到屏幕里面



Geometric transformations like rotation, translation, scaling, and projection can be accomplished with matrix multiplication, and the transformation matrices used to do this are the subject of this chapter.

翻译:几何学的转换有像 旋转  移动  转变  收缩 和 投射 可以用过矩阵乘积完成,转换矩阵被用作这章的主题。




翻译:
We will show how a set of points transforms if the points are represented as offset vectors from the origin, and we will use the clock shown in Figure 6.1 as an example of a point set. So think of the clock as a bunch of points that are the ends of vectors whose tails are at the origin. We also discuss how these transforms operate differently on locations (points), displacement vectors, and surface normal vectors.



We will show how a set of points transforms if the points are represented as offset vectors from the origin, and we will use the clock shown in Figure 6.1 as an example of a point set.

翻译：我将展示 如果这个点作为从原点偏移向量怎样设置点转换,并且我将使用的时钟展示在图6.1 作为点集合的一个案例。

So think of the clock as a bunch of points that are the ends of vectors whose tails are at the origin.

翻译:因此 思考时钟并作为向量端点是原点的一连串点



We also discuss how these transforms operate differently on locations (points), displacement vectors, and surface normal vectors.

翻译:我们还讨论在位置上这些不停的转换操作,位移向量和平面法向量。

```


## 6.1 2D Linear Transformations
```
We can use a 2 × 2 matrix to change, or transform, a 2D vector:

翻译:我使用一个2X2矩阵来改变,或转变 2D向:

This kind of operation, which takes in a 2-vector and produces another 2-vector by a simple matrix multiplication, is a linear transformation.

翻译:这种操作,通过简单矩阵乘积 用一个向量产生另一个向量,这个转换是一个线性的转换



原文:
By this simple formula we can achieve a variety of useful transformations, depending on what we put in the entries of the matrix, as will be discussed in the following sections. For our purposes, consider moving along the x-axis a horizontal move and along the y-axis, a vertical move.



By this simple formula we can achieve a variety of useful transformations, depending on what we put in the entries of the matrix, as will be discussed in the following sections.
翻译:通过简单的式子我们获得各种有用的转换,依靠我们提交到矩阵的条目,在下面这一节我们将讨论。


For our purposes, consider moving along the x-axis a horizontal move and along the y-axis, a vertical move.

翻译:为了我们的目的,思考移动随着x轴水平移动和随着y轴垂直移动
```

### Scaling
```
The most basic transform is a scale along the coordinate axes. This transform can change length and possibly direction:
翻译:最基础的转换是缩放随着轴心进行调节。这个转换会改变长度和可能的方向。


Note what this matrix does to a vector with Cartesian components (x, y):

翻译:注意矩阵对笛卡尔积向量做了什么:


So, just by looking at the matrix of an axis-aligned scale, we can read off the two scale factors.

翻译:因此,仅通过看向轴对齐缩放的坐标,我们读出了两个缩放因子。


Example. The matrix that shrinks x and y uniformly by a factor of two is (Fig-ure 6.1)

翻译:例.x,y缩小一致矩阵通过两个因子是，

A matrix which halves in the horizontal and increases by three-halves in the vertical is (see Figure 6.2)

翻译:水平减少到半等份因子并且垂直方向增加到3个半分因子的矩阵。

```

### Shearing 

```

原文:
A shear is something that pushes things sideways, producing something like a deck of cards across which you push your hand; the bottom card stays put and cards move more the closer they are to the top of the deck. The horizontal and vertical shear matrices are

A shear is something that pushes things sideways, producing something like a deck of cards across which you push your hand;
翻译:切变是推取一个东西的边的事情,制作一副类似扑克牌的东西你把你的手从一边移动到另一边去。


the bottom card stays put and cards move more the closer they are to the top of the deck. The horizontal and vertical shear matrices are

翻译:卡片下面保持不变,卡片移动的越靠近的它是扑克的上部。水平和垂直剪切矩阵是


In both cases, the square outline of the sheared clock becomes a parallelogram, and the circular face of the sheared clock becomes an ellipse.
翻译:z在两种方案里,正方形剪切时钟轮廓变成平行四边形,并且这圆形的时钟面变成了椭圆形

原文:
Another way to think of a shear is in terms of rotation of only the vertical (or horizontal) axis. The shear transform that takes a vertical axis and tilts it clockwise by an angle φ is

Another way to think of a shear is in terms of rotation of only the vertical (or horizontal) axis.
翻译:另一种方式认为切变是仅在垂直(或平行)旋转轴。


Similarly, the shear matrix which rotates the horizontal axis counterclockwise by angle φ is

翻译:类似地,剪切矩阵旋转水平轴通过角度φ进行逆时针旋转.
```

### Rotation 
```
Suppose we want to rotate a vector a by an angle φ counterclockwise to get vector b (Figure 6.5). If a makes an angle α with the x-axis, and its length is


Suppose we want to rotate a vector a by an angle φ counterclockwise to get vector b (Figure 6.5). 
翻译:假设我想通过角度φ逆时针旋转一个向量来获得旋转后的向量b.


If a makes an angle α with the x-axis, and its length is
翻译:如果使用和x轴之间的角度是α,它的长是....
```