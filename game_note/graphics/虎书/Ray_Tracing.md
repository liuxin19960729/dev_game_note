```
compose v 组成 
composed adj  镇静的 沉着的

composed of many geometric objects  

arrange  v 安排 计划
arranged  adj 安排的    v  arrange的过去分词

particular adj 详细的 


render is a process that  as its inputs  a set of objects and produces as output an array piexed .
    渲染是输入几个图像的集合输出一堆像素点的过程

each geometric objects to  each pixel。



two general way 
  one 
     object-order rendring 
     in each 依次
     each objectis consider in turn. 

     for each objects all the pixel that it influences are found and  update。



 two 
    Image-order rendring
    each pixels is consider in turn ,and for each pixels all the objects that  influence  it  are found and pixelsvale is computed .


apporache  n 方式 方法  路径




two rendering apporache compute same iamge but  they  lend themseleves computing kinds of effects and have quite differents performace characteristics .


strength  n 优势 长项





Ray tracing is an image-order algorithm for make ing renderings of 3D scences .

```




## The basic Ray-Tracing Algorithm
```

ray tracker works by(连词) computing one piexl at time .


each piexl basic task is  to find object that is seen  at that  pixel's position in the image .
  每个像素的基本任务去寻  在图片上这个位置能看的见的对象
 

any objects that  is seen  by pixel must intersect viewing  ray .

emanate v 生产 散发
 
The particular objects We want is the  one 
intersects viewing raying nearest the camera。

详细的对象我想一定是个在摄像机附近的相交视线里


it(particular object) blocks  the view of any  other objects   behind   it .

Once that objects is found . 

shading adj 阴影的

surface normal 曲面法线

desired adj  渴望的  desire  v 渴望


baisc ray tracer has three part 

1.ray generation , computes the origin and direction of each piexls viewing ray based  on the camera  geometry .

based  on the camera  geometry  基于摄像机集合学



 computes the origin and direction of each piexls viewing  ray
计算每一个像素视线的原点和方向



2.ray intersection(光线交叉)  --find  closest objects intersecting the viewing ray.   
找到 最近的对象和视线相交


2.shading ，-- computes  piexls color base on  the tesult  of ray intersection.



* The structure of basic ray tracing program is :


for each pixels 遍历每一个像素点
    compute viewing ray // 计算观察视线

    find first object hit by ray and its surface normal n
    set pixel color to value computed from hit point ,light and n.

 
      
```

## perspective 
```
n 远景 透视图



approach for (n 方式 v走进)

approach for both art and photography.


projection n 投射

paraller projection 平行投射

mapped to 2D  moving them along a projection.
沿着投影移动动他们映射到2D.



along a projection direction util they hit image plane 。


choice of projection direction and image plane.


oblique 
     n 倾斜物
     adj 倾斜的
     vi 倾斜


Paraller projection often used for mechanical and architecture .


pre zer ve  
   n 保护区 禁猎区
   v 保护



paraller projection advantage :平行投影的优势



recede 
   vt 后退 减弱
   vi 回退



paraller lines receding into the distance do not appear  paraller.

beacase eyes and camera don't collect light from single viewing direction .
As has recognized by artists   since the Renaissance .

```


```
oblique adj 倾斜的   n 倾斜物

advantage n 优势 利益

as a  result 结果 
as  a result paraller lines receding into  distance do not appear not paraller .




perspective  projection 透视投影


farther   far 比较级 
         adj 更远的


natural adj 自然的
        n 自然的事物
naturally adv 自然地



perspective projection is natually viewport ,objects farther   objects natually viewprort beacome smaller.



A perspective view is determined by the choice of viewpoint and image plance . (透视被视角和 物体的位置决定)

natural adj 自然的

manual adj 手动的

direct adj 直接的 
      n


They are drawn where meet a  view plant in front of the eye .

```


