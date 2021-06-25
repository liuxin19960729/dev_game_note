## explicit
```
使用条件:只有一个参数的构造函数  (表明:构造函数是显示的)

defalut implicit 隐式


例 
  Class  classname{
     classname(int size){

     }
     classname(const char *p){

     }
  }

  classname c(1)
  classname c("a")
  classname c=1;
   classname c="a";

上面的使用都是正确的使用方式
 classname c=1;
   classname c="a";

   上面这两条使用方式当构造参数只有一个的时候允许使用

    相当于编译器做了这样的一个转换
      classname tmp(1);
      clasname c=t;


当我们为了避免使用=这种方式就需要在构造参数前面加商 explicit

  Class  classname{
    explicit classname(int size){

     }
     explict classname(const char *p){

     }
  }




  注意 explict 使用的时候只能不能使用大于一个参数的构造参数上面
  
```