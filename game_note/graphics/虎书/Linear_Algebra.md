# Linear Algebra (线性代数)
```
原文:
Perhaps the most universal tools of graphics programs are the matrices that change or transform points and vectors. In the next chapter, we will see how a vector can be represented as a matrix with a single column, and how the vector can be represented in a different basis via multiplication with a square matrix. We will also describe how we can use such multiplications to accomplish changes in the vector such as scaling, rotation, and translation. In this chapter, we review basic linear algebra from a geometric perspective, focusing on intuition and algorithms that work well in the two- and three-dimensional case.


Perhaps the most universal tools of graphics programs are the matrices that change or transform points and vectors.

单词:
perhaps adv  或许 也许
universal adj 普遍的 通常的 
翻译:或许图形程序最普遍的工具是矩阵，用于变换和移动点和向量






In the next chapter, we will see how a vector can be represented as a matrix with a single column, and how the vector can be represented in a different basis via multiplication with a square matrix.


单词:
basis n 基础 底部  主要成分
翻译:在下一章节,我们将看向量怎样在矩阵里面表示成单行，向量在不同的基地中怎样通过矩阵平方相乘进行展示。




We will also describe how we can use such multiplications to accomplish changes in the vector such as scaling, rotation, and translation.


单词:
accomplish v 实现 达到

翻译:我们将描绘向量的缩放 旋转 怎样通过使用乘法去实现这些变化



In this chapter, we review basic linear algebra from a geometric perspective, focusing on intuition and algorithms that work well in the two- and three-dimensional case.

单词:
intuition n 直觉 直觉力   
focus on 集中于 专注于
algorithms
perspective n 观点 远景 透视图
            adj 透视的    
翻译:在这一节,我们重新从几何学方面看基础的线性代数,集中于  在二维和三维中工作器来非常好的方式是算法和直觉。





原文:
This chapter can be skipped by readers comfortablewith linear algebra. How-
ever, there may be some enlightening tidbits even for such readers, such as the
development of determinants and the discussion of singular and eigenvalue de-
composition.



This chapter can be skipped by readers comfortable  with linear algebra.

单词:
skip v 跳过 跳绳 跳跃 跳读
comfortable  adj 舒服的 舒适的
comfortable with xxx  熟悉xxx
翻译: 读者熟悉线性代数可以跳过这张。



However, there may be some enlightening tidbits even for such readers, such as the
development of determinants and the discussion of singular and eigenvalue decomposition.

单词:
however 不论如何  不管怎样
enlighten v  启发 启蒙
enlightening  adj 使人领悟的 使人启发的
tidbit n 小栏报导
determinant n 决定因素 行列式
singular adj 单数的 单一的 
          n 单数
eigenvalue n  特征值 
decomposition n 分解 腐烂 变质
翻译:无论如何,即使对这样的读者小栏报导也可能对有一些启发,行列式发展和 单一的讨论和特征值分解。
```