## Computing Viewing Rays
```
work out 解决
There are many ways to work out the details of camera geometry.


In order to 为了


really  adv 是实地 真正地


A ray really just a origin and propagation direction .(射线  目标点 =目标和+传播方向)


interpret 
      vt vi 解释 说明


give
  v 给 产生 让步 举办

given 
   give 的过去分词 
   vt 给予
   adj 赠予 沉溺于  规定的
  


general adj   一般的  普通的

generally  adv 通常地 普遍地

behind prep 在....后面



computing a viewing ray ,We need to need e(orign) and s.



actual adj 事实上 实际上 
actually adv 事实上地 实际地


diffcult adj 困难的

if we look at the problem in the right coordinate system .

orthonormal  adj 标准正交的 正规化的



All of our ray generation methods start from orthonormal coordinate frame  konws as the camera frame .



denote vt 表示 指示



which We'll denote by e ,for the eye point.
 


right handel coordinate system。右手坐标系统




most common way 常见的方法


event though  虽然 即使



Even though a paraller doesn't have a viewport per se . 
   (平行 视线没有视点)



The viewing rays should start on the plane defined by the point e and the vector u and v .  



remain v 剩下 仍然 

require v 需要 要求 命令


suppose  v 假设 任务 猜想 


dimension n 尺寸 容积
           vt 测量  尺寸



l and r are the position of  left and right edges  of the image .


mesure n 测量  尺寸
        v 测量 估算



rectangle n 长方行 矩形


apart adj 相聚 分离  与众不同
      adv   相聚 分离    与众不同



horizontal n 水平 
           adj 水平的
horizontally 水平地

vertical 
    n 垂直线
    adj 垂直的
vertically adv 垂直地



orthographic adj 直角的 正字法的
behind 在...后面



space n 空间 间隔 太空
      v 留间隔 隔开
spaced v 以一定的间隔进行排序
   

orthographic adj 直角的  正字法的


already adv 找已 已经

procedure n 程序  手续  步骤

oblique n 倾斜无 v  倾斜  adj 斜的  不光明正大的


separate adj 分开的 单独的
         v  分开  单独


exact  v 要求 需求 急需  勒索钱财  adj 准确的 精确的 精密的
exactly adv 恰好地 正是 精确地

substitute n 替代品 
           v 替代  代替


```


## Perspective View
```
no longer 不再

loose adj 宽松的 散漫的 不牢固的 
      v 释放 变松 开火 放枪
loosely adv 宽松地 放荡地 轻率地
           
focal length 焦点长度

choose  v 选择 决定 挑选

situation n 情况 形式 处境  位置

illustrate v 图解 举例说明 

specify  v 指定 详细说明 举例

expression n 表现 表达 表情

slight adj 轻微的 少量的 脆弱的 细长的


intersection n 交叉  十字路口 交集  交叉点

in practice 在实践中

slight adj 稍微的 轻微的
slightly adv 稍微地 轻微地

problem n 难题  引起麻烦的人

general adj 稍微的  普遍的

useful 稍微的 有用的

occur 发生 存在 出现


case  n 情况 实例 
      v 包围  把....装在箱里


sphere  n 球体  球形包围盒
        v 把....放在球体包围盒

triangle n 三角行 三角行关系 

```

## Ray-sphere Intersection
```
implicit adj 含蓄的 暗示的 盲从的

like to 喜欢 

intersection n 交叉点
intersec v 交叉 横截

satisfy  v 令人满意 令人满足  满足 说服

seek  v 寻找 寻求 探索


radius n 半径

satisfy v 令人满意 令人满足
         蚂蚁 说服
         复数 satisfies

plug n 插头 塞子 栓
     v 塞住  插入

yield v 产出 放弃  让路
      n 产量  利润 

rearrange v 重新排列 重新整理

except v  除....之外


classic adj  经典的 古典的 传统的  
        n 名著 经典著作 大艺术家

quadratic n 二次方程

discriminant n 判别式 辨别因数

imaginary  adj 虚构的 想象的  虚数的


positive adj 积极的  正的 阳性的 确定的 坑定的 绝对的 真识的
          n  正数 正片

graze v 放牧 吃草 擦伤
      n 放牧 擦伤

exact  adj 准确的 精密的 要求 强求
         exactly  adv 恰好地 正是

factor n 因素
```

