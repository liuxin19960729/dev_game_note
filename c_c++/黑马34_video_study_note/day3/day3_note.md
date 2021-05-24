
### 类型转换

```
隐式

    char ,short ->singed int ->unsinged int ->long ->double

    float->double

    例 当我们使用 int 和 float 进行运算的时候 编译器会将int->double   float->double 进行运算 得出的结构就是double烈性的数


    1.编译器隐式转换
    float a = 1.0f;
	int b = 20;
    (a+b) 这个操作会编译器转换  a -->double  b-->double  (a+b) 这个结果是double类型
    2.赋值进行隐式转换    
    float a = 1.0f;
	int b = 20;
	int c =a+b; 这个结果是double类型(编译器转换)  左边一个int c 又经过赋值把double类型隐式转换成了init类型
   

     注意  当小转大 不可以发生数据丢失
           当大转小可能发生数据丢失
             
强制

```