## Determinant 
```
原文:
We usually think of determinants as arising in the solution of linear equations.
However, for our purposes, we will think of determinants as another way to mul-
tiply vectors. For 2D vectors a and b, the determinant |ab| is the area of the
parallelogram formed by a and b (Figure 5.1). This is a signed area, and the
sign is positive if a and b are right-handed and negative if they are left-handed.
This means |ab| = −|ba|. In 2D we can interpret “right-handed”as meaning we
rotate the first vector counterclockwise to close the smallest angle to the second
vector. In 3D, the determinant must be taken with three vectors at a time. For
three 3D vectors, a, b, and c, the determinant |abc| is the signed volume of the
parallelepiped (3D parallelogram; a sheared 3D box) formed by the three vectors
(Figure 5.2). To compute a 2D determinant, we first need to establish a few of its
properties. We note that scaling one side of a parallelogram scales its area by the
same fraction (Figure 5.3)



We usually think of determinants as arising in the solution of linear equations.
However, for our purposes, we will think of determinants as another way to multiply vectors


单词:
arising 出现 产生
purpose n 目的 意志
        v 决定 企图 打算
翻译:我经常思考行列式产生在线性等式中解答。无论如何,我们将思行列式作为另一种方式的向量相乘。


For 2D vectors a and b, the determinant |ab| is the area of the
parallelogram formed by a and b (Figure 5.1).

单词:
parallelogram n 平行是四边形
form n 形状 形态 外形 方式
     v 构成 组成 
formed form 的过去式  过去分词  adj  成形的
翻译:对于2d的向量 a 和 b ,这行列式 |ab| 是平行四边形通过 a 和 b 构成的m.






This is a signed area, and the
sign is positive if a and b are right-handed and negative if they are left-handed.

单词: 
sign n 符号 手势 记号
     v 签署 签名 示意
翻译:这区域被标记, 如果 a 和 b 是右手规则 则符号是正,如果是左手规则 则符号时负。



This means |ab| = −|ba|.

翻译:这意味着 |ab| = −|ba|



In 2D we can interpret “right-handed”as meaning we
rotate the first vector counterclockwise to close the smallest angle to the second
vector. In 3D, the determinant must be taken with three vectors at a time. 


单词:
interpret v 说明 解释 翻译
counterclockwise adj 逆时针方向。
at a time 每次 在某时 一次
翻译:在2D 我们会说明右手定则意味着我们旋转 第一个向量逆时针靠近第二个向量.
     在3D, 我们行列式必须每次拿取3维向量。





For three 3D vectors, a, b, and c, the determinant |abc| is the signed volume of the
parallelepiped (3D parallelogram; a sheared 3D box) formed by the three vectors
(Figure 5.2).

单词:
  
翻译:对于3D向量 a,b,c, 行列式|abc|是 有符号 平行六面体的量通过三维向量形成。



To compute a 2D determinant, we first need to establish a few of its
properties.


单词:
establish v 建立 创立 确立
few adj 很少的 几乎没有的
翻译:去计算2D的行列式,我们首先需要确定他们一些性质。




We note that scaling one side of a parallelogram scales its area by the
same fraction (Figure 5.3)

单词:
fraction n 分数 部分 小数 稍微
note v 注意 记录 注解 
     n 笔记 音符 注解 纸币  
翻译:我们注意到缩放平行四边形的一边相同分数去缩放他们的区域。

|(ka)b| = |a(kb)| = k|ab|


原文:
Also, we note that “shearing” a parallelogram does not change its area (Fig-
(5.1)

|(a + kb)b| = |a(b + ka)| = |ab|.

Also, we note that “shearing” a parallelogram does not change its area (Fig-
(5.1)
单词:
shear v  剪毛 断裂
翻译:我们注意到剪切平行边形面积不改变。

|(a + kb)b| = |a(b + ka)| = |ab|


原文:
because as shown in Figure 5.5 we can “slide” the edge between the two parallelograms over to form a single parallelogram without changing the area of either of the two original parallelograms.

单词:
slide v 滑动 贬值  悄悄移动
翻译:因为在图5.5.里面展示我们会滑动边从两个平行四边形到一个平行四边形没有改变两个原来平行四边形面积。



原文:
This simplification uses the fact that |vv| = 0 for any vector v, because the parallelograms would all be collinear with v and thus without area.

This simplification uses the fact that |vv| = 0 for any vector v, because the parallelograms would all be collinear with v and thus without area.
单词:
simplification n 简单化
collinear adj 共线的 同线的  
翻译简:单化使用对于 任意向量 v  |vv|=0 的这个事实，因为平行四边所有的共线向量 v 是没有面积的。



原文:
As you can see, the computation of determinants in this fashion gets uglier as the dimension increases. We will discuss less error-prone ways to compute determinants in Section 5.3.

单词:
as you can see  正如你所看
fashion n 时装 方式 样式
        v 使用 改变 做成....的形状
erro-prone 易于出错      
翻译:正如你所看，随着维数的增加计算行列式的放式变难。我们将讨论行列式减少出错的的方式。




原文:
Example. Determinants arise naturally when computing the expression for one vector as a linear combination of two others—for example, if we wish to express a vector c as a combination of vectors a and b:


Example. Determinants arise naturally when computing the expression for one vector as a linear combination of two others for example, if we wish to express a vector c as a combination of vectors a and b:

单词:

翻译:例.行列式的出现为了计算两个向量的作为一个线性合并的式子，例如:若我希望去解释 向量c 我们可以把向量c 作为  a和b的合并:

c = (ac)a + (bc)b.


原文:
Figure 5.6. On the left, the vector c can be represented using two basis vectors as aca + bcb. On the right, we see that the parallelogram formed by a and c is a sheared version of the parallelogram formed by bcb and a.


单词:

form n形式 形状 形态
     v  构成 组成  排列 组织 
formed adj 形成的
       form 的过啊去分词 和 过去式部分 
翻译:图5.6,在左边,向量c 使用两个基础的向量 (ac)a + (bc)b. 进行表示。
在右边,我们看平行四边形通过 a 和 c 修剪 的平行四边形通过bcb 和a 构建的版本构建

 we see that the parallelogram formed by a and c is a sheared version of the parallelogram formed by bcb and a  --(宾语从句)


```