## Ray-Triangle intersection
```
barycentric  adj 重心的

vertix  n 定点 头顶 天顶
      复数 vertices   vertexes

numerical adj 数值的 数字的 数字表示的
          numerically  adv    数字上 用数字表示


analytical adj 分析的 解析的 善于分许的 
analytically adv 分析地 解析地 


plane n 平面 飞机

for some 对于一些

Otherwise  n  否则


degenerate  v 使退化 恶化
            adj 退化的  恶化的
generate v 使形成 发生   

generation n  一代 产生

generator n 发电机 生产器


contain v 包含 控制 含有 自制

denote  v 表示 指示
   denoting  现在分词
   denoted  过去分词 过去式


determinant  n 行列式 决定因素
             adj  决定性的

subterm n子项

exploit v 开发  开拓
       exploits
       exploiting
       exploited
exploiter n 开拓者 剥削者


dummy  n 人体模型 防止品 
       adj 假的  仿真的


reuse v 在次使用  重复使用  
      n  在次使用  重复使用  
      reuses
      reusding
      reused 过去式  过去分词     
```
## Ray-Polygon Intersection
```
Polygone n 多边形

give --过去分词 过去式 given
 adj  赠予的  沉溺的 规定的
 v 给予（give）
give v给 产 给 让步 捐赠
n  弹性 弯曲 延展性

planar adj 二维的 平面的


vertex n 至高 头顶
vertices vertex的复数形式

implisit adj 含蓄的 暗示的

(p-p1)*n=0 n 为法线向量 垂直向量相乘法 为0 (cos 90=0)

allow  v 允许 许可 认可  容许 考虑
     allows 第三人称单数
     allowing 
     allowed  过去式 过去分词
whether   是否 不论  两者中任意一个

answer n 答案 回复 答复 回信
       v 回答 答复 适合 解决
     answers
     answering
     answered 过去式  过去分词

send
   v 发送 寄  派遣 派人 寄信
   sends
   sending 
   sent or sended  过去式 过去分词



boundary n 界线 边界  范围 

count v 计算总数 数数
      n 总数 数数 量的记数

odd  adj 奇数的 古怪的  剩余的 临时的
      n 奇数 怪人


propagate v 传播 传送 繁衍 繁殖
propagates
propagating 
propagated  过去 过去分词


straightforward adj 直接的 了当的 坦率的 
            adv  直接了当地 坦率地

arise v 出现 上升 起立

however  adv 无论如何  无论怎样
among 在....中间  在.....之中

whichever 任何一个

accomplish v  完成  实现 达到

accomplished adj 完成的 熟练的  有技巧的  有修养的 有学问的

```

## Intersecting a Group of Objects
```
consist v  由...组成 包含 符合
consists
consisting
consisted

camera along the ray 相机沿着射线

think of 记起 想起 考虑 想象 关心


```

## Shading 
```
Shading n 底纹 遮蔽 明暗法  描影法

Once the visiable surface for a pixel is know ,
首先一个可见的平面，是能够让像素知道的


evaluate v 评估 估价

the pixel value  is computed by evaluating a shding model .
这个像素值被计算光照模型计算。

entire adj 全部的 整个的 全体的
entirely adv  完全地 彻底地

one way or another .无论怎样  以某种方式

whereby adbv conj  凭借 通过 借以

illuminate v 阐明 说明 照亮 

The important varables in light reflection are  the light direction l, which is a unit vector
pointing

point n 点 标点 得分
      v 指向 弄尖 加标点于 指明


perpendicullar adj  垂直的 正交的 直立的 陡峭的
               n 垂直线 垂线



take place 发生 
taking place 正在发生

characteristic adj 典型的 特有的 
               n 特征 特性 特色


shininess n 发光 发亮

```

## Lambertian Shading 
```
observation n 观察 监视 观察报告 

fall on 指向


the amount of erergy from  a light source falls on an area of surface depend ons on the angle of the surface to the light.
能量 重光源指向一个依赖于曲面角度的曲面区域到光


coefficient n 系数 
adj 合作的 共同作用的

diffuse v 漫射 

as 
  adv 像......一样
  prep 作为 像 

separate  
 adj  分开的 单独的  不同的
 v 分离 分开 隔开  分手
 
separately adv 分别地 分离地

dot n 点 圆点 嫁妆 
    vi  打上点 

dot product 点积


product n 产品 结果 乘积 作品


The vector l is computed by substrcting the intersation point of the ray and surface from  the light source.



```

