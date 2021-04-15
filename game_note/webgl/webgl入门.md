```js
canvas wdith 和  height   设置画布的像素区域

webgl执行流程
1.获取canvas元素
2.获取webgl绘制上下文
3.初始化着色器
4.设置canvas背景颜色
5.清除canvas
6.绘图 



初始化做色器(webgl执行流程的第三步)

initShader(gl,vshader,fshader):boolean


顶点着色器
    开始方法
    void main()
    内置变量
    gl_Position:vec4  //点的位置  里面也是float (1.0,1.0,1.0,1.0) 第4个参数就是齐次坐标
    gl_PointSize:float //点的尺寸(像素数) default 1.0 注意不能写成int类型
glsl 语言是强类型语言
    

顶点坐标(齐次坐标为1.0)

其次坐标(x,y,z,w)等价于三维坐标 (x/w,y/w,z/w)
当w=1的时候 就能把他当成三维坐标来使用 x/1=x.....




片元着色器
    void main() 方法开始

    gl_FragColor:vec4 将颜色值赋值给屏幕上像素的点
    vec4 里面是float 对应的数据分别是 (r,g,b,a)



绘制操作
    gl.drawArrays(gl.POINTS,0,1)
    void drawArrays(mode,first,count)绘制函数
    mode 绘制方式
    first 从那个点开始绘制 int类型

    count 绘制需要用到多少个点

INVALID_ENUM model参数不符合

INVALID_VALUE  first或count 是负数


调用 drawArrays() -->顶点作色器执行count次
执行顶点着色器-->并执行内部的main函数()

顶点着色器执行完-->执行片元着色器 -->内部的main函数 gl_FragColor内置变量用来设置像素点的颜色



webgl的坐标系统(笛卡尔积 右手定则) 默认 (也可以用其他的)




从js里面传入参数到 -->顶点着色器
    attribute  (传入与顶点相关的数据)
       用来外部-->传入顶点着色器的修饰的参数
       只有顶点着色器能够使用它 
    uniform (对所有顶点都相同的数据与顶点无关)


 参数的声明
 attribute vec4 a_Position;
 
 //着色器创建，并且会辨别着色器里面的attribute变量 ,每个变量都具有存储地址

 var a_Position = gl.getAttribLocation(gl.program,'a_Position');//返回的是程序变量的变量地址

获取gl.program程序里面的a_position变量名的变量地址


```