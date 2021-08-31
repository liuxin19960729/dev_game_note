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


### 6.1 2D Linear Transformations
```
We can use a 2 × 2 matrix to change, or transform, a 2D vector:

翻译:我使用一个2X2矩阵来改变,或转变 2D向:

This kind of operation, which takes in a 2-vector and produces another 2-vector by a simple matrix multiplication, is a linear transformation.

翻译:这种操作,通过简单矩阵乘积 用一个向量产生另一个向量,这个转换是一个线性的转换
```