## Blinn-Phone Shading
```
independent adj 孤独的 单独的 

shininess  n 光照  光亮

producing hightlights 产生高亮
specular reflections  镜面反射


appear to move around as the viewpoint  change.

diffuse v 扩散  传播   漫射
        adj 弥漫的 散开的

wide  adj 广泛的  宽的的 
widely  adv 广泛地

propose v  建议 打算 计划 求婚


bright  adj 明亮的 鲜明的 聪明的 
brighter 更明亮的
brightest 最明亮的


mirror n 镜子 榜样 真是写照 
       v 反射 反映

smooth adj 顺滑的  光滑的  平稳的
        v 使光滑 消除 缓和

the relection then decreases smoothly as the 
verctors move away from mirror configuration

当反射平滑减小可能矢量从镜面结构移走



bisector n  二等分线


h:the bisector of angle between  v and l;

if h near n(normal)
     the specular component should be bright.




bright -->dim 

dim  adj 暗淡的 昏暗的 糊涂的 看不清的 
     v 使暗淡 失去光泽  变模糊


power n 能量 能力 电力  [数]幂

exponent n [数]指数  典型  说明者  倡导者 用拥护者


The power , or Phone  exponent , controls the apparent
shininess of the surface
```

## Blinn-Phone Shading
```
原文:
We can tell how close we are to a mirror configuration by comparing the half vector h (the bisector of the angle between v and l) to the surface normal (Figure 4.16). If the half vector is near the surface normal, the specular component should be bright; if it is far away it should be dim. This result is achieved by computing the dot product between h and n (remember they are unit vectors, so n · h reaches its maximum of 1 when the vectors are equal), then taking the result to a power p > 1 to make it decrease faster. The power, or Phong exponent, controls the apparent shininess of the surface. The half vector itself is easy to compute: since v and l are the same length, their sum is a vector that bisects the angle between them, which only needs to be normalized to produce h.


We can tell how close we are to a mirror configuration by comparing the half vector h (the bisector of the angle between v and l) to the surface normal (Figure 4.16). 

单词:
mirror n 镜子  真实写照 榜样
       v 反射 反应
tell  v 告诉 说 辨别  识别 泄密 告发
翻译:我们通过比较半矢量h(v和l相加进行二分的矢量)和平面法向量，来辨别镜子的结构理我们有多近





If the half vector is near the surface normal, the specular component should be bright;if it is far away it should be dim. 

单词:

翻译:若半向量接近法向量，反射会变亮。若远离法线会变得暗淡。




This result is achieved by computing the dot product between h and n (remember they are unit vectors, so n · h reaches its maximum of 1 when the vectors are equal), then taking the result to a power p > 1 to make it decrease faster. 

单词:
   then adj 当时的
        adv 当时 然而  那么 此外
翻译:这个结果被实现通过计算h(harf vector)和n(normal vector) 的点乘(值为最大值1的时候 h 和 n 相等 brightest)。然而 取结果的幂 p (p>1) 使结果减的越快。



The power, or Phong exponent, controls the apparent shininess of the surface.

单词:
   exponent n 指数  说明者 说明物 倡导者 鼓吹者
   apparent adj 显然的  表面上的
翻译:幂或者指数，控制表面上的平面光亮。



The half vector itself is easy to compute: since v and l are the same length, their sum is a vector that bisects the angle between them, which only needs to be normalized to produce h.


单词:
   since conj 自....以来  因为
          adv 自....以后  此后  之前
          prep 自....以后 何曾
翻译:半向量它自己使容易计算的:因为 v 和 l 使相同的长度,他们的和是他们二分角的一个向量，
仅需要h被进行归一化


原文

Putting this all together, the Blinn-Phong shading model is as follows:
h=v+l / ∥v + l∥
L = kd I max(0, n · l) + ks I max(0, n · h)p,

Putting this all together, the Blinn-Phong shading model is as follows:

单词:
   putt  v 轻击入洞
         n 轻击
   putting
        putt 的现在分词      
        v 放置 安置
翻译:所有的放置在一起,Blinn-Phong的光照模型如下



where ks is the specular coefficient, or the specular color, of the surface.


单词:
   coefficient n 系数 率 协同因数 
               adj 合作的 共同作用的      
翻译:上面kd 是平面的反射系数，或平面的反射颜色
```

