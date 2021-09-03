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

原文:
Because b is a rotation of a, it also has length r. Because it is rotated an angle φ from a, b makes an angle (α + φ) with the x-axis. Using the trigonometric addition identities (Section 2.3.3):


Because b is a rotation of a, it also has length r.
翻译:因为b是a的旋转,b的长也是r.

Because it is rotated an angle φ from a, b makes an angle (α + φ) with the x-axis.
翻译:因为b是从a旋转φ度得到,b的角度相对于x轴是(α + φ)。


Substituting xa =rcosαand ya =rsinαgives
翻译:替代xa =rcosα 和 ya =rsinα 

In matrix form, the transformation that takes a to b is then

翻译:矩阵的形式里面,这a到b的转换是


原文:
Because the norm of each row of a rotation matrix is one (sin2 φ+cos2 φ = 1), and the rows are orthogonal (cos φ(− sin φ) + sin φ cos φ = 0), we see that rotation matrices are orthogonal matrices (Section 5.2.4). By looking at the matrix we can read off two pairs of orthonormal vectors: the two columns, which are the vectors to which the transformation sends the canonical basis vectors (1, 0) and (0, 1); and the rows, which are the vectors that the transformations sends to the canonical basis vectors.


Because the norm of each row of a rotation matrix is one (sin2 φ+cos2 φ = 1), and the rows are orthogonal (cos φ(− sin φ) + sin φ cos φ = 0), we see that ro- tation matrices are orthogonal matrices (Section 5.2.4).
翻译:因为每一个标准旋转矩阵行是 1(sin2 φ+cos2 φ = 1,并且这些行是正交的,我看见这个
旋转矩阵是正交矩阵。


By looking at the matrix we can read off two pairs of orthonormal vectors: the two columns, which are the vectors to which the transformation sends the canonical basis vectors (1, 0) and (0, 1);

翻译:通过看向这个矩阵我们读了上两部分的正交向量:两列,是转换发送者标准基础向量(1, 0) 和(0, 1)的向量。


and the rows, which are the vectors that the transformations sends to the canonical basis vectors.

翻译:并且这些行，是转换发送标准机向量的向量。

```

### Reflection(映射)
```
We can reflect a vector across either of the coordinate axes by using a scale with one negative scale factor (see Figures 6.8 and 6.9):

翻译:我们可以通过使用缩放-1的缩放因子映射一个向量穿过另一个坐标轴。



While one might expect that the matrix with −1 in both elements of the diagonal is also a reflection, in fact it is just a rotation by π radians.

翻译:可能认为矩阵在两个对角元素为-1 是一个反射,是实上他是旋转了π角度。
```

### Composition and Decomposition of Transformations 
```
Composition and Decomposition of Transformations
转换合并和分解


原文:
It is common for graphics programs to apply more than one transformation to an object. For example, we might want to first apply a scale S, and then a rotation R. This would be done in two steps on a 2D vector v1:


It is common for graphics programs to apply more than one transformation to an object.
翻译:一个转换对象是图形学项目更多的通用的应用。


For example, we might want to first apply a scale S, and then a rotation R. This would be done in two steps on a 2D vector v1:

翻译:例如,我可能像首先应用缩放s,并且a旋转。在2D向量上通过两部完成。

Because matrix multiplication is associative, we can also write

翻译:因为矩阵乘法是一个两个的，我们也可以写成


In other words, we can represent the effects of transforming a vector by two matrices in sequence using a single matrix of the same size, which we can compute by multiplying the two matrices: M = RS (Figure 6.10).

翻译:换句话说,在依次使用单个同大小矩阵的时候我们通过两个矩阵表达转换向量的影响,通过两个
矩阵相乘: M = RS计算。


It is very important to remember that these transforms are applied from the right side first. So the matrix M = RS first applies S and then R.

翻译:这些变形从右边第一个开始被运用是非常重要的要记住。因此矩阵M = RS  首先被应用的是
S在是R。



Example. Suppose we want to scale by one-half in the vertical direction and then rotate by π/4 radians (45 degrees). The resulting matrix is

翻译:例。假设我们想在垂直方向缩放1/2 并且旋转π/4 弧度。这结果举证是

原文:
It is important to always remember that matrix multiplication is not commutative. So the order of transforms does matter. In this example, rotating first, and then scaling, results in a different matrix (see Figure 6.11):

It is important to always remember that matrix multiplication is not commutative. 
翻译:矩阵乘法不能交换位置非常重要应该把他记住。


So the order of transforms does matter.

翻译:所以转换的顺序非常重要。


In this example, rotating first, and then scaling, results in a different matrix (see Figure 6.11):

翻译:在这个例子里,首先是旋转其次是缩放,获得了不同的矩阵结果


原文:
Example. Using the scale matrices we have presented, nonuniform scaling can only be done along the coordinate axes. If we wanted to stretch our clock by 50% along one of its diagonals, so that 8:00 through 1:00 move to the northwest and 2:00 through 7:00 move to the southeast, we can use rotation matrices in combination with an axis-aligned scaling matrix to get the result we want. The idea is to use a rotation to align the scaling axis with a coordinate axis, then scale along that axis, then rotate back. In our example, the scaling axis is the “backslash” diagonal of the square, and we can make it parallel to the x-axis with


Example. Using the scale matrices we have presented, nonuniform scaling can only be done along the coordinate axes. 

翻译:例。使用我们给的缩放矩阵,不统一缩放仅沿着坐标系轴进行。




If we wanted to stretch our clock by 50% along one of its diagonals, so that 8:00 through 1:00 move to the northwest and 2:00 through 7:00 move to the southeast, we can use rotation matrices in combination with an axis-aligned scaling matrix to get the result we want. 

翻译:如果我想通过沿着斜边50%去拉伸我的时钟,以至于8：00 到 1：00西北方向 移动到2：00到7：00的东南方向,我们 组合 使用旋转矩阵和轴对齐的缩放矩阵去获得我们想要的结果


The idea is to use a rotation to align the scaling axis with a coordinate axis, then scale along that axis, then rotate back.

翻译:这想法是为了使用旋转和坐标轴对齐,沿着那个轴缩放,在旋转回去



In our example, the scaling axis is the “backslash” diagonal of the square, and we can make it parallel to the x-axis with

翻译:在我们的例子里,缩放轴是方阵里的”反斜杠“斜线,并且我们使缩放坐标轴平行于x轴


In mathematical notation, this can be written RSRT. The result of multiply- ing the three matrices together is

翻译:在数学表示里,可以被写成RSRT.三个矩阵一起乘法的结果是


原文:
Building up a transformation from rotation and scaling transformations 
actually works for any linear transformation, and this fact leads to a powerful way of thinking about these transformations, as explored in the next section.

翻译:构建一个转换旋转和实际操作于对于任意线性缩放的转换，并且这个事实通过思考这些转换强大的方式,在下一章我们会探索。
```

### Decomposition of Transformations 
```

Sometimes it’s necessary to “undo” a composition of transformations, taking a transformation apart into simpler pieces. For instance, it’s often useful to present a transformation to the user for manipulation in terms of separate rotations and scale factors, but a transformation might be represented internally simply as a matrix, with the rotations and scales already mixed together. This kind of manipulation can be achieved if the matrix can be computationally disassembled into the desired pieces, the pieces adjusted, and the matrix reassembled by multiplying the pieces together again.

Sometimes it’s necessary to “undo” a composition of transformations, taking a transformation apart into simpler pieces.

翻译:有些时候转换分解是必须的为了去”取消“转换的组合


For instance, it’s often useful to present a transformation to the user for manipulation in terms of separate rotations and scale factors, but a transformation might be represented internally simply as a matrix, with the rotations and scales already mixed together.

翻译:例如,分解转换常常非常有用为使用者操作分开旋转和缩放的因子,但是转换可能作为一个内部地简单的旋转和缩放已经混合在一起的矩阵被展示.



This kind of manipulation can be achieved if the matrix can be computationally disassembled into the desired pieces, the pieces adjusted, and the matrix reassembled by multiplying the pieces together again.

翻译:这种操作若果能够计算拆解成自己所需要的部分被实现,这部分调节并且通过在一个死这部分相乘进行矩阵的重新组装。


```