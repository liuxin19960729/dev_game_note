# Linear Algebra (线性代数)
```
原文:
Perhaps the most universal tools of graphics programs are the matrices that change or transform points and vectors. In the next chapter, we will see how a vector can be represented as a matrix with a single column, and how the vector can be represented in a different basis via multiplication with a square matrix. We will also describe how we can use such multiplications to accomplish changes in the vector such as scaling, rotation, and translation. In this chapter, we review basic linear algebra from a geometric perspective, focusing on intuition and algorithms that work well in the two- and three-dimensional case.


Perhaps the most universal tools of graphics programs are the matrices that change or transform points and vectors.

单词:
perhaps adv  或许 也许
universal adj 普遍的 通常的 
翻译:互殴图形程序最普遍的工具是矩阵，用于变换和移动点和向量






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
翻译:在这一节,我们重新从几何学方面看基础的线性代数,在二维和三维坐标系中专注于直觉和算法会使用的非常好。





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


```