## Ambient shading
```
单词:
ambient adj  周围的 环境的 环绕的
        n 周围环境 一种背景音乐


原文:
 
Surfaces that receive no illumination at all will be rendered as completely black, which is often not desirable. A crude but useful heuristic to avoid black shadows is to add a constant component to the shading model, one whose contribution to the pixel color depends only on the object hit, with no dependence on the surface geometry at all. This is known as ambient shading—it is as if surfaces were illuminated by “ambient” light that comes equally from everywhere. For convenience in tuning the parameters, ambient shading is usually expressed as the product of a surface color with an ambient light color, so that ambient shading can be tuned for surfaces individually or for all surfaces together. Together with the rest of the Blinn-Phong model, ambient shading completes the full version of a simple and useful shading model: 


Surfaces that receive no illumination at all will be rendered as completely black, which is often not desirable. 

单词:
receive v 接受  接待 接纳 接收
illunination n 照明  [光]照度 
desirable adj 可取的 值得拥有的 令人向往的 性感的
           n 称心如意的东西  合意的人 好的品质
翻译: 所有平面面没有接收到光照明,都将会渲染成完全的黑色，这通常是不可取的。


A crude but useful heuristic to avoid black shadows is to add a constant component to the shading model, one whose contribution to the pixel color depends only on the object hit, with no dependence on the surface geometry at all.

单词:
crude  adj 粗糙的 天然的 未加工的  粗鲁的
        n 原油  天然的物质
heuristic  adj  启发式的 探索的 
           n 启发式教育 探索性步骤
contribution n 贡献 捐献 投稿
翻译:粗略的但是有用去避免黑色阴影的启发是添加一个常量组件给关照模型,关照的贡献的像素的颜色仅依赖被照射到的对象,所有都不依赖表面几何。



This is known as ambient shading—it is as if surfaces were illuminated by “ambient” light that comes equally from everywhere.

单词:
   this is konw as  这就是所谓的

翻译:这就是所谓的环境关照-如果平面通过环境光被光照从任何地方照过来



For convenience in tuning the parameters, ambient shading is usually expressed as the product of a surface color with an ambient light color, so that ambient shading can be tuned for surfaces individually or for all surfaces together.

单词:
convenience adj  便利 厕所 便利的事物
tuning n 调音 起音 音调
express v 表达 快递 
      adj 明确的迅速的 专门的
      n 快车 快递 专柜
individual adj 个别的 个体的 独特的
           n 个人 个体

翻译:为了方便调节参数,环境光照通常被表达作为环境光颜色和平面颜色的一和结果, 因此环境
光照是为了这些平面的个体或者所有的平面一起一起被调节。



Together with the rest of the Blinn-Phong model, ambient shading completes the full version of a simple and useful shading model:


单词:
   together with  和  连同
   the rest of 其余的 剩下的 
翻译:连同其余的的Blinn-Phong模型,环境光照结束所有的简单的和有用的的光照模型

L=kaIa +kdImax(0,n·l)+ksImax(0,n·h)^n,


where ka is the surface’s ambient coefficient, or “ambient color,” and Ia is the
ambient light intensity.

单词:

翻译:ka 是 环境平面的系数 或 环境颜色 ，Ia 是 环境光的亮的层度
```

## Multiple Point Lights
```
原文:
A very useful property of light is superposition—the effect caused by more than one light source is simply the sum of the effects of the light sources individually. For this reason, our simple shading model can easily be extended to handle N light sources:




A very useful property of light is superposition—the effect caused by more than one light source is simply the sum of the effects of the light sources individually. 

单词:
   property n 性质 财产 所有权
   superposition n 叠加 重合
   cause v 引起 使遭受
        n 原因 事业 目标
   more than  多余 超出 比.....多   
   individual adj 个人的 个别的 独特的
             n 个人 个体
翻译:一个有用的光性质是重叠-这个效果被通过超出一个光源把他们个体光源效果进行简单的相加得到的
superposition.



For this reason, our simple shading model can easily be extended to handle N light sources:

单词:
extend v 延长 扩充
extended adj 延长的 扩大的 长期的 广大的  
翻译:对于这个原因，我们的简单光照模型可以简单的进行扩展去处理N个光照模型



原文:
where Ii, li, and hi are the intensity, direction, and half vector of the i^th light source.


where Ii, li, and hi are the intensity, direction, and half vector of the i^th light source.

单词:

翻译:Ii Li and Hi 是 强度 方向 和 i个光源个眼睛之间的半矢量

```