## Matrices
```
原文:
A matrix is an array of numeric elements that follow certain arithmetic rules. An example of a matrix with two rows and three columns is

A matrix is an array of numeric elements that follow certain arithmetic rules. (that .... 定语从句)

单词:
certain adj 某一 必然的 却行的 无疑的 有把握的
        pton 某些 某几个
arithmetic n 数子算数 算法       
翻译: 矩阵是 数字下面某些规则的元素数组 
谓语 is  be动词  主系表结构

An example of a matrix with two rows and three columns is
翻译:一个矩阵有两行三列的案列:



原文:
Matrices are frequently used in computer graphics for a variety of purposes in- cluding representation of spatial transforms. For our discussion, we assume the elements of a matrix are all real numbers. This chapter describes both the mechan-ics of matrix arithmetic and the determinant of “square” matrices, i.e., matrices with the same number of rows as columns.


Matrices are frequently used in computer graphics for a variety of purposes including representation of spatial transforms.

单词:
frequent adj 频繁的  时常发生的 惯常的
         v 常到  常去
frequently adv 频繁地  经常地

representation n 代表 表示   

spatial adj 空间的 存在于空间的
翻译:
are be动词  谓语
主语:Matrices 
在计算机图像学里矩阵是在经常地被使用因为目的变量包含空间变换的表示。



For our discussion, we assume the elements of a matrix are all real numbers.

单词:
翻译:对于我们讨论,我们假设矩阵里面都是实数元素

谓语 assume 


This chapter describes both the mechanics of matrix arithmetic and the determinant of “square” matrices, i.e., matrices with the same number of rows as columns.

单词:
mechanics n 力学 结构 技术 机械学
翻译:这章描述所有 矩阵数字和 平方 矩阵的 行列式结构 矩阵 有相同的行数和列数。
谓语:describe 
```

### Matrix Arithmetic
```
原文:
A matrix times a constant results in a matrix where each element has been multiplied by that constant, e.g.,

A matrix times a constant results in a matrix where each element has been multi-plied by that constant, e.g.,

单词:
times v 乘以
翻译: 一个矩阵乘以常数结果在矩阵里每个元素被乘上这个常量。
  
 谓语:times 乘以

例  2* [1,2      =[2,4]
        3,4]       6,8]


Matrices also add element by element, e.g.,

单词:
also adv 也 而且 同样 
     conj 并且 另外
翻译: 矩阵 (also adv)也通过元素和元素相加。

谓语:add 加法 相加  



For matrix multiplication, we “multiply” rows of the first matrix with columns of the second matrix:


单词:
翻译:对于矩阵的乘法,第一个矩阵的列和第二个矩阵的行相乘。

谓语 multiply


Taking a product of two matrices is only possible if the number of columns of the
left matrix is the same as the number of rows of the right matrix. For example,

单词:

翻译:两个矩阵的乘积是的要求是左边矩阵列数行数和右面举证的行数相等。

谓语:is 


Matrix multiplication is not commutative in most instances:

单词:
commutative adj 交换的 替换的
in most instances 大多数情况下
翻译:在大多数情况下矩阵乘法是不能交换的.(不满足乘法交换律)




Also, if AB = AC, it does not necessarily follow that B = C. Fortunately, matrix multiplication is associative and distributive:

单词:
necessary  adj 必要的 必须的 
           n 必须品
follow  v 跟随 遵循  追求
        n  跟随 追随 

fortunate adj 幸运的 侥幸的 吉祥的
fortunately adv 幸运地

associative adj 联合的 组合的 联系的
distribuative adj 分布的 分发分  分配的
翻译:然而,如果AB=BC ,B=C 不是必然的。幸运地，举证的乘法满足接合律和分配率。

it does not necessarily follow that B = C.(主语从句)

```

