## 构造函数
```c++
构造函数 可以声明为  public protected private

class Box {
public:
    // Default constructor
    Box() {}

    // Initialize a Box with equal dimensions (i.e. a cube)
    explicit Box(int i) : m_width(i), m_length(i), m_height(i) // member init list
    {}

    // Initialize a Box with custom dimensions
    Box(int width, int length, int height)
        : m_width(width), m_length(length), m_height(height)
    {}

    int Volume() { return m_width * m_length * m_height; }

private:
    // Will have value of 0 when default constructor is called.
    // If we didn't zero-init here, default constructor would
    // leave them uninitialized with garbage values.
    int m_width{ 0 };
    int m_length{ 0 };
    int m_height{ 0 };
};


也可以在实现文件(xxx.c)文件里面定义构造函数
   namespace::Classname::Calssname:()(可以写定向列表){

   }



m_width(width), m_length(length), m_height(height)  叫做定向列表
  
  作用：在执行构造参数之前init 参数

  初始化时 参数可以是构造参数之一 
  const(常量) 引用的成员必须要在设定向列表中进行初始化
  应在初始值设定列表中对参数化基类构造进行调用，以确保在执行派生构造函数之前完全初始化基类

```

### 默认构造函数
```
若依赖默认构造函数务必在类定义中初始化函数

class Box {
public:
    int Volume() {return m_width * m_height * m_length;}
private:
    int m_width { 0 };//在类定义中初始化函数
    int m_height { 0 };
    int m_length { 0 };
}

当我们在任何构造参数和列表未初始化os都会分配一个垃圾值


若声明了非默认函数，编译器就不会自动为我们生成默认构造

ClassName cn[3]; 类中没有默认构造函数 无法进行这样的声明

可以这样声明数组
  ClassName cns[3]{{构造函数参数值},{构造函数参数值},{构造函数参数值}}

```


## 复制构造函数
```
1.class 里面的成员变量是简单类型
    编译生成的复制构造函数已经足够

2.复杂类需要自行定义

例
 类成员--指针类型
   定义一个复制构造以分配新内存并从另一个指向对象赋值值
   编译器的赋值函数值复制指针 

   编译器是浅拷贝

   要想深度拷贝需要自行定义



若自己不写构造复制函数编器会创建一个构造函数(默认复制函数)

注意默认构造可能不会存在  但是默认的构造复制函数坑定是会存在的

ClassName ClassName(const Complex & c)  传入的是引用类型



例：
   自定义的赋值构造函数

   class Complex{
public:
    double real, imag;
    Complex(double r,double i){
        real = r; imag = i;
    }
    Complex(const Complex & c){
        real = c.real; imag = c.imag;
        cout<<"Copy Constructor called"<<endl ;
    }
};



也可以删除这个函数阻止用户复制
Box (const Box& other) = delete;


```