## A Ray-Tracing Program
```
原文:
We now know how to generate a viewing ray for a given pixel, how to find the closest intersection with an object, and how to shade the resulting intersection. These are all the parts required for a program that produces shaded images with hidden surfaces removed.


We now know how to generate a viewing ray for a given pixel, how to find the closest intersection with an object, and how to shade the resulting intersection.

单词:
   result  v 结果 导致  产生
           n 结果  成绩  答案 比赛结果
   resulting  adj  因而发生的 作为结果的
翻译:我们现在知道怎样给像素构建一个视图射线，怎样去寻找视图射线和对象最近的相交，怎样去遮挡作为结果的相交。


 These are all the parts required for a program that produces shaded images with hidden surfaces removed.


单词:
require v 需要  要求 命令
required adj 必须的
produce v 生产 引起 创作  生育 繁殖
        n 产品
翻译:这所有的程序生产遮挡的图像和隐藏的平面这不分去掉。

for each pixel do// 遍历每个像素
  compute viewing ray//
if (ray hits an object with t ∈ [0, ∞)) then//点是否在点上
 Compute n
  Evaluate shading model and set pixel to that color//用计算机计算光照模型
  //和设置像素的颜色
else
set pixel color to background color// 设置像素的颜色背景颜色

单词
    evaluate n 评估  估算 用计算机计算


原文：
Here the statement “if ray hits an object . . . ” can be implemented using the algorithm of Section 4.4.4.

单词:
here adv 在这里 此时
      n  这里
statement n 声明 陈述 叙述 报表     
翻译:这里的声明“若 射线 触碰到一个对象” 使用 Section 4.4.4的实现的算法




原文:
In an actual implementation, the surface intersection routine needs to some- how return either a reference to the object that is hit, or at least its normal vector and shading-relevant material properties. This is often done by passing a record/structure with such information. In an object-oriented implementation, it is a good idea to have a class called something like surface with derived classes triangle, sphere, group, etc. Anything that a ray can intersect would be under that class. The ray-tracing program would then have one reference to a “surface” for the whole model, and new types of objects and efficiency structures can be added transparently.


In an actual implementation, the surface intersection routine needs to somehow return either a reference to the object that is hit, or at least its normal vector and shading-relevant material properties. 

单词:
actual adj 真实的 实际的 现行的 目前的
routine n 例行程序 惯例 
somehow adv 以某种方式  莫名其妙
either pron  (两者中)   任意一个  每个  都不 
least little最高级 最小的 最少的
翻译:在实际的实现中，平面相交程序需要无论怎样都返回每个击打中的对象的引用,或至少低是他们的
法向量和光照相关的材质配置。

In an object-oriented implementation, it is a good idea to have a class called something like surface with derived classes triangle, sphere, group, etc.

单词:
   object-oriented adj 面向对象的
翻译:在面向对象的实现里,这是一个好的想法 为了类调用像被驱动的多个三角形,球体个组等等的类平面的某物，



Anything that a ray can intersect would be under that class.

单词:
anything  pron 任何东西 任何事物 重要东西
          adv 根本 究竟(表否定)
under adv 在下面 少于
       prep 在 ....下面 在什么表面下          
翻译:一个射线会相交任何在下面的任何类


The ray-tracing program would then have one reference to a “surface” for the whole model, and new types of objects and efficiency structures can be added transparently.

单词:
then adj 当时的 
     adv 当时  然后 那么 此外 总之
whole adj 完整的 纯粹的
      n 整体 全部 
efficiency n 效率 效能 功效 

transparent adj 透明的 显然的 易懂的
transparently adv 显然地 易察觉地 明亮地
翻译:射线追踪程序当有一个引用到全部的模型平面,和 新对象的类型和效能结构能够透明的被添加
```