### Operations Martices 
```
原文:
We would like a matrix analog of the inverse of a real number. We know the inverse of a real number x is 1/x and that the product of x and its inverse is 1. We need a matrix I that we can think of as a “matrix one.” This exists only for square matrices and is known as the identity matrix; it consists of ones down the diagonal and zeroes elsewhere. For example, the four by four identity matrix is


We would like a matrix analog of the inverse of a real number.
单词:
analog  adj 模拟的  有长短针的
        n  模拟 类似物
inverse adj 相反的 倒转的         
翻译:我们希望有一个矩阵实数翻转的模拟器。
谓语: like 


We know the inverse of a real number x is 1/x and that the product of x and its inverse is 1.

单词:
know 知道 认识 懂得
翻译:我们知道实数x相反数是 1/x 并且 x 和相反数相乘的结果是1. 

谓语: know  



We need a matrix I that we can think of as a “matrix one".

单词:
翻译:我需要一个矩阵我们是能够认为一个能够 作为单位举证的矩阵I

谓语: need


The inverse matrix A−1 of a matrix A is the matrix that ensures AA−1 = I. For example,

单词:

翻译:逆矩阵 矩阵A是确保 AA−1 = I A^-1 的矩阵。




原文:
Note that the inverse of A−1 is A. So AA−1 = A−1A = I. The inverse of a product of two matrices is the product of the inverses, but with the order reversed:



Note that the inverse of A−1 is A. So AA−1 = A−1A = I.
单词:

翻译:注意 A−1的逆是A所有So AA−1 = A−1A = I.。


The inverse of a product of two matrices is the product of the inverses, but with the order reversed:

单词:
the order reserved 排序颠倒.
翻译:两个矩阵乘积的逆是两个矩阵逆的乘积,但是顺序颠倒了。

(AB)^-1=B^-1B^-1



We will return to the question of computing inverses later in the chapter.

单词:
翻译: 在本章的后面我们返回到计算矩阵逆的这个问题。

谓语:return v 返回


The transpose AT of a matrix A has the same numbers but the rows are
switched with the columns. If we label the entries of AT as a′ij then

单词:
transpose v  调转 转移 移项
          n 转置阵
entry n 进入 入口 条目          
翻译: 转置阵 AT和A举证有相同数量的举证但是列 和行进行了调换。若我们 标签 ij 作为条目时。



The transpose of a product of two matrices obeys a rule similar to Equation (5.4):
单词:
obey v 服从 听从 顺从 听话
翻译:两个矩阵相乘的转置遵守和等式相同的规则
(AB)T = BTAT.
谓语: obey 



原文:

The determinant of a square matrix is simply the determinant of the columns of the matrix, considered as a set of vectors. The determinant has several nice relationships to the matrix operations just discussed, which we list here for reference:

The determinant of a square matrix is simply the determinant of the columns of the matrix, considered as a set of vectors.

单词:
square adj 平方的 正方形的  直角的 正直的
       v 成方形  使成方形 于...一致
       n  平方 广场 正方形
翻译:方阵行列式矩阵是简单地行列行列式,被认为是向量的集合。

谓语:is 

The determinant has several nice relationships to the matrix operations just discussed, which we list here for reference:

单词:
several adj 几个的 各自的
翻译:方阵行列数有几个和举证非常好的联系为了矩阵的操作被讨论,我们这里列举了所涉及的。


|AB| = |A| |B| 
谓语:has 
```

