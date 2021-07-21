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
 

 
```