## Object-Oriented  Design  for Ray-Tracing Program
```
原文:
As mentioned earlier, the key class hierarchy in a ray tracer are the geometric objects that make up the model. These should be subclasses of some geometric object class, and they should support a hit function (Kirk & Arvo, 1988). To avoid confusion from use of the word “object,” surface is the class name often used. With such a class, you can create a ray tracer that has a general interface that assumes little about modeling primitives and debug it using only spheres. An important point is that anything that can be “hit” by a ray should be part of this class hierarchy, e.g., even a collection of surfaces should be considered a subclass of the surface class. This includes efficiency structures, such as bounding volume hierarchies; they can be hit by a ray, so they are in the class.


As mentioned earlier, the key class hierarchy in a ray tracer are the geometric objects that make up the model.

单词:
mention  v 提及  谈到  说起
         n 提及 说起
hierarchy  n 层级  等级制度  
geometric  n几何学 
make up 组成 补足 化妆 
翻译:如前面所说，在射线追踪器里关键的类层级是几何对象组成的模型。


These should be subclasses of some geometric object class, and they should support a hit function (Kirk & Arvo, 1988). 

单词:

翻译:这应该是几何对象的基类,并且他们应该支持击打函数。



To avoid confusion from use of the word “object,” surface is the class name often used.

单词:
confusion n 混淆 混乱 困惑

翻译:为了避免使用词“对象”混淆，平面是类名经常被使用。

With such a class, you can create a ray tracer that has a general interface that assumes little about modeling primitives and debug it using only spheres.

单词:
assume  v 设想 承担 采取
primitive adj  原始的 远古的 简单的  基础的
翻译:这样的一个类,你可以创建一个通用接口的光线追踪器，假设很少关于通用接口的基础模型那可能就只能使用球体去调试


An important point is that anything that can be “hit” by a ray should be part of this class hierarchy, e.g., even a collection of surfaces should be considered a subclass of the surface class.

单词:
hierarchy n 层级 等级制度
consider v 考虑 认为 考虑到 细想
翻译:任何一个重要的点都能够通过射线到类层级这部分被击打，甚至 一个平面集合会被认为平面
类子类


This includes efficiency structures, such as bounding volume hierarchies; they can be hit by a ray, so they are in the class.


单词:
efficiency n 效率 效能 功效
hierarchy n 层级 
bounding volume hierarchies  包围盒层次
翻译:这包含效率结构,例如包围盒的层次；如果他们在这个类里面,他们会通过射线击打






原文:

For example, the “abstract” or “base” class would specify the hit function as well as a bounding box function that will prove useful later:


For example, the “abstract” or “base” class would specify the hit function as well as a bounding box function that will prove useful later:

单词:
as well as  和....一样  不但.....而且
prove  v 证明 检验 显示 
翻译:例如,抽象或基础对象指定不但指定hit 函数而且还指定将要指定后面使用的验证包围盒的函数




原文:
Here (t0,t1) is the interval on the ray where hits will be returned, and rec is a record that is passed by reference; it contains data such as the t at the intersection when hit returns true. The type box is a 3D “bounding box,” that is two points that define an axis-aligned box that encloses the surface. For example, for a sphere, the function would be implemented by


Here (t0,t1) is the interval on the ray where hits will be returned, and rec is a record that is passed by reference; it contains data such as the t at the intersection when hit returns true.

单词:
interval n 间隔 间隙

翻译:Here(t0,t1)是在射线的上发射点到击中之间位置的间隔,rec 是一个已经用过的引用记录,
它包含的数据 例如 t 在 与平面对象相交击打的是返回的值


The type box is a 3D “bounding box,” that is two points that define an axis-aligned box that encloses the surface. 

单词:
enclose v  围绕  装入
axis-aligned 坐标轴对其的盒子

翻译:这个类型的盒子是一个3D的包围盒,
定义两点的坐标轴对齐的盒子包围这个平面



原文:
 
The point p is not in shadow, while the point
q is in shadow.
Another class that is useful is material. This allows you to abstract the material behavior and later add materials transparently. A simple way to link objects and materials is to add a pointer to a material in the surface class, although more programmable behavior might be desirable. A big question is what to do with textures; are they part of the material class or do they live outside of the material class? This will be discussed more in Chapter 11.



The point p is not in shadow, while the point
q is in shadow.

单词:

翻译:这p点没有在阴影中,与此同时q点在阴影中


Another class that is useful is material. 

翻译:另一个类有用的类是材质类



This allows you to abstract the material behavior and later add materials transparently.

单词:
transparent adj 透明的 显然的 坦率的 易懂的
transparently adv 显然地 易察觉地
翻译:这允许你去抽象材质的行为和后面去添加透明的材质




A simple way to link objects and materials is to add a pointer to a material in the surface class, although more programmable behavior might be desirable.

单词:
翻译:一个简单的方法是连接对象个材质,在平面类里面这个方法是添加一个点到材质上。通过
更多可编程的行为使他描述和显示出来



A big question is what to do with textures; are they part of the material class or do they live outside of the material class? This will be discussed more in Chapter 11.

单词:
do with 利用 处理 需要
live v 居住 生存  生活
     adj 活的 实况转播的 现场表演的
翻译:一个大问题是如何处理纹理;他们部分材质类或他们生活之外的材质类？这个将在第11章有更多的
讨论

```