### Vectors Operations in Matrix From 
```
原文:
In graphics, we use a square matrix to transform a vector represented as a matrix. For example, if you have a 2D vector a = (xa,ya) and want to rotate it by 90 degrees about the origin to form vector a′ = (−ya, xa), you can use a product of a 2 × 2 matrix and a 2 × 1 matrix, called a column vector. The operation in matrix form is


In graphics, we use a square matrix to transform a vector represented as a matrix.

单词:
翻译:在图像学中,我们使用方形矩阵为了去移动这个用矩阵表示的向量。

谓语: use 




For example, if you have a 2D vector a = (xa,ya) and want to rotate it by 90 degrees about the origin to form vector a′ = (−ya, xa), you can use a product of a 2 × 2 matrix and a 2 × 1 matrix, called a column vector.

单词:

翻译:例如,若你有一个2d向量a = (xa,ya) 并且 你想去围绕原点旋转这个向量90度到向量
a′ = (−ya, xa),你可以使用 2x2矩阵 和 2x1的被称为列矩阵矩阵相乘，




We can get the same result by using the transpose of this matrix and multiplying
on the left (“premultiplying”) with a row vector:

单词:

翻译:听过使用矩阵的逆乘以左边的行矩阵我们可以获得相同的结果

(AB)T=BT AT



原文:
These days, postmultiplication using column vectors is fairly standard, but in many older books and systems you will run across row vectors and premultiplication. The only difference is that the transform matrix must be replaced with its transpose.


These days, postmultiplication using column vectors is fairly standard, but in many older books and systems you will run across row vectors and premultiplication. 

单词:
postmultiplication n 自右相乘
These days  这些天 目前 
fair  adj 公平 公正 美丽的 晴朗的
fairly adv 相当地 公平地 简直

翻译:目前，自右乘使用的列向量是公认为的标准,但是在一些老师和老系统里面你将绕过行 向量和自右乘。

谓语  is   




The only difference is that the transform matrix must be replaced with its transpose.(宾语从句)

单词:
翻译:这些差距是移动动作的矩阵一定会被替换成逆矩阵。

谓语: is 


原文:
We also can use matrix formalism to encode operations on just vectors. If we consider the result of the dot product as a 1 × 1 matrix, it can be written


We also can use matrix formalism to encode operations on just vectors. 
单词:
formalism n 形式主义 形式体系
翻译:在只有向量的情况下我也会使用 矩阵的形式体系为了去 编码操作.

谓语 use 


If we consider the result of the dot product as a 1 × 1 matrix, it can be written

单词:
翻译:如果我考虑1x1 举证的点乘结果,它会被写成 a · b = aTb
谓语: consider 




原文:
A related vector product is the outer product between two vectors, which can be expressed as a matrix multiplication with a column vector on the left and a row vector on the right: abT. The result is a matrix consisting of products of all pairs
of an entry of a with an entry of b. For 3D vectors, we have


A related vector product is the outer product between two vectors, which can be expressed as a matrix multiplication with a column vector on the left and a row vector on the right: abT.

单词:
ralate  v 叙述 涉及 使.....有联系  认同 符合
ralated adj 叙述的 讲述的 有关系 有联系的
outer adj 外面的 外部的 远离中心的
翻译:一个相关联的向量乘积是 远离乘积之间的两个向量, 两个向量乐意被理解为 矩阵的乘积 左边是
横矩阵和右边的列举证:abT.




he result is a matrix consisting of products of all pairs of an entry of a with an entry of b. For 3D vectors, we have

单词:
consist v  由....组成 在于 符合
翻译: 他结果是一个矩阵  a条目  和 b条目 的所有副 相乘组成的  

谓语 is 



原文:
It is often useful to think of matrix multiplication in terms of vector operations. To illustrate using the three-dimensional case, we can think of a 3 × 3 matrix as a collection of three 3D vectors in two ways: either it is made up of three column vectors side-by-side, or it is made up of three row vectors stacked up. For instance, the result of a matrix-vector multiplication y = Ax can be interpreted as a vector whose entries are the dot products of x with the rows of A. Naming these row vectors ri, we have


It is often useful to think of matrix multiplication in terms of vector operations. 
单词:

翻译:在向量操作这部分里经常考虑使用矩阵乘法。


To illustrate using the three-dimensional case, we can think of a 3 × 3 matrix as a collection of three 3D vectors in two ways: either it is made up of three column vectors side-by-side, or it is made up of three row vectors stacked up

单词:
illustrate v 阐明 举例说明 图解
made up 化妆成 编造成
stack up 堆起来 加起来
翻译:为了举例书说明单位坐标系情况,我们可以考虑一个 3x3的矩阵作为三个3d向量的集合的两种方式:一种是编造三个横向量边并着边,另一种编造三个竖向量堆叠起来。

谓语:illustrate 



For instance, the result of a matrix-vector multiplication y = Ax can be interpreted as a vector whose entries are the dot products of x with the rows of A. Naming these row vectors ri, we have

单词:
for instance 例如
interpret v 说明 解释 翻译
翻译:例如,这矩阵向量乘法的结果y=ax 可以被解释作为一个向量，这个向量的条目x和a进行点乘，



Alternatively, we can think of the same product as a sum of the three columns ci
of A, weighted by the entries of x:

单词:
alternative adj 供选择的 选择性的 交替的 
          n 二中选一  提供选择
alternatively adv  要不 或者 非此即彼

翻译:或者,我们会吧乘积考虑为相似是三个横向量相加

谓语  think  




原文:
Using the same ideas, one can understand a matrix-matrix product AB as an array containing the pairwise dot products of all rows of A with all columns of B (cf. (5.2)); as a collection of products of the matrix A with all the column vectors of B, arranged left to right; as a collection of products of all the row vectors of A with the matrix B, stacked top to bottom; or as the sum of the pairwise outer products of all columns of A with all rows of B. (See Exercise 8.)


Using the same ideas, one can understand a matrix-matrix product AB as an array containing the pairwise dot products of all rows of A with all columns of B (cf. (5.2)); 
单词:
pairwise adv 成对地 成双地
         adj  成对发生的

翻译:使用相似的方法,这个方法可以理解成 矩阵和矩阵的乘积AB当做一个数字容器成对的 所有A的行分别和B所有列进行点乘。


These interpretations of matrix multiplication can often lead to valuable geometric interpretations of operations that may otherwise seem very abstract.

单词:
interpretation n 解释 说明
interpret v 解释 说明
valuable adj 有价值的 贵重的 可估价的
翻译:矩阵乘法的说明经常会导致有有价值的操作那些非常抽象的几何学说明
谓语:lead 
```
### Special Types of Mateices (特别的矩阵类型)
```
原文:
The identity matrix is an example of a diagonal matrix, where all nonzero ele- ments occur along the diagonal. The diagonal consists of those elements whose column index equals the row index counting from the upper left.


The identity matrix is an example of a diagonal matrix, where all nonzero ele- ments occur along the diagonal.

单词:
identity n 身份 同一性 一致 
diagonal n 斜线 对角线
         adj 斜的 对角线的 斜纹的
occur v 出现 发生  存在         
翻译:一致性矩阵是对角线矩阵的一个例子,所有非零元素都出线在对角线上。


The diagonal consists of those elements whose column index equals the row index counting from the upper left.

单词:
consist v 由.....组成  由.....构成
翻译:这斜线由这些从左上开始列索引个行索引相等的元素组成



The identity matrix also has the property that it is the same as its transpose. Such matrices are called symmetric.

单词:
symmetric adj 对称的 匀称的 
翻译:一致性矩阵也有转置不变的属性.因此这个矩阵叫做对称矩阵。



原文:
The identity matrix is also an orthogonal matrix, because each of its columns considered as a vector has length 1 and the columns are orthogonal to one another. The same is true of the rows (see Exercise 2). The determinant of any orthogonal matrix is either +1 or −1.



The identity matrix is also an orthogonal matrix, because each of its columns considered as a vector has length 1 and the columns are orthogonal to one another.
单词:
orthogonal adj 直角的  正交的
翻译:这一致性矩阵也是一个正交矩阵,因为每一列都包含一个向量长度为1 并且每一列都相互正交



The same is true of the rows (see Exercise 2). The determinant of any orthogonal matrix is either +1 or −1.

单词:
翻译:行也是如此。任何一个对角线的行列式 +1 或 -1 里的一个


A very useful property of orthogonal matrices is that they are nearly their own inverses. Multiplying an orthogonal matrix by its transpose results in the identity,

单词:非常有用处的正交矩阵的属性是他们自己的反面。相乘的一个正交矩阵通过他们在统一性里的转换结果。


原文:
This is easy to see because the entries of RTR are dot products between the columns of R. Off-diagonal entries are dot products between orthogonal 
vectors, and the diagonal entries are dot products of the (unit-length) columns with themselves.


This is easy to see because the entries of RTR are dot products between the columns of R. 
单词:
翻译:这容易是为了看,因为 这些 RTR条目 时候 R的列之间的点乘



The matrix is diagonal, and therefore symmetric, but not orthogonal (the columns are orthog-onal but they are not unit length).

单词:
翻译:斜线矩阵因此矩阵是对称的，但是没有正交（列是正交但是他们不是单位长度）
```
### Computing with Matrics and Determinants
```
Computing with  Matrics and Determinants 计算矩阵和行列式


```