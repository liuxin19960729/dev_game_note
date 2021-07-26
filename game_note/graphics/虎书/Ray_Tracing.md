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

```