## Showdows
```
原文:
Once you have a basic ray tracing program, shadows can be added very easily. Recall from Section 4.5 that light comes from some direction l. If we imagine ourselves at a point p on a surface being shaded, the point is in shadow if we “look” in direction l and see an object. If there are no objects, then the light is not blocked.


Once you have a basic ray tracing program, shadows can be added very easily.
单词:
once adv  一次  曾经  
     conj 一旦
翻译:一旦你有一个基本的射线追踪的程序，阴影会被非常容易的添加。


Recall from Section 4.5 that light comes from some direction l.
翻译:回到第4.5小节光从一些方向来。


If we imagine ourselves at a point p on a surface being shaded, the point is in shadow if we “look” in direction l and see an object.

单词:

翻译:若果我们想象我们自己在a平面上添加的一个点p,这个点在阴影里面，如果我们看对象的方向是l。



If there are no objects, then the light is not blocked.
单词:
翻译:如果没有对象的时候这个光不会被阻挡。



原文:
This is shown in Figure 4.17, where the ray p + tl does not hit any objects and is thus not in shadow. The point q is in shadow because the ray q + tl does hit an object. The vector l is the same for both points because the light is “far” away. This assumption will later be relaxed. The rays that determine in or out of shadow are called shadow rays to distinguish them from viewing rays.


This is shown in Figure 4.17, where the ray p + tl does not hit any objects and is thus not in shadow.

单词:
thus  adv 因此 从此 这样 如此
翻译:图 4.17里面展示，射线 p+tl  没有触碰到任何对象因此没有在阴影里面。


The point q is in shadow because the ray q + tl does hit an object.

单词:
翻译:点q 在阴影里面因为射线 q+tl 碰撞到了对象。


The vector l is the same for both points because the light is “far” away.

单词:
翻译:对于所有点矢量 l 是 相同的 因为光能照射非常的远。



This assumption will later be relaxed. The rays that determine in or out of shadow are called shadow rays to distinguish them from viewing rays.

单词:
assume v 假定 猜想
assumeption n 假定 设想 
relax  v 放松 休息 松懈 松弛 放宽
later adv 延迟 稍后 后来
distinguish v 区别 区分 辨别 使杰出
翻译:猜想将被延迟放宽后.决定在阴影里或外面 的光线被叫做阴影射线 这样做事为了和视图射线进行
区别



原文:
To get the algorithm for shading, we add an if statement to determine whether the point is in shadow. In a naive implementation, the shadow ray will check for t ∈ [0, ∞), but because of numerical imprecision, this can result in an inter- section with the surface on which p lies. Instead, the usual adjustment to avoid that problem is to test for t ∈ [ε, ∞) where ε is some small positive constant (Figure 4.18).



To get the algorithm for shading, we add an if statement to determine whether the point is in shadow.

单词:
statement n 声明 陈述 叙述 报表
whether conj 是否 不论  
         pron  两个中的哪一个
翻译:为了获得阴影的算法.我们添加一个是否点在阴影里的一个定义.
```